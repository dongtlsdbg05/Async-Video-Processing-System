import { Bell, Menu, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Dashboard', subtitle: 'Monitor your video processing activities' },
  '/videos': { title: 'Video Library', subtitle: 'Browse and manage your uploaded videos' },
  '/upload': { title: 'Upload Video', subtitle: 'Add a video and choose background processing tasks' },
  '/jobs': { title: 'Processing Jobs', subtitle: 'Track background jobs and their execution status' },
  '/settings': { title: 'Settings', subtitle: 'Application preferences and service information' },
};
export default function Header({ onMenu }: { onMenu: () => void }) {
  const { pathname } = useLocation();
  const page = titles[pathname] ?? titles['/'];
  return <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-dark-700 bg-dark-900/95 px-5 backdrop-blur md:px-8"><div className="flex items-center gap-3"><button onClick={onMenu} className="rounded-lg p-2 text-zinc-400 hover:bg-dark-800 md:hidden" aria-label="Open navigation"><Menu size={20}/></button><div><h2 className="font-semibold">{page.title}</h2><p className="mt-0.5 hidden text-xs text-zinc-500 sm:block">{page.subtitle}</p></div></div><div className="flex items-center gap-3"><button className="rounded-lg p-2 text-zinc-400 hover:bg-dark-800 hover:text-white" aria-label="Search"><Search size={19}/></button><button className="relative rounded-lg p-2 text-zinc-400 hover:bg-dark-800 hover:text-white" aria-label="Notifications"><Bell size={19}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400"/></button><div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-accent/20 text-xs font-semibold text-violet-200">AD</div></div></header>;
}
