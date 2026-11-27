import { Activity, LayoutDashboard, ListTodo, Settings, Upload, Video, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/videos', label: 'Video Library', icon: Video },
  { to: '/upload', label: 'Upload Video', icon: Upload },
  { to: '/jobs', label: 'Processing Jobs', icon: ListTodo },
  { to: '/settings', label: 'Settings', icon: Settings },
];

interface Props { open: boolean; onClose: () => void }
export default function Sidebar({ open, onClose }: Props) {
  return <>
    {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-30 bg-black/60 md:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-dark-700 bg-dark-900 transition-transform md:static md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-20 items-center justify-between border-b border-dark-700 px-6">
        <div className="flex items-center"><div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white"><Video size={21} /></div><div><h1 className="text-xl font-bold tracking-wide">AVPS</h1><p className="text-[11px] text-zinc-500">Async Video Processing</p></div></div>
        <button className="text-zinc-500 md:hidden" onClick={onClose} aria-label="Close menu"><X size={18} /></button>
      </div>
      <div className="px-4 py-6"><p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">Workspace</p><nav className="space-y-1">{links.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${isActive ? 'bg-accent/15 font-medium text-accent-light' : 'text-zinc-400 hover:bg-dark-800 hover:text-white'}`}><Icon size={18} />{label}</NavLink>)}</nav></div>
      <div className="mt-auto p-4"><div className="rounded-xl border border-dark-700 bg-dark-800/80 p-4"><div className="mb-2 flex items-center gap-2"><Activity size={16} className="text-emerald-400"/><span className="text-sm font-medium">System Status</span></div><p className="text-xs text-emerald-400">Demo environment</p><p className="mt-1 text-[11px] leading-5 text-zinc-500">Service status will be connected to the API later.</p></div><p className="mt-4 text-center text-[11px] text-zinc-600">AVPS Version 1.0.0</p></div>
    </aside>
  </>;
}
