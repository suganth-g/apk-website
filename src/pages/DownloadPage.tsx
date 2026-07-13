import { Download, ShieldCheck, History, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function DownloadPage() {
  const handleDownload = () => {
    toast("Download Started", {
      description: "VishnuBilling_v2.3.1.apk is downloading…",
    });
  };

  const previousVersions = [
    { version: "2.3.0", date: "Sep 28, 2026", size: "24.1 MB" },
    { version: "2.2.5", date: "Aug 10, 2026", size: "23.8 MB" },
    { version: "2.2.0", date: "Jul 15, 2026", size: "23.5 MB" },
    { version: "2.1.2", date: "Jun 05, 2026", size: "22.9 MB" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Download Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
          <Download className="h-10 w-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Vishnu Mobile Shop App</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Get the latest version to enjoy new features, better performance, and enhanced security.
        </p>

        <Button
          size="lg"
          className="text-lg px-10 py-6 h-auto rounded-full shadow-lg shadow-primary/25"
          onClick={handleDownload}
        >
          <Download className="mr-2 h-6 w-6" />
          Download APK (v2.3.1)
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500 bg-gray-50 p-4 rounded-2xl mt-8">
          <div className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />24.5 MB</div>
          <div className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Android 8.0+</div>
          <div className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Updated Oct 15, 2026</div>
          <div className="flex items-center"><ShieldCheck className="h-4 w-4 text-green-500 mr-2" />Verified Safe</div>
        </div>
      </motion.div>

      {/* Release Notes + Checksum */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-0 shadow-sm ring-1 ring-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Info className="mr-2 h-5 w-5 text-primary" />
              What's New in v2.3.1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { tag: "New", color: "bg-green-100 text-green-700", text: "Added support for multi-branch inventory tracking." },
                { tag: "Imp", color: "bg-blue-100 text-blue-700", text: "Faster offline data synchronization." },
                { tag: "Fix", color: "bg-orange-100 text-orange-700", text: "Resolved crash during thermal receipt printing." },
                { tag: "Fix", color: "bg-orange-100 text-orange-700", text: "Fixed UI glitch in the daily sales report chart." },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className={`flex-shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded mr-3 mt-0.5 ${item.color}`}>
                    {item.tag}
                  </span>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <ShieldCheck className="mr-2 h-5 w-5 text-secondary" />
              Security Checksum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Verify the integrity of your download by comparing the SHA-256 checksum below.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <code className="text-xs text-gray-800 break-all">
                8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Downloads:</strong> 142</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Previous Versions */}
      <Card className="border-0 shadow-sm ring-1 ring-gray-100 overflow-hidden">
        <CardHeader className="bg-gray-50/50 border-b border-gray-100">
          <CardTitle className="flex items-center text-xl">
            <History className="mr-2 h-5 w-5 text-gray-500" />
            Previous Versions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[100px]">Version</TableHead>
                <TableHead>Release Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {previousVersions.map((v) => (
                <TableRow key={v.version}>
                  <TableCell className="font-medium">v{v.version}</TableCell>
                  <TableCell className="text-gray-500">{v.date}</TableCell>
                  <TableCell className="text-gray-500">{v.size}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      onClick={() => toast("Downloading v" + v.version)}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
