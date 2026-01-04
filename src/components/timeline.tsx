import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

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

      <Card className="flex-1 my-6 min-w-0">
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

export function TimelineActivityList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible className="pt-4">
      <AccordionItem value="activities">
        <AccordionTrigger>Show more</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row gap-4 pb-4 overflow-x-auto">
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export type TimelineActivityProps = { title: string; description?: string };

export function TimelineActivity({
  title,
  description,
}: TimelineActivityProps) {
  return (
    <div className="text-sm">
      {/* TODO: These will be images/illustrations of my project/experience */}
      <Skeleton className="w-64 h-36" />

      <div className="mt-2">
        <span>{title}</span>
        {description && (
          <>
            <br />
            <span className="text-muted-foreground">{description}</span>
          </>
        )}
      </div>
    </div>
  );
}
