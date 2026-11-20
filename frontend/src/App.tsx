
import {
  LayoutDashboard,
  Video,
  Upload,
  ListTodo,
  Settings,
  Bell,
  Search,
  Play,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreHorizontal,
  ArrowUpRight,
  Activity,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Video Library", icon: Video },
  { label: "Upload Video", icon: Upload },
  { label: "Processing Jobs", icon: ListTodo },
  { label: "Settings", icon: Settings },
];

const stats = [
  {
    label: "Total Videos",
    value: "1,284",
    change: "+12.8%",
    icon: Video,
  },
  {
    label: "Processing",
    value: "24",
    change: "Active jobs",
    icon: Clock,
  },
  {
    label: "Completed",
    value: "1,096",
    change: "+8.2%",
    icon: CheckCircle2,
  },
  {
    label: "Failed Jobs",
    value: "12",
    change: "Needs attention",
    icon: AlertCircle,
  },
];

const jobs = [
  {
    name: "product_presentation.mp4",
    task: "Thumbnail Generation",
    status: "Processing",
    progress: 68,
    time: "2 minutes ago",
  },
  {
    name: "company_intro.mp4",
    task: "Metadata Extraction",
    status: "Completed",
    progress: 100,
    time: "5 minutes ago",
  },
  {
    name: "marketing_video.mp4",
    task: "Video Conversion",
    status: "Processing",
    progress: 42,
    time: "8 minutes ago",
  },
  {
    name: "demo_recording.mp4",
    task: "Video Compression",
    status: "Failed",
    progress: 0,
    time: "15 minutes ago",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-dark-900 border-r border-dark-700 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-dark-700">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mr-3">
            <Play size={21} fill="white" />
          </div>
          <div>
            <h1 className="font-bold text-xl">AVPS</h1>
            <p className="text-xs text-zinc-500">Async Video Processing</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider px-3 mb-3">
            Workspace
          </p>

          <nav className="space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
                    index === 0
                      ? "bg-accent/15 text-accent-light"
                      : "text-zinc-400 hover:bg-dark-800 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="bg-dark-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={17} className="text-green-400" />
              <span className="text-sm font-medium">System Status</span>
            </div>
            <p className="text-xs text-green-400">All systems operational</p>
            <div className="h-1.5 bg-dark-700 rounded-full mt-3 overflow-hidden">
              <div className="h-full w-[85%] bg-green-500 rounded-full" />
            </div>
          </div>
          <p className="text-xs text-zinc-600 mt-4 text-center">
            AVPS Version 1.0.0
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">

        {/* Header */}
        <header className="h-20 border-b border-dark-700 bg-dark-900/80 flex items-center justify-between px-5 md:px-8">
          <div>
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-xs text-zinc-500">
              Welcome to your video processing workspace
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-zinc-400 hover:text-white">
              <Search size={20} />
            </button>
            <button className="relative text-zinc-400 hover:text-white">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent" />
            </button>
            <div className="w-9 h-9 rounded-full bg-accent/30 border border-accent/50 flex items-center justify-center text-sm font-semibold">
              AD
            </div>
          </div>
        </header>

        {/* Dashboard body */}
        <div className="p-5 md:p-8 max-w-[1600px] mx-auto">

          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold">Overview</h3>
              <p className="text-sm text-zinc-500 mt-1">
                Monitor your video processing activities
              </p>
            </div>

            <button className="flex items-center gap-2 bg-accent hover:bg-violet-500 px-4 py-2.5 rounded-lg text-sm font-medium transition">
              <Upload size={17} />
              Upload Video
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="bg-dark-900 border border-dark-700 rounded-xl p-5"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-400">
                      {stat.label}
                    </span>
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent-light">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <span className="text-xs text-zinc-500">
                      {stat.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activity and system status */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

            <section className="xl:col-span-2 bg-dark-900 border border-dark-700 rounded-xl p-5">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold">Processing Activity</h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Video processing overview
                  </p>
                </div>
                <button className="text-zinc-500 hover:text-white">
                  <MoreHorizontal />
                </button>
              </div>

              <div className="flex items-end justify-between gap-3 h-44 px-2">
                {[35, 55, 42, 75, 60, 90, 68, 48, 82, 65, 95, 72].map(
                  (height, index) => (
                    <div key={index} className="flex-1 flex flex-col justify-end h-full">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-violet-700 to-violet-400 opacity-90 hover:opacity-100 transition"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between text-xs text-zinc-500 mt-3 border-t border-dark-700 pt-3">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </section>

            <section className="bg-dark-900 border border-dark-700 rounded-xl p-5">
              <h3 className="font-semibold mb-1">Queue Overview</h3>
              <p className="text-xs text-zinc-500 mb-6">
                Current job distribution
              </p>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Pending</span>
                    <span>18</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full">
                    <div className="h-full w-[35%] bg-amber-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Processing</span>
                    <span>24</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full">
                    <div className="h-full w-[65%] bg-blue-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Completed</span>
                    <span>86</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full">
                    <div className="h-full w-[90%] bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-dark-700">
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 size={17} />
                  Processing service is healthy
                </div>
              </div>
            </section>
          </div>

          {/* Recent jobs */}
          <section className="bg-dark-900 border border-dark-700 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-dark-700">
              <div>
                <h3 className="font-semibold">Recent Processing Jobs</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Latest video processing activities
                </p>
              </div>

              <button className="text-accent-light text-sm flex items-center gap-1 hover:text-white">
                View all <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[650px]">
                <thead className="text-xs text-zinc-500 bg-dark-800/50">
                  <tr>
                    <th className="px-5 py-4">Video</th>
                    <th className="px-5 py-4">Task</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Progress</th>
                    <th className="px-5 py-4">Created</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-dark-700">
                  {jobs.map((job) => (
                    <tr key={job.name} className="hover:bg-dark-800/40">
                      <td className="px-5 py-4 font-medium whitespace-nowrap">
                        {job.name}
                      </td>
                      <td className="px-5 py-4 text-zinc-400 whitespace-nowrap">
                        {job.task}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs ${
                          job.status === "Completed"
                            ? "bg-green-500/10 text-green-400"
                            : job.status === "Processing"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-red-500/10 text-red-400"
                        }`}>
                          {job.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 min-w-36">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${job.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-zinc-400">
                            {job.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-zinc-500 whitespace-nowrap">
                        {job.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer className="text-center text-xs text-zinc-600 py-7">
            AVPS — Async Video Processing System © 2026
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
