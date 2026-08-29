const placeholders = [
    {
        number: "01",
        icon: "◈",
        title: "PROJECT_PLACEHOLDER_01",
    },
    {
        number: "02",
        icon: "</>",
        title: "PROJECT_PLACEHOLDER_02",
    },
    {
        number: "03",
        icon: "◌",
        title: "PROJECT_PLACEHOLDER_03",
    },
];

export default function ProjectLab() {
    return (
        <section
            id="projects"
            className="project-lab-section relative overflow-hidden border-t border-[var(--border)]"
        >
            {/* Background glow */}
            <div className="project-lab-glow pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
                {/* =====================================================
            HEADER
        ====================================================== */}

                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)]">
                            05 / PROJECT LAB
                        </span>

                        <div className="h-px w-20 bg-[var(--border)]" />
                    </div>

                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                        {/* Main heading */}

                        <div>
                            <h2 className="font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--foreground)] md:text-7xl">
                                BUILD.
                                <br />
                                TEST.
                                <br />
                                <span className="text-[var(--muted)]">ITERATE.</span>
                            </h2>
                        </div>

                        {/* Pipeline message */}

                        <div className="max-w-md border-l border-[var(--accent)] pl-5">
                            <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
                                NEW PROJECTS IN PIPELINE
                            </p>

                            <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                                WAIT FOR UPDATES.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                                Embedded projects and experiments are currently in development.
                                New builds will appear here as they are completed and documented.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            REPOSITORY STATUS
        ====================================================== */}

                <div className="mb-12 border border-[var(--border)] bg-[var(--surface)]">
                    <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] px-6 py-5 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <span className="project-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                            <span className="font-mono text-xs tracking-[0.2em] text-[var(--foreground)]">
                                REPOSITORY STATUS
                            </span>
                        </div>

                        <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                            INITIALIZING
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 px-6 py-12 text-center md:flex-row md:text-left">
                        {/* Terminal icon */}

                        <div className="project-terminal-icon flex h-16 w-16 items-center justify-center border border-[var(--accent)]/40">
                            <span className="font-mono text-2xl text-[var(--accent)]">
                                &gt;_
                            </span>
                        </div>

                        <div>
                            <p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">
                                INITIALIZING PROJECT REPOSITORY
                            </p>

                            <p className="mt-3 text-sm text-[var(--muted)]">
                                Projects will appear here soon.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            PROJECT PLACEHOLDERS
        ====================================================== */}

                <div className="project-placeholder-container border border-dashed border-[var(--accent)]/50 p-5 md:p-8">
                    <div className="grid gap-5 lg:grid-cols-3">
                        {placeholders.map((project) => (
                            <ProjectPlaceholder
                                key={project.number}
                                number={project.number}
                                icon={project.icon}
                                title={project.title}
                            />
                        ))}
                    </div>
                </div>

                {/* =====================================================
            GITHUB CTA
        ====================================================== */}

                <div className="mt-16 border border-[var(--border)] bg-[var(--surface)]">
                    <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:justify-between md:p-10">
                        {/* GitHub information */}

                        <div className="flex items-center gap-6">
                            <div className="flex h-16 w-16 items-center justify-center border border-[var(--border)]">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-8 w-8 fill-[var(--foreground)]"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 5.7c.97 0 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.12 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-heading text-xl font-semibold text-[var(--foreground)]">
                                    FOLLOW THE BUILD PROCESS
                                </p>

                                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                                    All future source code, documentation and project updates
                                    will be available on GitHub.
                                </p>
                            </div>
                        </div>

                        {/* UPDATE YOUR GITHUB LINK HERE */}

                        <a
                            href="https://github.com/YOUR_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-github-button group inline-flex items-center gap-4 border border-[var(--accent)] px-7 py-4 font-mono text-xs tracking-[0.14em] text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
                        >
                            VISIT GITHUB REPOSITORY

                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>

                {/* =====================================================
            FOOTER STATUS
        ====================================================== */}

                <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 md:flex-row md:items-center">
                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                        PROJECT LAB / WAITING FOR FIRST BUILD
                    </p>

                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                        NEW PROJECTS IN PIPELINE
                    </p>
                </div>
            </div>
        </section>
    );
}

/* =====================================================
   PROJECT PLACEHOLDER
===================================================== */

function ProjectPlaceholder({
    number,
    icon,
    title,
}: {
    number: string;
    icon: string;
    title: string;
}) {
    return (
        <article className="project-placeholder group relative flex min-h-[380px] flex-col items-center justify-center border border-dashed border-[var(--accent)]/30 px-6 py-10 text-center transition-all duration-300 hover:border-[var(--accent)]/70">
            {/* Number */}

            <div className="absolute left-6 top-6 border border-dashed border-[var(--accent)]/50 px-3 py-2">
                <span className="font-mono text-xs tracking-[0.15em] text-[var(--accent)]">
                    {number}
                </span>
            </div>

            {/* Icon */}

            <div className="project-placeholder-icon flex h-24 w-24 items-center justify-center border border-[var(--accent)]/30 text-3xl text-[var(--accent)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent)]">
                {icon}
            </div>

            {/* Title */}

            <h3 className="font-mono mt-8 text-sm tracking-[0.15em] text-[var(--accent)]">
                {title}
            </h3>

            <div className="my-5 h-px w-16 bg-[var(--border)] group-hover:bg-[var(--accent)]" />

            {/* Description */}

            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
                Project details will be updated here.
                <br />
                Stay tuned!
            </p>

            {/* Placeholder button */}

            <div className="mt-8 border border-dashed border-[var(--accent)]/40 px-6 py-3">
                <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--foreground)]">
                    <span className="mr-3 text-[var(--accent)]">+</span>
                    ADD PROJECT DETAILS
                </span>
            </div>
        </article>
    );
}