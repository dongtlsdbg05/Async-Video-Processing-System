export type JobStatus = 'Pending' | 'Processing' | 'Completed' | 'Failed';
export type TaskType = 'Thumbnail Generation' | 'Metadata Extraction' | 'Video Conversion' | 'Video Compression';

export interface VideoItem {
  id: string;
  name: string;
  size: string;
  format: string;
  duration: string;
  uploadedAt: string;
  status: 'Processed' | 'Processing' | 'Not processed';
  thumbnail?: string;
}

export interface JobItem {
  id: string;
  videoName: string;
  task: TaskType;
  status: JobStatus;
  progress: number;
  createdAt: string;
  worker: string;
}
