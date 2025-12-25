import { useState, useRef, useEffect } from "react";
import { Camera, MapPin, Star, Globe, Phone, Mail, Clock, Edit, Eye, Share2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VendorSidebar from "@/components/VendorSidebar";
import UnderConstruction from "@/components/UnderConstruction";

const VendorProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const sections = ["profile", "dashboard", "portfolio", "reviews", "bookings", "messages", "pricing", "settings"];

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      const currentIndex = sections.indexOf(activeSection);

      if (diff > 0) {
        // Swipe left - go to next section
        if (currentIndex < sections.length - 1) {
          setActiveSection(sections[currentIndex + 1]);
        }
      } else {
        // Swipe right - go to previous section
        if (currentIndex > 0) {
          setActiveSection(sections[currentIndex - 1]);
        }
      }
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      handleSwipe();
    };

    content.addEventListener("touchstart", handleTouchStart);
    content.addEventListener("touchmove", handleTouchMove);
    content.addEventListener("touchend", handleTouchEnd);

    return () => {
      content.removeEventListener("touchstart", handleTouchStart);
      content.removeEventListener("touchmove", handleTouchMove);
      content.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection]);

  // Mock vendor data
  const vendorData = {
    name: "Pro Sound System",
    category: "Sound System",
    location: "Jakarta Selatan",
    rating: 4.9,
    reviewCount: 234,
    profileImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=60",
    phone: "+62 812-3456-7890",
    email: "info@prosoundsystem.com",
    website: "www.prosoundsystem.com",
    description: "Pro Sound System adalah penyedia layanan sound system profesional terpercaya di Jakarta Selatan. Dengan pengalaman lebih dari 10 tahun, kami telah melayani ratusan event dari berbagai skala. Tim teknisi profesional kami berkomitmen untuk memberikan kualitas audio terbaik dan membuat event Anda menjadi momen yang tak terlupakan.",
    businessHours: [
      { day: "Senin - Jumat", hours: "09:00 - 18:00" },
      { day: "Sabtu", hours: "10:00 - 16:00" },
      { day: "Minggu", hours: "Tutup" }
    ],
    services: [
      "Sound System Konser",
      "Wireless Microphone System",
      "Line Array Speaker",
      "Mixing Console",
      "Monitor Speaker",
      "Audio Technician"
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&auto=format&fit=crop&q=60"
    ],
    stats: {
      views: "12,345",
      favorites: "892",
      bookings: "234"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar */}
            <VendorSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />

            {/* Main Content */}
            <div ref={contentRef} className="flex-1 space-y-6 lg:touch-auto touch-pan-y">
              {/* Render different content based on active section */}
              {activeSection === "dashboard" && (
                <UnderConstruction
                  title="Dashboard Sedang Dikembangkan"
                  description="Fitur analitik dan statistik vendor akan segera hadir. Anda akan dapat melihat views, clicks, dan metrik penting lainnya."
                />
              )}

              {activeSection === "portfolio" && (
                <UnderConstruction
                  title="Portfolio Sedang Dikembangkan"
                  description="Halaman untuk mengelola galeri foto event Anda akan segera hadir."
                />
              )}

              {activeSection === "reviews" && (
                <UnderConstruction
                  title="Ulasan Sedang Dikembangkan"
                  description="Fitur untuk mengelola dan merespons ulasan pelanggan akan segera hadir."
                />
              )}

              {activeSection === "bookings" && (
                <UnderConstruction
                  title="Booking Sedang Dikembangkan"
                  description="Sistem manajemen jadwal dan pesanan akan segera hadir."
                />
              )}

              {activeSection === "messages" && (
                <UnderConstruction
                  title="Pesan Sedang Dikembangkan"
                  description="Inbox untuk mengelola pertanyaan dari calon klien akan segera hadir."
                />
              )}

              {activeSection === "pricing" && (
                <UnderConstruction
                  title="Harga & Paket Sedang Dikembangkan"
                  description="Fitur untuk mengatur paket layanan dan harga akan segera hadir."
                />
              )}

              {activeSection === "settings" && (
                <UnderConstruction
                  title="Pengaturan Sedang Dikembangkan"
                  description="Halaman pengaturan akun dan preferensi akan segera hadir."
                />
              )}

              {/* Profile Section - Only show when activeSection is "profile" */}
              {activeSection === "profile" && (
              <>
              {/* Quick Actions Header */}
              <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-lg font-bold text-foreground">Profil Vendor</h2>
                  <p className="text-sm text-muted-foreground">Ini adalah halaman yang dilihat pelanggan</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">Preview</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className="gap-2"
                    size="sm"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="hidden sm:inline">{isEditing ? "Simpan" : "Edit Profil"}</span>
                  </Button>
                </div>
              </div>

              {/* Cover Image */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={vendorData.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                  {isEditing && (
                    <button className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg hover:bg-background transition-colors">
                      <Camera className="h-5 w-5 text-foreground" />
                    </button>
                  )}
                </div>

                {/* Profile Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="relative -mt-20 sm:-mt-24">
                      <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-2xl border-4 border-background bg-card overflow-hidden">
                        <img
                          src={vendorData.profileImage}
                          alt={vendorData.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {isEditing && (
                        <button className="absolute bottom-2 right-2 bg-primary p-2 rounded-lg hover:bg-primary/90 transition-colors">
                          <Camera className="h-4 w-4 text-primary-foreground" />
                        </button>
                      )}
                    </div>

                    {/* Vendor Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                              {vendorData.name}
                            </h1>
                            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                              Verified
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                              {vendorData.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" />
                              {vendorData.location}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Rating & Stats */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-lg">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-bold text-foreground">{vendorData.rating}</span>
                            <span className="text-muted-foreground text-sm">({vendorData.reviewCount})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div>
                            <span className="font-bold text-foreground">{vendorData.stats.views}</span>
                            <span className="text-muted-foreground ml-1">Views</span>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">{vendorData.stats.favorites}</span>
                            <span className="text-muted-foreground ml-1">Favorit</span>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">{vendorData.stats.bookings}</span>
                            <span className="text-muted-foreground ml-1">Booking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-xl font-bold text-foreground">Tentang</h2>
                  {isEditing && (
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {vendorData.description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-xl font-bold text-foreground">Informasi Kontak</h2>
                  {isEditing && (
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Telepon</p>
                      <p className="font-medium text-foreground">{vendorData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground break-all">{vendorData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Website</p>
                      <p className="font-medium text-foreground break-all">{vendorData.website}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Jam Operasional</p>
                      <p className="font-medium text-foreground">Senin - Jumat: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-xl font-bold text-foreground">Layanan Kami</h2>
                  {isEditing && (
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {vendorData.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-secondary rounded-xl"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Gallery */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Portfolio</h2>
                    <p className="text-sm text-muted-foreground">Event yang pernah kami tangani</p>
                  </div>
                  {isEditing && (
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Camera className="h-4 w-4" />
                      Tambah Foto
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {vendorData.portfolioImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
              </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorProfile;
