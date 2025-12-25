import { MapPin, Star, Heart } from "lucide-react";
import { useState } from "react";

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceStart: number;
  image: string;
  onClick?: () => void;
}

const VendorCard = ({
  name,
  category,
  location,
  rating,
  reviewCount,
  priceStart,
  image,
  onClick,
}: VendorCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <article onClick={onClick} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card card-hover cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 h-9 w-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-background hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-primary text-primary" : "text-foreground/60"
            }`}
          />
        </button>
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title & Location */}
        <div>
          <h3 className="font-heading font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold text-sm text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Mulai dari</p>
            <p className="font-heading font-bold text-primary">{formatPrice(priceStart)}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VendorCard;
