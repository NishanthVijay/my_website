"use client";

const capabilities = [
    {
        id: "01",
        title: "SYSTEM TESTING",
        description: "Testing and evaluating embedded automotive systems.",
    },
    {
        id: "02",
        title: "VALIDATION",
        description: "Verifying system behavior against requirements.",
    },
    {
        id: "03",
        title: "DEBUGGING",
        description: "Investigating issues and analyzing system behavior.",
    },
    {
        id: "04",
        title: "TEST AUTOMATION",
        description: "Improving testing workflows and engineering efficiency.",
    },
];

const workflow = [
    "UNDERSTAND SYSTEM",
    "ANALYZE REQUIREMENTS",
    "TEST & EXECUTE",
    "DEBUG & INVESTIGATE",
    "VALIDATE RESULTS",
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="experience-section relative overflow-hidden border-t border-[var(--border)]"
        >
            {/* Background decoration */}
            <div className="experience-glow pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
                {/* =====================================================
            SECTION HEADER
        ====================================================== */}

                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)]">
                            02 / EXPERIENCE
                        </span>

                        <div className="h-px w-20 bg-[var(--border)]" />
                    </div>

                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--foreground)] md:text-7xl">
                                EXPERIENCE,
                                <br />
                                <span className="text-[var(--muted)]">LOGGED.</span>
                            </h2>
                        </div>

                        <div className="border-l border-[var(--accent)] pl-5">
                            <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]">
                                03+ YEARS
                            </p>

                            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                                Building experience across automotive systems,
                                testing, validation and embedded technology.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            EXPERIENCE TIMELINE
        ====================================================== */}

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-[var(--border)] md:block" />

                    {/* CURRENT ROLE */}
                    <ExperienceCard
                        status="CURRENT ROLE"
                        active
                        role="GRADUATE ENGINEER"
                        period="JUL 2024 → PRESENT"
                        location="BENGALURU, INDIA"
                        description="Working in a professional automotive engineering environment with a focus on testing, validation and the behavior of complex embedded systems."
                        tags={[
                            "AUTOMOTIVE",
                            "EMBEDDED SYSTEMS",
                            "TESTING",
                            "VALIDATION",
                        ]}
                    />

                    {/* PREVIOUS ROLE */}
                    <ExperienceCard
                        status="PREVIOUS ROLE"
                        role="PROJECT INTERN"
                        period="JUL 2023 → AUG 2024"
                        location="BENGALURU, INDIA"
                        description="Developed practical engineering experience while building a foundation in professional testing, development workflows and automotive systems."
                        tags={[
                            "ENGINEERING",
                            "TESTING",
                            "LEARNING",
                            "DEVELOPMENT",
                        ]}
                    />
                </div>

                {/* =====================================================
            CAPABILITIES
        ====================================================== */}

                <div className="mt-28">
                    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--accent)]">
                                ENGINEERING CAPABILITIES
                            </p>

                            <h3 className="font-heading mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                                WHAT I WORK WITH.
                            </h3>
                        </div>

                        <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                            A combination of testing, analysis and system-level
                            thinking applied to automotive and embedded environments.
                        </p>
                    </div>

                    <div className="grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((capability) => (
                            <CapabilityCard
                                key={capability.id}
                                capability={capability}
                            />
                        ))}
                    </div>
                </div>

                {/* =====================================================
            ENGINEERING APPROACH
        ====================================================== */}

                <div className="mt-28 border border-[var(--border)] bg-[var(--surface)]">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] px-6 py-5 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <span className="experience-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                            <span className="font-mono text-xs tracking-[0.2em] text-[var(--foreground)]">
                                ENGINEERING WORKFLOW
                            </span>
                        </div>

                        <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                            PROCESS_ACTIVE
                        </span>
                    </div>

                    {/* Workflow */}
                    <div className="grid divide-y divide-[var(--border)] md:grid-cols-5 md:divide-x md:divide-y-0">
                        {workflow.map((step, index) => (
                            <WorkflowStep
                                key={step}
                                number={String(index + 1).padStart(2, "0")}
                                title={step}
                                isLast={index === workflow.length - 1}
                            />
                        ))}
                    </div>
                </div>

                {/* =====================================================
            EXPERIENCE FOOTNOTE
        ====================================================== */}

                <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 md:flex-row md:items-center">
                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                        PROFESSIONAL EXPERIENCE / AUTOMOTIVE ENGINEERING
                    </p>

                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                        STATUS: CONTINUOUSLY EVOLVING
                    </p>
                </div>
            </div>
        </section>
    );
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
    status,
    active = false,
    role,
    period,
    location,
    description,
    tags,
}: {
    status: string;
    active?: boolean;
    role: string;
    period: string;
    location: string;
    description: string;
    tags: string[];
}) {
    return (
        <div className="relative mb-10 pl-0 md:mb-16 md:pl-14">
            {/* Timeline node */}
            <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center border border-[var(--border)] bg-[var(--background)] md:flex">
                <span
                    className={`h-2 w-2 rounded-full ${active
                            ? "experience-node-active bg-[var(--accent)]"
                            : "bg-[var(--muted)]"
                        }`}
                />
            </div>

            <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]/50">
                {/* Card Header */}
                <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] px-6 py-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-3">
                        <span
                            className={`h-2 w-2 rounded-full md:hidden ${active
                                    ? "experience-node-active bg-[var(--accent)]"
                                    : "bg-[var(--muted)]"
                                }`}
                        />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
                            {status}
                        </span>
                    </div>

                    <span
                        className={`font-mono text-[10px] tracking-[0.15em] ${active
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                    >
                        {active ? "● ACTIVE" : "● COMPLETED"}
                    </span>
                </div>

                {/* Main content */}
                <div className="grid gap-8 p-6 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
                    {/* Left */}
                    <div>
                        <h3 className="font-heading text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
                            {role}
                        </h3>

                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                            <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                                {period}
                            </span>

                            <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                                {location}
                            </span>
                        </div>

                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono border border-[var(--border)] px-3 py-2 text-[9px] tracking-[0.12em] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right metadata */}
                    <div className="border border-[var(--border)] bg-[var(--background)]">
                        <div className="border-b border-[var(--border)] px-5 py-4">
                            <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                                ROLE DATA
                            </p>
                        </div>

                        <div className="divide-y divide-[var(--border)]">
                            <RoleData label="DOMAIN" value="AUTOMOTIVE" />
                            <RoleData label="DISCIPLINE" value="TEST ENGINEERING" />
                            <RoleData
                                label="FOCUS"
                                value={active ? "VALIDATION" : "ENGINEERING"}
                            />
                            <RoleData
                                label="STATUS"
                                value={active ? "ACTIVE" : "COMPLETED"}
                                accent={active}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapabilityCard({
    capability,
}: {
    capability: {
        id: string;
        title: string;
        description: string;
    };
}) {
    return (
        <div className="group relative min-h-[230px] border-b border-r border-[var(--border)] p-7 transition-all duration-300 hover:bg-[var(--surface)]">
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)]">
                {capability.id}
            </span>

            <div className="mt-10 h-px w-12 bg-[var(--border)] transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--accent)]" />

            <h4 className="font-heading mt-7 text-lg font-semibold tracking-wide text-[var(--foreground)]">
                {capability.title}
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {capability.description}
            </p>

            <span className="absolute bottom-5 right-5 font-mono text-xs text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                ↗
            </span>
        </div>
    );
}


/* =========================================================
   ROLE DATA
========================================================= */

function RoleData({
    label,
    value,
    accent = false,
}: {
    label: string;
    value: string;
    accent?: boolean;
}) {
    return (
        <div className="flex items-center justify-between gap-4 px-5 py-4">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[var(--muted)]">
                {label}
            </span>

            <span
                className={`font-mono text-right text-[9px] tracking-[0.12em] ${accent
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}


/* =========================================================
   WORKFLOW STEP
========================================================= */

function WorkflowStep({
    number,
    title,
    isLast,
}: {
    number: string;
    title: string;
    isLast: boolean;
}) {
    return (
        <div className="group relative min-h-[160px] p-6">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                {number}
            </span>

            <div className="mt-7 h-px w-10 bg-[var(--border)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--accent)]" />

            <p className="font-heading mt-6 text-sm font-semibold tracking-wide text-[var(--foreground)]">
                {title}
            </p>

            {!isLast && (
                <span className="absolute right-4 top-1/2 hidden -translate-y-1/2 font-mono text-[var(--accent)] lg:block">
                    →
                </span>
            )}
        </div>
    );
}