import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "The admin will get back to you shortly.",
    });
  };

  const contactMethods = [
    { title: "Phone Number", value: "+91 98765 43210", icon: Phone, color: "bg-blue-100 text-blue-600" },
    { title: "WhatsApp", value: "+91 98765 43210", icon: MessageSquare, color: "bg-green-100 text-green-600" },
    { title: "Email Support", value: "admin@vishnubilling.local", icon: Mail, color: "bg-orange-100 text-orange-600" },
    { title: "Office Hours", value: "Mon – Sat, 9 AM – 7 PM", icon: Clock, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Admin</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Need help with the application or your account? Get in touch with the admin team.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Contact Cards */}
        <div className="lg:col-span-2 space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${method.color} flex items-center justify-center`}>
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{method.title}</p>
                    <p className="text-base font-semibold text-gray-900">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Address Card */}
          <Card className="border-0 shadow-sm ring-1 ring-gray-100 bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Office Address</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Vishnu Mobile Shop HQ<br />
                    123 Business Park, Tech Block<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-xl shadow-gray-200/40 rounded-3xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary w-full" />
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input id="employeeId" placeholder="EMP-001" required className="bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" required className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Describe your issue or question in detail..."
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
