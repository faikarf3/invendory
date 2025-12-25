import { LayoutDashboard, User, Camera, Star, Calendar, MessageSquare, DollarSign, Settings } from "lucide-react";

interface VendorSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const VendorSidebar = ({ activeSection, onSectionChange }: VendorSidebarProps) => {
  const navItems = [
    {
      id: "profile",
      icon: User,
      label: "Profil Saya",
      shortLabel: "Profil",
      description: "Halaman publik vendor"
    },
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      shortLabel: "Dashboard",
      description: "Analitik & statistik"
    },
    {
      id: "portfolio",
      icon: Camera,
      label: "Portfolio",
      shortLabel: "Portfolio",
      description: "Galeri foto event"
    },
    {
      id: "reviews",
      icon: Star,
      label: "Ulasan",
      shortLabel: "Ulasan",
      description: "Kelola ulasan pelanggan"
    },
    {
      id: "bookings",
      icon: Calendar,
      label: "Booking",
      shortLabel: "Booking",
      description: "Jadwal & pesanan"
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "Pesan",
      shortLabel: "Pesan",
      description: "Inbox & pertanyaan"
    },
    {
      id: "pricing",
      icon: DollarSign,
      label: "Harga & Paket",
      shortLabel: "Harga",
      description: "Atur layanan"
    },
    {
      id: "settings",
      icon: Settings,
      label: "Pengaturan",
      shortLabel: "Setting",
      description: "Preferensi akun"
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-card border border-border rounded-2xl p-4 h-fit sticky top-24">
        {/* Vendor Info Header */}
        <div className="pb-4 mb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">Vendor Panel</h3>
              <p className="text-xs text-muted-foreground">Kelola akun Anda</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary text-foreground/80 hover:text-foreground"
                }`}
              >
                <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                  isActive ? "text-primary-foreground" : "text-primary group-hover:text-primary"
                }`} />
                <div className="flex-1 min-w-0 text-left">
                  <p className={`text-sm font-semibold ${
                    isActive ? "text-primary-foreground" : ""
                  }`}>
                    {item.label}
                  </p>
                  <p className={`text-xs ${
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden w-full bg-card border-b border-border sticky top-16 z-40 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex items-center gap-1 px-2 py-2 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[70px] ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${
                  isActive ? "text-primary-foreground" : "text-primary"
                }`} />
                <span className={`text-xs font-medium whitespace-nowrap ${
                  isActive ? "text-primary-foreground" : ""
                }`}>
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default VendorSidebar;
