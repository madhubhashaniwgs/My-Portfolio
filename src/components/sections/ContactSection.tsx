"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { profileData } from "@/data/profile";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { toast } from "@/hooks/useToast";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  Github,
  Linkedin,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(10, "Please enter a message (at least 10 characters)."),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied to clipboard!",
      description: `${text} copied successfully.`,
      type: "success",
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendViaWhatsApp = () => {
    const data = getValues();
    if (!data.name || !data.message) {
      toast({
        title: "Please fill in the form",
        description: "Please enter your name and message before sending via WhatsApp.",
        type: "error",
      });
      return;
    }

    const phone = "+94717597998";
    const text = `Hello Saranga Madhubhashani, my name is ${data.name} (${data.email}).\n\nSubject: ${data.subject || "Portfolio Inquiry"}\n\nMessage:\n${data.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSendViaEmail = (data: ContactFormValues) => {
    if (data.honeypot) return;

    const subjectEncoded = encodeURIComponent(
      data.subject || `Portfolio Contact from ${data.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:${profileData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    reset();

    toast({
      title: "Email Client Opened",
      description: "Your email application has opened with your message details.",
      type: "success",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-border/40 scroll-mt-20"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

        {/* Section Header */}
        <RevealOnScroll className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-500/20">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Let's <span className="text-cyan-600 dark:text-cyan-400">Connect</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground pt-1 leading-relaxed">
            I'm always open to discussing internships, full-time opportunities, collaborations, or exciting software development projects.
          </p>
        </RevealOnScroll>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column */}
          <RevealOnScroll className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                Let's Talk <span className="text-2xl">👋</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have an internship opportunity, a project idea, or just want to connect, I'd be happy to hear from you. Feel free to reach out anytime.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Box */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl glass-panel border border-border/70 text-sm shadow-md hover:border-cyan-500 dark:hover:border-cyan-400 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-muted-foreground block">Email</span>
                    <span className="font-semibold text-foreground truncate block text-xs sm:text-sm">
                      {profileData.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.email, "email")}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-colors shrink-0"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-500 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Box */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl glass-panel border border-border/70 text-sm shadow-md hover:border-cyan-500 dark:hover:border-cyan-400 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-muted-foreground block">Phone</span>
                    <span className="font-semibold text-foreground truncate block text-xs sm:text-sm">
                      +94 71 759 7998
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("+94 71 759 7998", "phone")}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-colors shrink-0"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-500 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Box */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl glass-panel border border-border/70 text-sm shadow-md">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-muted-foreground block">Location</span>
                    <span className="font-semibold text-foreground truncate block text-xs sm:text-sm">
                      University of Moratuwa, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl glass-panel border border-purple-500/60 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl glass-panel border border-purple-500/60 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Send Me a Message Form */}
          <RevealOnScroll className="lg:col-span-7 w-full">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xl space-y-6">

              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Send Me a Message
                </h3>
                <p className="text-xs text-muted-foreground pt-1">
                  Have a project, internship opportunity, or collaboration in mind? Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleSendViaEmail)}
                className="space-y-4"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Full Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Email Address <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 transition-all"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="Internship Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Hello Saranga Madhubhashani, I'd like to get in touch regarding..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 resize-y transition-all"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Action Buttons (Send via WhatsApp & Send via Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all cursor-pointer hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-surface border border-cyan-600 dark:border-cyan-400 text-foreground text-xs font-bold uppercase tracking-wider hover:bg-muted/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all cursor-pointer shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-muted-foreground text-center pt-2">
                  I respect your time and typically respond within 24 hours.
                </p>
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}