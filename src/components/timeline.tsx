import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

export type TimelineItemProps = {
  title?: string;
  subtitle?: string;
  position?: "first" | "last";
  children: React.ReactNode;
};

export function TimelineItem({
  title,
  subtitle,
  position,
  children,
}: TimelineItemProps) {
  return (
    <div className="flex flex-row">
      <div className="flex-none flex flex-col justify-center relative items-center mx-8">
        <div
          className={cn(
            "w-1.5 bg-secondary-foreground absolute h-full z-0",
            position && "h-[50%]",
            position === "first" && "bottom-0",
            position === "last" && "top-0",
          )}
        ></div>
        <div className="bg-accent-foreground w-4 h-4 rounded-full z-1" />
      </div>

      <Card className="flex-1 my-6">
        {(title || subtitle) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
