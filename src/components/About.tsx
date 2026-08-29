"use client";

const journey = [
    {
        id: "01",
        title: "ELECTRICAL & ELECTRONICS",
        subtitle: "ENGINEERING FOUNDATION",
        description:
            "Building a strong understanding of electronics, electrical systems, and the fundamentals behind how hardware works.",
    },
    {
        id: "02",
        title: "COMPUTER SCIENCE",
        subtitle: "SOFTWARE FOUNDATION",
        description:
            "Expanding into software, computing, and the systems that connect code with real-world technology.",
    },
    {
        id: "03",
        title: "AUTOMOTIVE TESTING",
        subtitle: "PROFESSIONAL EXPERIENCE",
        description:
            "Working with complex automotive systems and developing a deeper understanding of testing, validation, and system behavior.",
    },
    {
        id: "04",
        title: "EMBEDDED DEVELOPMENT",
        subtitle: "CURRENT JOURNEY",
        description:
            "Exploring embedded development, firmware, microcontrollers, and building projects that connect hardware and software.",
    },
];

const interests = [
    {
        symbol: "01",
        title: "MYTHOLOGICAL FICTION",
        description: "Stories, mythology and imaginative worlds.",
    },
    {
        symbol: "02",
        title: "OPEN WATER SWIMMING",
        description: "Endurance, discipline and the Chennai coast.",
    },
    {
        symbol: "03",
        title: "TRAVEL",
        description: "Exploring new places, roads and experiences.",
    },
    {
        symbol: "04",
        title: "FITNESS",
        description: "Consistency, strength and personal growth.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="about-section relative overflow-hidden border-t border-[var(--border)]"
        >
            {/* Background decoration */}
            <div className="about-glow pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
                {/* =====================================================
            SECTION HEADER
        ====================================================== */}

                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)]">
                            01 / ABOUT
                        </span>

                        <div className="h-px w-20 bg-[var(--border)]" />
                    </div>

                    <h2 className="font-heading max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] md:text-7xl">
                        ENGINEER BY PROFESSION.
                        <br />
                        <span className="text-[var(--muted)]">EXPLORER BY NATURE.</span>
                    </h2>
                </div>

                {/* =====================================================
            MAIN GRID
        ====================================================== */}

                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
                    {/* =================================================
              LEFT — PROFILE CARD
          ================================================= */}

                    <div className="relative">
                        <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                            {/* Card Header */}
                            <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <span className="about-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />

                                    <span className="font-mono text-xs tracking-[0.2em] text-[var(--foreground)]">
                                        PROFILE_01
                                    </span>
                                </div>

                                <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                                    ACTIVE
                                </span>
                            </div>

                            {/* Profile Identity */}
                            <div className="border-b border-[var(--border)] p-7">
                                <div className="mb-8 flex h-20 w-20 items-center justify-center border border-[var(--accent)]">
                                    <span className="font-heading text-2xl font-semibold text-[var(--accent)]">
                                        NV
                                    </span>
                                </div>

                                <h3 className="font-heading text-3xl font-semibold tracking-tight">
                                    NISHANTH VIJAY
                                </h3>

                                <p className="font-mono mt-3 text-xs tracking-[0.15em] text-[var(--muted)]">
                                    AUTOMOTIVE / EMBEDDED
                                </p>
                            </div>

                            {/* Profile Data */}
                            <div className="divide-y divide-[var(--border)]">
                                <ProfileRow
                                    label="DOMAIN"
                                    value="AUTOMOTIVE SYSTEMS"
                                />

                                <ProfileRow
                                    label="FOCUS"
                                    value="EMBEDDED DEVELOPMENT"
                                />

                                <ProfileRow
                                    label="LOCATION"
                                    value="CHENNAI, INDIA"
                                />

                                <ProfileRow
                                    label="STATUS"
                                    value="CONTINUOUS LEARNING"
                                    accent
                                />
                            </div>

                            {/* Bottom Technical Strip */}
                            <div className="border-t border-[var(--border)] px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--muted)]">
                                        SYSTEM ID
                                    </span>

                                    <span className="font-mono text-[9px] tracking-[0.15em] text-[var(--accent)]">
                                        NV_01
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              RIGHT — STORY + JOURNEY
          ================================================= */}

                    <div>
                        {/* Introduction */}
                        <div className="mb-12 max-w-3xl">
                            <p className="text-xl leading-relaxed text-[var(--muted)] md:text-2xl">
                                I&apos;m an automotive embedded test engineer with a foundation
                                in{" "}
                                <span className="text-[var(--foreground)]">
                                    Electrical &amp; Electronics Engineering
                                </span>{" "}
                                and a Master&apos;s degree in{" "}
                                <span className="text-[var(--foreground)]">
                                    Computer Science.
                                </span>
                            </p>

                            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                                My journey sits at the intersection of hardware, software and
                                automotive systems. While my professional experience is rooted
                                in testing and validation, my curiosity continues to take me
                                deeper into embedded development, firmware and system-level
                                engineering.
                            </p>
                        </div>

                        {/* Journey Header */}
                        <div className="mb-6 flex items-center gap-4">
                            <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">
                                JOURNEY / TIMELINE
                            </span>

                            <div className="h-px flex-1 bg-[var(--border)]" />
                        </div>

                        {/* Journey Timeline */}
                        <div className="relative border-l border-[var(--border)]">
                            {journey.map((item, index) => (
                                <JourneyItem
                                    key={item.id}
                                    item={item}
                                    isLast={index === journey.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* =====================================================
            BEYOND ENGINEERING
        ====================================================== */}

                <div className="mt-28">
                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--accent)]">
                                02 / BEYOND ENGINEERING
                            </p>

                            <h3 className="font-heading mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                                WHAT KEEPS ME CURIOUS.
                            </h3>
                        </div>

                        <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                            Engineering is what I do professionally. Curiosity is what
                            drives everything else.
                        </p>
                    </div>

                    {/* Interest Grid */}
                    <div className="grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
                        {interests.map((interest) => (
                            <InterestCard key={interest.symbol} interest={interest} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function ProfileRow({
    label,
    value,
    accent = false,
}: {
    label: string;
    value: string;
    accent?: boolean;
}) {
    return (
        <div className="flex items-center justify-between gap-6 px-6 py-5">
            <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                {label}
            </span>

            <span
                className={`font-mono text-right text-[10px] tracking-[0.12em] ${accent
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}

function JourneyItem({
    item,
    isLast,
}: {
    item: {
        id: string;
        title: string;
        subtitle: string;
        description: string;
    };
    isLast: boolean;
}) {
    return (
        <div
            className={`relative pl-8 ${isLast ? "pb-0" : "pb-10"
                }`}
        >
            {/* Timeline node */}
            <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border border-[var(--accent)] bg-[var(--background)]">
                <span className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
            </span>

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)]">
                            {item.id}
                        </span>

                        <h4 className="font-heading text-lg font-semibold tracking-wide">
                            {item.title}
                        </h4>
                    </div>

                    <p className="font-mono mt-2 text-[10px] tracking-[0.15em] text-[var(--muted)]">
                        {item.subtitle}
                    </p>
                </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
            </p>
        </div>
    );
}

function InterestCard({
    interest,
}: {
    interest: {
        symbol: string;
        title: string;
        description: string;
    };
}) {
    return (
        <div className="group relative min-h-[230px] border-b border-r border-[var(--border)] p-7 transition-colors duration-300 hover:bg-[var(--surface)]">
            {/* Number */}
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)]">
                {interest.symbol}
            </span>

            {/* Decorative line */}
            <div className="mt-10 h-px w-12 bg-[var(--border)] transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--accent)]" />

            <h4 className="font-heading mt-7 text-lg font-semibold tracking-wide text-[var(--foreground)]">
                {interest.title}
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {interest.description}
            </p>

            {/* Corner indicator */}
            <span className="absolute bottom-5 right-5 font-mono text-xs text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                ↗
            </span>
        </div>
    );
}