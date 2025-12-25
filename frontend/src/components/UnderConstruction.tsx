import { Construction } from "lucide-react";

interface UnderConstructionProps {
  title: string;
  description: string;
}

const UnderConstruction = ({ title, description }: UnderConstructionProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
      <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Construction className="h-12 w-12 text-primary" />
      </div>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-md">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
};

export default UnderConstruction;
