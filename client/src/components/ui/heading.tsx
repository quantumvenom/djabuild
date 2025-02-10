import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function Heading({
  title,
  description,
  className,
  centered = false,
}: HeadingProps) {
  return (
    <div className={cn(
      "space-y-2",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
