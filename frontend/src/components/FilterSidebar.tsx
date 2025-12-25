import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-filter-border pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-left font-medium text-foreground hover:text-primary transition-colors"
      >
        <span className="font-heading text-sm">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      {isOpen && <div className="mt-3 space-y-3 animate-fade-in">{children}</div>}
    </div>
  );
};

const categories = [
  { id: "sound", label: "Sound System", count: 89 },
  { id: "lighting", label: "Lighting", count: 156 },
  { id: "rigging", label: "Rigging", count: 67 },
  { id: "catering", label: "Catering", count: 234 },
  { id: "security", label: "Security", count: 98 },
  { id: "decoration", label: "Dekorasi", count: 145 },
  { id: "multimedia", label: "Multimedia", count: 78 },
  { id: "stage", label: "Stage & Panggung", count: 112 },
];

const locations = [
  { id: "jakarta", label: "Jakarta", count: 312 },
  { id: "bandung", label: "Bandung", count: 156 },
  { id: "surabaya", label: "Surabaya", count: 98 },
  { id: "bali", label: "Bali", count: 245 },
  { id: "yogyakarta", label: "Yogyakarta", count: 87 },
];

const ratings = [
  { id: "5", label: "5 Bintang", stars: 5 },
  { id: "4", label: "4 Bintang & lebih", stars: 4 },
  { id: "3", label: "3 Bintang & lebih", stars: 3 },
];

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <aside className="w-full lg:w-72">
      {/* Mobile: Collapsible Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="lg:hidden w-full flex items-center justify-between bg-filter rounded-xl p-4 border border-filter-border mb-4 hover:border-primary transition-colors"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-base font-bold text-foreground">Filter</h2>
        </div>
        {isFilterOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {/* Filter Content */}
      <div className={`bg-filter rounded-2xl border border-filter-border lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto ${
        isFilterOpen ? 'block' : 'hidden lg:block'
      }`}>
        {/* Desktop Header - Sticky */}
        <div className="hidden lg:flex items-center gap-2 pb-4 border-b border-filter-border mb-4 sticky top-0 bg-filter z-10 p-5">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-lg font-bold text-foreground">Filter</h2>
        </div>

      <div className="space-y-4 p-5 lg:pt-0">
        {/* Categories */}
        <FilterSection title="Kategori">
          <div className="space-y-2.5">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Checkbox id={category.id} className="border-muted-foreground/40" />
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    {category.label}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Location */}
        <FilterSection title="Lokasi">
          <div className="space-y-2.5">
            {locations.map((location) => (
              <label
                key={location.id}
                className="flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Checkbox id={location.id} className="border-muted-foreground/40" />
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    {location.label}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                  {location.count}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Rentang Harga">
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100000000}
              step={1000000}
              className="w-full"
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Rating">
          <div className="space-y-2.5">
            {ratings.map((rating) => (
              <label
                key={rating.id}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <Checkbox id={`rating-${rating.id}`} className="border-muted-foreground/40" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-primary text-primary"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors ml-1">
                    {rating.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
