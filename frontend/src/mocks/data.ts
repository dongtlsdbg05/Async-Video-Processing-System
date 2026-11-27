import type { JobItem, VideoItem } from '../types';

export const initialVideos: VideoItem[] = [
  { id: 'VID-1024', name: 'product_presentation.mp4', size: '128.4 MB', format: 'MP4', duration: '04:32', uploadedAt: 'Nov 27, 2026', status: 'Processed' },
  { id: 'VID-1023', name: 'company_intro.mp4', size: '86.2 MB', format: 'MP4', duration: '02:18', uploadedAt: 'Nov 27, 2026', status: 'Processed' },
  { id: 'VID-1022', name: 'marketing_video.mp4', size: '245.8 MB', format: 'MP4', duration: '08:45', uploadedAt: 'Nov 26, 2026', status: 'Processing' },
  { id: 'VID-1021', name: 'demo_recording.mov', size: '312.1 MB', format: 'MOV', duration: '12:06', uploadedAt: 'Nov 26, 2026', status: 'Not processed' },
  { id: 'VID-1020', name: 'training_session.avi', size: '198.6 MB', format: 'AVI', duration: '09:51', uploadedAt: 'Nov 25, 2026', status: 'Processed' },
];

export const initialJobs: JobItem[] = [
  { id: 'JOB-2081', videoName: 'product_presentation.mp4', task: 'Thumbnail Generation', status: 'Processing', progress: 68, createdAt: '2 minutes ago', worker: 'worker-01' },
  { id: 'JOB-2080', videoName: 'company_intro.mp4', task: 'Metadata Extraction', status: 'Completed', progress: 100, createdAt: '5 minutes ago', worker: 'worker-02' },
  { id: 'JOB-2079', videoName: 'marketing_video.mp4', task: 'Video Conversion', status: 'Processing', progress: 42, createdAt: '8 minutes ago', worker: 'worker-01' },
  { id: 'JOB-2078', videoName: 'demo_recording.mov', task: 'Video Compression', status: 'Failed', progress: 0, createdAt: '15 minutes ago', worker: 'worker-03' },
  { id: 'JOB-2077', videoName: 'training_session.avi', task: 'Metadata Extraction', status: 'Pending', progress: 0, createdAt: '22 minutes ago', worker: '—' },
];
