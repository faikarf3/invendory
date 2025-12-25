import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import VendorCard from "@/components/VendorCard";
import Footer from "@/components/Footer";
import VendorDetailSidebar from "@/components/VendorDetailSidebar";

const vendors = [
  {
    id: "1",
    name: "Pro Sound System",
    category: "Sound System",
    location: "Jakarta Selatan",
    rating: 4.9,
    reviewCount: 234,
    priceStart: 15000000,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Lumina Lighting Solutions",
    category: "Lighting",
    location: "Bandung",
    rating: 4.8,
    reviewCount: 156,
    priceStart: 12000000,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "Gourmet Catering Co",
    category: "Catering",
    location: "Jakarta Pusat",
    rating: 4.7,
    reviewCount: 312,
    priceStart: 8000000,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    name: "Stage Masters Rigging",
    category: "Rigging",
    location: "Bali",
    rating: 5.0,
    reviewCount: 89,
    priceStart: 25000000,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "5",
    name: "Elite Security Services",
    category: "Security",
    location: "Surabaya",
    rating: 4.6,
    reviewCount: 198,
    priceStart: 5000000,
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "6",
    name: "Event Decor Studio",
    category: "Dekorasi",
    location: "Yogyakarta",
    rating: 4.8,
    reviewCount: 76,
    priceStart: 10000000,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "7",
    name: "Digital Media Production",
    category: "Multimedia",
    location: "Jakarta Selatan",
    rating: 4.9,
    reviewCount: 267,
    priceStart: 18000000,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "8",
    name: "Premium Stage Rental",
    category: "Stage & Panggung",
    location: "Bali",
    rating: 4.7,
    reviewCount: 143,
    priceStart: 20000000,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },
];

const Index = () => {
  const [selectedVendor, setSelectedVendor] = useState<typeof vendors[0] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleVendorClick = (vendor: typeof vendors[0]) => {
    setSelectedVendor(vendor);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-6 animate-fade-in">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Jelajahi Vendor
            </h1>
            <p className="text-muted-foreground mt-2">
              Temukan vendor terbaik untuk event impian Anda
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar />

            {/* Vendor Grid */}
            <section className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Menampilkan <span className="font-semibold text-foreground">{vendors.length}</span> vendor
                </p>
                <select className="text-sm bg-secondary border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Terpopuler</option>
                  <option>Rating Tertinggi</option>
                  <option>Harga Terendah</option>
                  <option>Harga Tertinggi</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {vendors.map((vendor, index) => (
                  <div
                    key={vendor.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <VendorCard {...vendor} onClick={() => handleVendorClick(vendor)} />
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="bg-primary text-primary-foreground font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg">
                  Muat Lebih Banyak
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Vendor Detail Sidebar */}
      <VendorDetailSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        vendor={selectedVendor}
      />
    </div>
  );
};

export default Index;
