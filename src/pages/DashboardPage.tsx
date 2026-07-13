import { Link } from "react-router-dom";
import { Download, FileText, Phone, Clock, CheckCircle2, ChevronRight, HardDrive, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function DashboardPage() {
  const stats = [
    { label: "Current Version", value: "2.3.1", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
    { label: "Release Date", value: "Oct 15, 2026", icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "File Size", value: "24.5 MB", icon: HardDrive, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Min. Android", value: "Android 8.0+", icon: Smartphone, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const updates = [
    { version: "2.3.1", date: "Oct 15, 2026", description: "Fixed GST calculation bug and improved sync speed." },
    { version: "2.3.0", date: "Sep 28, 2026", description: "Added new thermal printer support and offline mode." },
    { version: "2.2.5", date: "Aug 10, 2026", description: "Performance improvements and minor UI updates." },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome, Admin</h1>
          <p className="text-gray-500 mt-1">Here's the latest information for the Vishnu Mobile Shop App.</p>
        </div>
        <Button className="rounded-full shadow-md" asChild>
          <Link to="/download">
            <Download className="mr-2 h-4 w-4" />
            Get Latest APK
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={stat.label}
              >
                <Card className="border-0 shadow-sm ring-1 ring-gray-100">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Updates Timeline */}
          <Card className="border-0 shadow-sm ring-1 ring-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Recent Updates</CardTitle>
              <CardDescription>Timeline of the latest app releases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {updates.map((update, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${idx === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      {idx < updates.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-gray-900">v{update.version}</span>
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{update.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{update.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-0 shadow-sm ring-1 ring-gray-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-secondary to-orange-400 w-full" />
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { to: "/download", label: "Download APK", icon: Download, color: "bg-primary/10 text-primary" },
                { to: "/guide", label: "Installation Guide", icon: FileText, color: "bg-orange-100 text-orange-600" },
                { to: "/contact", label: "Contact Admin", icon: Phone, color: "bg-green-100 text-green-600" },
              ].map((action) => (
                <Link
                  key={action.to}
                  to={action.to}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{action.label}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
