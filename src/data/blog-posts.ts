import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-pessimistic-locking-spring-boot",
    title: "Understanding Pessimistic Locking in Spring Boot & PostgreSQL",
    summary:
      "A deep dive into preventing race conditions in high-concurrency systems using JPA @Lock(LockModeType.PESSIMISTIC_WRITE) and explicit database row locks.",
    publishedAt: "Technical Engineering Note",
    readingTime: "5 min read",
    category: "Backend & Concurrency",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Concurrency", "Transactions"],
    content: `
### The Concurrency Conundrum in Booking Systems

In a standard web application, reading a database row and subsequently updating it is fundamentally non-atomic unless shielded by an appropriate isolation level or locking mechanism. When hundreds of users simultaneously attempt to reserve the same event seat, a standard read-then-write pattern produces critical race conditions:

1. **User A** queries seat #42: \`status = AVAILABLE\`.
2. **User B** queries seat #42: \`status = AVAILABLE\`.
3. **User A** commits reservation: \`status = RESERVED\`.
4. **User B** commits reservation: \`status = RESERVED\`.

Result: **Double-booking anomaly**.

### Pessimistic Write Locking with Spring Data JPA

While optimistic locking (using \`@Version\`) works well when collisions are rare, high-demand ticket sales induce heavy lock contention. In such scenarios, optimistic retries cause high abort rates.

Pessimistic locking prevents this by issuing an explicit SQL row lock:

\`\`\`sql
SELECT * FROM seats WHERE id = ? FOR UPDATE;
\`\`\`

In Spring Data JPA, this is achieved declaratively:

\`\`\`java
@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM Seat s WHERE s.id = :seatId")
    Optional<Seat> findByIdWithPessimisticLock(@Param("seatId") Long seatId);
}
\`\`\`

### Transactional Boundaries & Lock Release

Row locks in PostgreSQL persist until the encompassing transaction completes:

\`\`\`java
@Service
@Transactional(isolation = Isolation.READ_COMMITTED)
public class ReservationService {

    private final SeatRepository seatRepository;

    public ReservationResult reserveSeat(Long seatId, Long userId) {
        // Obtains row lock. Concurrent threads will wait here.
        Seat seat = seatRepository.findByIdWithPessimisticLock(seatId)
            .orElseThrow(() -> new SeatNotFoundException(seatId));

        if (seat.getStatus() != SeatStatus.AVAILABLE) {
            throw new SeatAlreadyReservedException(seatId);
        }

        seat.setStatus(SeatStatus.RESERVED);
        seat.setAssignedUserId(userId);
        seatRepository.save(seat);

        return ReservationResult.success(seat);
    }
}
\`\`\`

### Key Takeaways

1. **Order Matters:** When acquiring locks on multiple seats in a single request, always sort seat IDs deterministically to avoid database deadlocks.
2. **Timeout Safeguards:** Use \`javax.persistence.lock.timeout\` hints to prevent threads from hanging indefinitely during high saturation.
3. **Defense in Depth:** Combine locking with unique composite constraints (\`UNIQUE(event_id, seat_number)\`) at the schema layer.
`,
  },
  {
    slug: "collecting-smartphone-sensor-data-flutter",
    title: "Capturing Smartphone Sensor Telemetry using Flutter & Dart",
    summary:
      "Architectural considerations for high-frequency accelerometer and gyroscope streaming on mobile devices without dropping UI frames.",
    publishedAt: "Technical Engineering Note",
    readingTime: "4 min read",
    category: "Mobile & Telemetry",
    tags: ["Flutter", "Dart", "Sensors", "Mobile Architecture"],
    content: `
### Telematics on Mobile Devices

Modern smartphones pack high-precision Inertial Measurement Units (IMU) capable of sampling three-axis acceleration and rotation rates at frequencies exceeding 100 Hz. Extracting actionable driving insights—such as abrupt braking or aggressive cornering—requires efficient data stream handling.

### Decoupling the Stream from the UI

In Flutter, naive stream listeners attached directly to widget states quickly trigger unnecessary re-renders, causing frame drops (jank):

\`\`\`dart
// Recommended approach: StreamSubscription with throttling or background isolate processing
import 'package:sensors_plus/sensors_plus.dart';

class SensorTelemetryService {
  StreamSubscription<UserAccelerometerEvent>? _accelSubscription;

  void startListening(Function(double x, double y, double z) onMetric) {
    _accelSubscription = userAccelerometerEventStream(
      samplingPeriod: SensorInterval.gameInterval, // ~20ms / 50Hz
    ).listen((UserAccelerometerEvent event) {
      // Basic low-pass filter to smooth road vibration
      onMetric(event.x, event.y, event.z);
    });
  }

  void stop() {
    _accelSubscription?.cancel();
  }
}
\`\`\`

### Filtering Road Surface Noise

Raw vehicle telemetry is dominated by high-frequency vibration from road textures and potholes. A simple exponential moving average or low-pass filter helps isolate significant directional shifts from random noise.
`,
  },
  {
    slug: "dockerizing-full-stack-applications",
    title: "Dockerizing Multi-Tier Full-Stack Applications",
    summary:
      "Practical guidelines for writing multi-stage Dockerfiles and orchestrating Spring Boot, PostgreSQL, and modern frontend containers.",
    publishedAt: "Technical Engineering Note",
    readingTime: "6 min read",
    category: "DevOps & Containers",
    tags: ["Docker", "DevOps", "Spring Boot", "Containers"],
    content: `
### Why Multi-Stage Docker Builds Matter

A standard Maven or Gradle build environment can weigh several hundred megabytes due to SDKs and caches. Using multi-stage builds isolates compilation from runtime, yielding lean, secure production images.

\`\`\`dockerfile
# Stage 1: Build Java backend
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Minimal JRE runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

### Key Benefits
- **Minimal attack surface:** No compilers, git, or build dependencies inside production containers.
- **Reproducible deployments:** Identical runtime behavior across local development and production servers.
`,
  },
];

