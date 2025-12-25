import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-primary">Invendory</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Platform vendor-discovery terbaik untuk penyelenggara event di Indonesia.
              Temukan vendor impian Anda dengan mudah.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">Menu</h4>
            <ul className="space-y-2.5">
              {["Tentang Kami", "Cara Kerja", "Kategori", "Blog", "Karir"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Vendors */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">Untuk Vendor</h4>
            <ul className="space-y-2.5">
              {[
                "Daftar Jadi Vendor",
                "Panduan Vendor",
                "Paket Premium",
                "Dashboard Vendor",
                "Success Stories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@invendory.id</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 21 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Invendory. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
