import { Globe, User, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-gradient sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-navbar-foreground tracking-tight">
            invendory
          </span>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Explore Button - Navigate to Home */}
          <Button
            onClick={() => navigate("/")}
            variant="navbar"
            size="icon"
            className="rounded-full"
            title="Jelajahi Vendor"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* Profile Button - For logged in vendors */}
          <Button
            onClick={() => navigate("/vendor/profile")}
            variant="navbar"
            size="icon"
            className="rounded-full"
            title="Profil Vendor"
          >
            <UserCircle2 className="h-5 w-5" />
          </Button>

          {/* Auth Buttons - Keep for future auth implementation */}
          <div className="hidden lg:flex items-center gap-2">
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
