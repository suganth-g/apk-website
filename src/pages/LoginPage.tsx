import { Link, useNavigate } from "react-router-dom";
import { Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful!", {
      description: "Welcome back to Vishnu Mobile Shop Admin Portal.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-muted relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-primary/15 blur-[100px] rounded-full" />

      <div className="relative w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <Card className="border-0 shadow-2xl shadow-gray-200/50 rounded-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-secondary w-full" />
          <CardHeader className="space-y-2 pb-6 pt-8 px-8">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Staff Login</CardTitle>
            <CardDescription className="text-gray-500">
              Only authorized Owner and Staff members can access this portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    required
                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full rounded-xl h-12 text-base shadow-lg shadow-primary/20">
                Login to Portal
              </Button>
            </form>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-0 justify-center">
            <p className="text-sm text-gray-500">
              Forgot password?{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Contact Admin
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
