export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section border-t border-[var(--border)]">
            <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    {/* Brand */}

                    <div>
                        <a
                            href="#home"
                            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
                        >
                            NV<span className="text-[var(--accent)]">.</span>
                        </a>

                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                            Automotive Embedded Test Engineer exploring embedded systems,
                            firmware development and engineering projects.
                        </p>

                        <div className="mt-8 flex items-center gap-3">
                            <span className="footer-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                            <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--muted)]">
                                SYSTEM STATUS: ONLINE
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}

                    <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                            NAVIGATION
                        </p>

                        <nav className="mt-6 flex flex-col gap-4">
                            <a href="#about" className="footer-link">
                                ABOUT
                            </a>

                            <a href="#experience" className="footer-link">
                                EXPERIENCE
                            </a>

                            <a href="#skills" className="footer-link">
                                SKILLS
                            </a>

                            <a href="#projects" className="footer-link">
                                PROJECT LAB
                            </a>

                            <a href="#contact" className="footer-link">
                                CONTACT
                            </a>
                        </nav>
                    </div>

                    {/* Connect */}

                    <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                            CONNECT
                        </p>

                        <div className="mt-6 flex flex-col gap-4">
                            {/* Email */}

                            <a
                                href="mailto:vijay.nishanth1999@gmail.com"
                                className="footer-link"
                            >
                                EMAIL ↗
                            </a>

                            {/* LinkedIn */}

                            <a
                                href="https://www.linkedin.com/in/nishanth-v-924994246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                LINKEDIN ↗
                            </a>

                            {/* GitHub Placeholder */}

                            <a
                                href="https://github.com/YOUR_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                GITHUB ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            BOTTOM FOOTER BAR
        ====================================================== */}

                <div className="flex flex-col justify-between gap-5 border-t border-[var(--border)] py-6 md:flex-row md:items-center">
                    <p className="font-mono text-[9px] tracking-[0.12em] text-[var(--muted)]">
                        © {currentYear} NISHANTH VIJAY. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] tracking-[0.12em] text-[var(--muted)]">
                            BUILT WITH
                        </span>

                        <span className="font-mono text-[9px] tracking-[0.12em] text-[var(--accent)]">
                            NEXT.JS / REACT / TAILWIND
                        </span>
                    </div>

                    <p className="font-mono text-[9px] tracking-[0.12em] text-[var(--muted)]">
                        VERSION 1.0.0
                    </p>
                </div>
            </div>
        </footer>
    );
}