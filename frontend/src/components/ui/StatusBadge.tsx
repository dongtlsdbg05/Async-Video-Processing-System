import type { JobStatus } from '../../types';

export default function StatusBadge({ status }: { status: JobStatus | 'Processed' | 'Not processed' }) {
  const styles: Record<string, string> = {
    Pending: 'bg-amber-400/10 text-amber-300',
    Processing: 'bg-blue-400/10 text-blue-300',
    Completed: 'bg-emerald-400/10 text-emerald-300',
    Processed: 'bg-emerald-400/10 text-emerald-300',
    Failed: 'bg-rose-400/10 text-rose-300',
    'Not processed': 'bg-zinc-500/15 text-zinc-400',
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>{status}</span>;
}
