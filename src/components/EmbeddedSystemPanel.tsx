export default function EmbeddedSystemPanel() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]" aria-label="Automotive embedded system diagnostic visual">
      <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-6">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.2em] text-[var(--foreground)]">
          <span className="embedded-status-dot h-2 w-2 rounded-full bg-[var(--accent)]" />
          EMBEDDED SYSTEM
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)]">RUNNING</span>
      </div>

      <div className="grid gap-6 p-6 xl:grid-cols-[1fr_220px]">
        <div className="relative hidden min-h-[560px] md:block" aria-hidden="true">
          <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-4"><PeripheralBox label="GPIO" /><PeripheralBox label="ADC" /><PeripheralBox label="PWM" /></div>
          <div className="absolute left-1/2 top-[48px] flex -translate-x-1/2 gap-[54px]"><PinLine /><PinLine /><PinLine /></div>
          <div className="absolute left-0 top-[140px] flex flex-col gap-5"><PeripheralBox label="FLASH" value="1 MB" /><PeripheralBox label="RAM" value="192 KB" /><PeripheralBox label="DEBUG" value="SWD" /></div>
          <div className="absolute right-0 top-[140px] flex flex-col gap-5"><PeripheralBox label="UART" value="2" /><PeripheralBox label="SPI" value="2" /><PeripheralBox label="I²C" value="2" /></div>
          <div className="absolute left-1/2 top-[105px] h-[220px] w-[220px] -translate-x-1/2"><ChipPins side="top" /><ChipPins side="bottom" /><ChipPins side="left" /><ChipPins side="right" /><div className="absolute inset-5 flex flex-col items-center justify-center border border-[var(--accent)] bg-[#0b0f12] shadow-[0_0_40px_rgba(0,212,199,0.08)]"><span className="font-heading text-4xl font-semibold">MCU</span><span className="font-mono mt-2 text-base tracking-[0.08em] text-[var(--accent)]">STM32F407</span><span className="font-mono mt-5 text-xs tracking-[0.18em] text-[var(--muted)]">CORE_01</span></div></div>
          <SignalPath className="left-[105px] top-[168px] w-[75px]" reverse /><SignalPath className="left-[105px] top-[246px] w-[75px]" reverse /><SignalPath className="left-[105px] top-[325px] w-[75px]" reverse /><SignalPath className="right-[105px] top-[168px] w-[75px]" /><SignalPath className="right-[105px] top-[246px] w-[75px]" /><SignalPath className="right-[105px] top-[325px] w-[75px]" />
          <div className="absolute bottom-[125px] left-1/2 flex -translate-x-1/2 gap-4"><PeripheralBox label="CAN" value="500K" /><PeripheralBox label="TIMER" value="4" /><PeripheralBox label="ADC" value="12 BIT" /></div>
          <div className="absolute bottom-[175px] left-1/2 flex -translate-x-1/2 gap-[54px]"><PinLine /><PinLine /><PinLine /></div>
          <div className="absolute bottom-0 left-0 flex w-full justify-between border border-dashed border-[var(--border)] p-4"><ModuleBox title="SENSOR" subtitle="INPUT" icon="〰" /><ModuleBox title="FIRMWARE" subtitle="DEBUG" icon="</>" /><ModuleBox title="MEMORY" subtitle="STORAGE" icon="▣" /></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-[var(--border)] bg-[var(--background)]"><div className="border-b border-[var(--border)] px-5 py-4"><p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">SYSTEM METRICS</p></div><div className="space-y-5 px-5 py-6"><SystemMetric label="CPU LOAD" value="34%" /><SystemMetric label="CLOCK" value="168 MHz" /><SystemMetric label="MEMORY" value="62 KB" /><SystemMetric label="UPTIME" value="04:28:16" /><SystemMetric label="TASKS" value="03 ACTIVE" /><SystemMetric label="STATUS" value="RUNNING" accent /></div></div>
          <div className="flex-1 border border-[var(--border)] bg-[var(--background)] p-5"><p className="font-mono mb-5 text-xs tracking-[0.16em] text-[var(--accent)]">FIRMWARE STATUS</p><pre className="font-mono whitespace-pre-wrap text-[11px] leading-6 text-[var(--muted)]">void main(void){'\n'}{'{'}{'\n'}  System_Init();{'\n\n'}  while(1){'\n'}  {'{'}{'\n'}    Read_Sensors();{'\n'}    Process_Data();{'\n'}    Update_Output();{'\n'}  {'}'}{'\n'}{' }'}</pre></div>
        </div>
      </div>
    </div>
  );
}

function PeripheralBox({ label, value }: { label: string; value?: string }) { return <div className="flex h-[52px] min-w-[74px] flex-col items-center justify-center border border-[var(--border)] bg-[#0b0f12] px-3"><span className="font-mono text-[11px] tracking-wider text-[var(--foreground)]">{label}</span>{value && <span className="font-mono mt-1 text-[9px] text-[var(--muted)]">{value}</span>}</div>; }
function PinLine() { return <div className="relative h-14 w-px bg-[var(--border)]"><span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" /></div>; }
function ChipPins({ side }: { side: 'top' | 'bottom' | 'left' | 'right' }) { const pins = Array.from({ length: 9 }); const position = side === 'top' ? 'left-1/2 top-0 flex -translate-x-1/2 gap-2' : side === 'bottom' ? 'bottom-0 left-1/2 flex -translate-x-1/2 gap-2' : side === 'left' ? 'left-0 top-1/2 flex -translate-y-1/2 flex-col gap-2' : 'right-0 top-1/2 flex -translate-y-1/2 flex-col gap-2'; const pin = side === 'top' || side === 'bottom' ? 'h-5 w-px' : 'h-px w-5'; return <div className={`absolute ${position}`}>{pins.map((_, index) => <span key={index} className={`${pin} bg-[var(--border)]`} />)}</div>; }
function SignalPath({ className, reverse = false }: { className: string; reverse?: boolean }) { return <div className={`absolute h-px bg-[var(--border)] ${className}`}><span className={`embedded-signal absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] ${reverse ? 'embedded-signal-reverse' : ''}`} /></div>; }
function ModuleBox({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) { return <div className="flex h-[96px] w-[30%] flex-col items-center justify-center border border-[var(--border)] bg-[#0b0f12]"><span className="font-mono text-xs tracking-[0.12em] text-[var(--foreground)]">{title}</span><span className="font-mono mt-1 text-[9px] tracking-wider text-[var(--muted)]">{subtitle}</span><span className="mt-3 font-mono text-sm text-[var(--accent)]">{icon}</span></div>; }
function SystemMetric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) { return <div className="font-mono flex items-center justify-between gap-3 text-[10px] tracking-wider"><span className="text-[var(--muted)]">{label}</span><span className={accent ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'}>{value}</span></div>; }