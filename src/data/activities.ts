import { Activity } from "@/types/portfolio";

/**
 * Extracurricular activities, student societies, and university events.
 * Strictly empty until the candidate provides verified personal involvement.
 * UI components must check `activitiesData.length > 0` before rendering this section.
 */
export const activitiesData: Activity[] = [];

export function hasActivities(): boolean {
  return activitiesData.length > 0;
}

