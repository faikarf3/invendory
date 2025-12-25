import { Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="navbar-gradient sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-navbar-foreground tracking-tight">
            Invendory
          </span>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Explore Button */}
          <Button variant="navbar" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
          </Button>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="navbar" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
              Masuk
            </Button>
            <Button variant="navbarSolid" size="sm">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
