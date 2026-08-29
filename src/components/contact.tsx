export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* Background glow */}
      <div className="contact-glow pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        {/* Section Label */}

        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)]">
            06 / CONTACT
          </span>

          <div className="h-px w-20 bg-[var(--border)]" />
        </div>

        {/* Main Contact Area */}

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left Side */}

          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">
              OPEN FOR CONVERSATIONS
            </p>

            <h2 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-[var(--foreground)] md:text-7xl">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-[var(--muted)]">INTERESTING.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Interested in conversations about automotive systems, embedded
              development, software engineering and interesting technology
              projects.
            </p>

            {/* Email CTA */}

            <a
              href="mailto:vijay.nishanth1999@gmail.com"
              className="contact-email-button group mt-10 inline-flex items-center gap-5 border border-[var(--accent)] bg-[var(--accent)] px-7 py-5 font-mono text-xs tracking-[0.14em] text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,212,199,0.25)]"
            >
              EMAIL ME

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>

          {/* Right Side — Contact Terminal */}

          <div className="contact-terminal border border-[var(--border)] bg-[var(--surface)]">
            {/* Terminal Header */}

            <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="contact-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--foreground)]">
                  CONTACT_CHANNELS
                </span>
              </div>

              <span className="font-mono text-[9px] tracking-[0.14em] text-[var(--accent)]">
                ONLINE
              </span>
            </div>

            {/* Contact Items */}

            <div className="divide-y divide-[var(--border)]">
              {/* Email */}

              <a
                href="mailto:vijay.nishanth1999@gmail.com"
                className="contact-channel group flex items-center justify-between gap-5 px-6 py-6 transition-colors duration-300 hover:bg-[var(--accent)]/5"
              >
                <div>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    EMAIL
                  </p>

                  <p className="mt-2 text-sm text-[var(--foreground)]">
                    vijay.nishanth1999@gmail.com
                  </p>
                </div>

                <span className="text-lg text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/nishanth-v-924994246/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel group flex items-center justify-between gap-5 px-6 py-6 transition-colors duration-300 hover:bg-[var(--accent)]/5"
              >
                <div>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    LINKEDIN
                  </p>

                  <p className="mt-2 text-sm text-[var(--foreground)]">
                    CONNECT WITH ME
                  </p>
                </div>

                <span className="text-lg text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* GitHub Placeholder */}

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel group flex items-center justify-between gap-5 px-6 py-6 transition-colors duration-300 hover:bg-[var(--accent)]/5"
              >
                <div>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    GITHUB
                  </p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    REPOSITORY INITIALIZING
                  </p>
                </div>

                <span className="font-mono text-xs text-[var(--accent)]">
                  PENDING
                </span>
              </a>
            </div>

            {/* Terminal Footer */}

            <div className="border-t border-[var(--border)] px-6 py-4">
              <p className="font-mono text-[9px] tracking-[0.14em] text-[var(--muted)]">
                STATUS: AVAILABLE_FOR_CONVERSATION
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}

        <div className="mt-24 border-t border-[var(--border)] pt-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
              AUTOMOTIVE / EMBEDDED / SOFTWARE
            </p>

            <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
              THANKS FOR STOPPING BY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}