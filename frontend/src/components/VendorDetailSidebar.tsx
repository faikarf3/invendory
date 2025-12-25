import { X, MapPin, Star, Phone, Mail, Globe, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VendorDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  vendor: {
    id: string;
    name: string;
    category: string;
    location: string;
    rating: number;
    reviewCount: number;
    priceStart: number;
    image: string;
  } | null;
}

const VendorDetailSidebar = ({ isOpen, onClose, vendor }: VendorDetailSidebarProps) => {
  if (!vendor) return null;

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-[500px] navbar-gradient z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[hsl(24,100%,56%)] p-4 flex items-center justify-between border-b border-white/20">
          <h2 className="font-heading text-xl font-bold text-white">Detail Vendor</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content - Scrollable */}
        <div className="h-[calc(100%-4rem)] overflow-y-auto p-6 space-y-6">
          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="bg-white text-[hsl(24,100%,56%)] text-sm font-bold px-4 py-2 rounded-full">
                {vendor.category}
              </span>
            </div>
          </div>

          {/* Vendor Name & Rating */}
          <div className="space-y-3">
            <h1 className="font-heading text-3xl font-bold text-white">
              {vendor.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full">
                <Star className="h-5 w-5 fill-white text-white" />
                <span className="font-bold text-white">{vendor.rating.toFixed(1)}</span>
                <span className="text-white/80 text-sm">({vendor.reviewCount} ulasan)</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm font-medium">Lokasi</p>
              <p className="text-white font-semibold">{vendor.location}</p>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <DollarSign className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm font-medium">Harga Mulai Dari</p>
              <p className="text-white font-bold text-xl">{formatPrice(vendor.priceStart)}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-white">Informasi Kontak</h3>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <Phone className="h-5 w-5 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-sm">Telepon</p>
                <p className="text-white font-medium">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <Mail className="h-5 w-5 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-sm">Email</p>
                <p className="text-white font-medium">info@{vendor.name.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <Globe className="h-5 w-5 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-sm">Website</p>
                <p className="text-white font-medium">www.{vendor.name.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-white">Jam Operasional</h3>
            <div className="bg-white/10 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">Senin - Jumat: 09:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-3 pl-8">
                <span className="text-white/80">Sabtu: 10:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-3 pl-8">
                <span className="text-white/80">Minggu: Tutup</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-white">Tentang</h3>
            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-white/90 leading-relaxed">
                {vendor.name} adalah penyedia layanan {vendor.category.toLowerCase()} terpercaya di {vendor.location}.
                Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan pelayanan terbaik dan
                membuat acara Anda menjadi momen yang tak terlupakan.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button className="w-full bg-white text-[hsl(24,100%,56%)] hover:bg-white/90 font-bold text-lg h-12">
              Hubungi Vendor
            </Button>
            <Button
              variant="outline"
              className="w-full border-2 border-white text-white hover:bg-white/10 font-semibold h-12"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDetailSidebar;
