export default function ProgressBar({ value }: { value: number }) {
  const color = value === 100 ? 'bg-emerald-400' : 'bg-violet-400';
  return <div className="flex min-w-28 items-center gap-2"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-dark-700"><div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} /></div><span className="w-9 text-right text-xs text-zinc-400">{value}%</span></div>;
}
