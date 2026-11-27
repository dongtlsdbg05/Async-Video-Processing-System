import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-dark-950 text-zinc-100 md:flex"><Sidebar open={menuOpen} onClose={() => setMenuOpen(false)}/><div className="min-w-0 flex-1"><Header onMenu={() => setMenuOpen(true)}/><main className="mx-auto w-full max-w-[1600px] p-5 md:p-8"><Outlet/><footer className="py-8 text-center text-xs text-zinc-600">AVPS — Async Video Processing System © 2026</footer></main></div></div>;
}
