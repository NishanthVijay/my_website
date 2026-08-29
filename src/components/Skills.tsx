"use client";

const skillGroups = [
    {
        id: "01",
        title: "AUTOMOTIVE & TESTING",
        subtitle: "PROFESSIONAL TOOLSET",
        status: "ACTIVE",
        description:
            "Tools and technologies used for automotive testing, analysis, validation and engineering workflows.",
        skills: [
            "CANoe",
            "CANalyzer",
            "CAPL",
            "JIRA",
            "Vector Tools",
            "NI Tools",
        ],
    },
    {
        id: "02",
        title: "PROGRAMMING",
        subtitle: "SOFTWARE FOUNDATION",
        status: "ACTIVE",
        description:
            "Programming languages forming the foundation of my software and embedded development journey.",
        skills: ["C", "C++", "Python"],
    },
    {
        id: "03",
        title: "EMBEDDED DEVELOPMENT",
        subtitle: "LEARNING / BUILDING",
        status: "IN PROGRESS",
        description:
            "Exploring firmware development, microcontrollers and the communication interfaces that connect embedded systems.",
        skills: ["STM32", "UART", "SPI", "I²C", "FreeRTOS"],
        learning: true,
    },
    {
        id: "04",
        title: "DEVELOPMENT TOOLS",
        subtitle: "ENGINEERING WORKFLOW",
        status: "ACTIVE",
        description:
            "Tools used to manage code, collaborate and build development projects.",
        skills: ["Git", "GitHub", "VS Code"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="skills-section relative overflow-hidden border-t border-[var(--border)]"
        >
            {/* Background glow */}
            <div className="skills-glow pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
                {/* ================= SECTION HEADER ================= */}

                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)]">
                            03 / SKILLS
                        </span>

                        <div className="h-px w-20 bg-[var(--border)]" />
                    </div>

                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--foreground)] md:text-7xl">
                                ENGINEERING
                                <br />
                                <span className="text-[var(--muted)]">TOOLKIT.</span>
                            </h2>
                        </div>

                        <p className="max-w-md border-l border-[var(--accent)] pl-5 text-sm leading-relaxed text-[var(--muted)]">
                            A growing toolkit across automotive testing, embedded systems,
                            programming and modern development workflows.
                        </p>
                    </div>
                </div>

                {/* ================= SKILL MATRIX ================= */}

                <div className="grid gap-5 lg:grid-cols-2">
                    {skillGroups.map((group) => (
                        <SkillModule key={group.id} group={group} />
                    ))}
                </div>

                {/* ================= CAPABILITY SUMMARY ================= */}

                <div className="mt-20 border border-[var(--border)] bg-[var(--surface)]">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] px-6 py-5 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <span className="skills-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                            <span className="font-mono text-xs tracking-[0.2em] text-[var(--foreground)]">
                                CAPABILITY MATRIX
                            </span>
                        </div>

                        <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                            PROFILE_ACTIVE
                        </span>
                    </div>

                    {/* Matrix */}
                    <div className="grid divide-y divide-[var(--border)] md:grid-cols-4 md:divide-x md:divide-y-0">
                        <MatrixItem
                            number="01"
                            title="AUTOMOTIVE"
                            description="Testing and validation"
                        />

                        <MatrixItem
                            number="02"
                            title="SOFTWARE"
                            description="C, C++ and Python"
                        />

                        <MatrixItem
                            number="03"
                            title="EMBEDDED"
                            description="Firmware and interfaces"
                        />

                        <MatrixItem
                            number="04"
                            title="WORKFLOW"
                            description="Version control and tools"
                        />
                    </div>
                </div>

                {/* ================= BOTTOM STATEMENT ================= */}

                <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[var(--border)] pt-6 md:flex-row md:items-center">
                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                        CURRENT FOCUS / EMBEDDED DEVELOPMENT
                    </p>

                    <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                        STATUS: LEARNING → BUILDING → SHIPPING
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ======================================================
   SKILL MODULE
====================================================== */

function SkillModule({
    group,
}: {
    group: {
        id: string;
        title: string;
        subtitle: string;
        status: string;
        description: string;
        skills: string[];
        learning?: boolean;
    };
}) {
    return (
        <div
            className={`group relative overflow-hidden border bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 ${group.learning
                    ? "border-[var(--accent)]/50"
                    : "border-[var(--border)] hover:border-[var(--accent)]/50"
                }`}
        >
            {/* Top accent line */}
            <div
                className={`absolute left-0 top-0 h-px w-full ${group.learning ? "bg-[var(--accent)]" : "bg-transparent"
                    }`}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-5 border-b border-[var(--border)] p-6">
                <div className="flex gap-5">
                    <span className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]">
                        {group.id}
                    </span>

                    <div>
                        <h3 className="font-heading text-xl font-semibold tracking-wide text-[var(--foreground)]">
                            {group.title}
                        </h3>

                        <p className="font-mono mt-2 text-[9px] tracking-[0.16em] text-[var(--muted)]">
                            {group.subtitle}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                    <span
                        className={`h-2 w-2 rounded-full ${group.learning
                                ? "skills-learning-dot bg-[var(--accent)]"
                                : "bg-[var(--muted)]"
                            }`}
                    />

                    <span
                        className={`font-mono whitespace-nowrap text-[9px] tracking-[0.12em] ${group.learning
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                    >
                        {group.status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                    {group.description}
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {group.skills.map((skill, index) => (
                        <SkillTag
                            key={skill}
                            skill={skill}
                            index={index}
                            learning={group.learning}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[var(--border)] px-6 py-4">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    MODULE_{group.id}
                </span>

                <span className="font-mono text-xs text-[var(--border)] transition-colors group-hover:text-[var(--accent)]">
                    ↗
                </span>
            </div>
        </div>
    );
}

/* ======================================================
   SKILL TAG
====================================================== */

function SkillTag({
    skill,
    index,
    learning = false,
}: {
    skill: string;
    index: number;
    learning?: boolean;
}) {
    return (
        <span
            className={`font-mono inline-flex items-center gap-2 border px-3 py-2 text-[10px] tracking-[0.1em] transition-all duration-200 ${learning
                    ? "border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10"
                    : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
        >
            <span className="text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
            </span>

            {skill}
        </span>
    );
}

/* ======================================================
   MATRIX ITEM
====================================================== */

function MatrixItem({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="group min-h-[180px] p-6">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                {number}
            </span>

            <div className="mt-7 h-px w-10 bg-[var(--border)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--accent)]" />

            <h4 className="font-heading mt-6 text-base font-semibold tracking-wide text-[var(--foreground)]">
                {title}
            </h4>

            <p className="mt-3 text-sm text-[var(--muted)]">
                {description}
            </p>
        </div>
    );
}