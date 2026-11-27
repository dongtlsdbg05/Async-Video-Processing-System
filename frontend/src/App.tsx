import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import Upload from './pages/Upload';
import Jobs from './pages/Jobs';
import Settings from './pages/Settings';

export default function App() {
  return <Routes><Route element={<MainLayout/>}><Route index element={<Dashboard/>}/><Route path="videos" element={<Videos/>}/><Route path="upload" element={<Upload/>}/><Route path="jobs" element={<Jobs/>}/><Route path="settings" element={<Settings/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>;
}
