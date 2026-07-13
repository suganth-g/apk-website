import { Download, Settings, Smartphone, CheckCircle, LogIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function GuidePage() {
  const steps = [
    {
      title: "Download APK",
      description: "Click the Download APK button from the dashboard or download page to get the latest .apk file.",
      icon: Download,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Allow Unknown Sources",
      description: "Go to Settings → Security → Install unknown apps and enable permission for your browser or file manager.",
      icon: Settings,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Install the APK",
      description: "Open your downloads folder, tap on the .apk file, and press 'Install' when prompted by Android.",
      icon: Smartphone,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Open & Login",
      description: "Launch the Vishnu Mobile Shop App and sign in using the staff credentials provided by the admin.",
      icon: LogIn,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <Smartphone className="h-8 w-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Installation Guide</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to install the Vishnu Mobile Shop App on your Android device.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200" />

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative flex gap-6 md:gap-8 items-start"
            >
              <div className={`shrink-0 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm relative z-10`}>
                <step.icon className="h-7 w-7" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center font-bold text-xs shadow-sm border border-gray-100 text-gray-900">
                  {index + 1}
                </div>
              </div>

              <Card className="flex-1 border-0 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success State */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You're All Set!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          After installation, open the app and log in with your staff credentials. You're ready to start billing!
        </p>
        <Button className="rounded-full" asChild>
          <Link to="/download">
            <Download className="mr-2 h-4 w-4" />
            Go to Download Page
          </Link>
        </Button>
      </motion.div>

      {/* Troubleshooting */}
      <div className="mt-16 bg-orange-50 rounded-3xl p-8 md:p-10 border border-orange-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Having Trouble?</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            Make sure you have at least 50MB of free storage on your device.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            If installation is blocked, check that "Install from unknown sources" is enabled for your browser.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            Uninstall any older version of the app before installing the new one.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">•</span>
            If problems persist,{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">contact the admin</Link>.
          </li>
        </ul>
      </div>
    </div>
  );
}
