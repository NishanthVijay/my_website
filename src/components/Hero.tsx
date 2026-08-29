import EmbeddedSystemPanel from '@/components/EmbeddedSystemPanel';

export default function Hero() {
    return (
        <section
            id="home"
            className="technical-grid relative min-h-screen overflow-hidden pt-20"
        >
            <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/5 blur-[160px]" />

            <div className="pointer-events-none absolute left-0 top-32 hidden opacity-40 lg:block">
                <CircuitDecoration />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_1.35fr] lg:px-16">
                <div className="relative z-10">
                    <p className="font-mono mb-6 text-xs font-medium tracking-[0.25em] text-[var(--accent)]">
                        HELLO, I&apos;M
                    </p>

                    <h1 className="font-heading text-[clamp(4.5rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.06em] text-[var(--foreground)]">
                        NISHANTH
                        <br />
                        VIJAY
                    </h1>

                    <div className="mt-8 flex items-center gap-5">
                        <div className="h-20 w-[3px] bg-[var(--accent)]" />
                        <p className="font-heading text-xl font-medium leading-relaxed tracking-[0.04em] text-[var(--foreground)] md:text-2xl">
                            AUTOMOTIVE EMBEDDED
                            <br />
                            TEST ENGINEER
                        </p>
                    </div>

                    <div className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                        <p><span className="font-medium text-[var(--accent)]">Testing</span>{' '}automotive systems.</p>
                        <p><span className="font-medium text-[var(--accent)]">Exploring</span>{' '}embedded technology.</p>
                        <p><span className="font-medium text-[var(--accent)]">Building</span>{' '}what comes next.</p>
                    </div>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <a href="#projects" className="font-mono inline-flex h-[52px] items-center justify-center bg-[var(--accent)] px-6 text-xs font-semibold tracking-wider text-[var(--background)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]">
                            VIEW PROJECT LAB →
                        </a>
                        <a href="#about" className="font-mono inline-flex h-[52px] items-center justify-center border border-[var(--border)] px-6 text-xs font-semibold tracking-wider text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                            ABOUT ME ↗
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[760px]">
                    <EmbeddedSystemPanel />
                </div>
            </div>

            <div className="relative border-t border-[var(--border)]">
                <div className="font-mono mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-6 text-center text-[10px] tracking-[0.22em] text-[var(--muted)]">
                    <span>AUTOMOTIVE SYSTEMS</span>
                    <span className="text-[var(--accent)]">•</span>
                    <span>EMBEDDED SYSTEMS</span>
                    <span className="text-[var(--accent)]">•</span>
                    <span>CONTINUOUS LEARNING</span>
                </div>
            </div>
        </section>
    );
}

function CircuitDecoration() {
    return (
        <svg width="240" height="320" viewBox="0 0 240 320" fill="none" aria-hidden="true">
            <path d="M0 40H90L130 80V180L180 230H240" stroke="var(--border)" />
            <path d="M0 120H55L85 150V260H145L205 320" stroke="var(--border)" />
            <circle cx="90" cy="40" r="3" fill="var(--accent)" />
            <circle cx="180" cy="230" r="3" fill="var(--accent)" />
            <circle cx="145" cy="260" r="3" fill="var(--accent)" />
        </svg>
    );
}
