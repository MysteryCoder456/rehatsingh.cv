import { LinkIcon, NewspaperIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export type ProjectCardProps = {
  title: string;
  slug?: string;
  description: string;
  imageSrc?: string;
  projectHref: string;
};

export function ProjectCard({
  title,
  slug,
  description,
  imageSrc,
  projectHref,
}: ProjectCardProps) {
  const projectId = slug ? slug : title.toLowerCase().replace(/\s+/, "-");
  const detailsHref = `/projects/${projectId}`;

  return (
    <Card className="pt-0 overflow-clip">
      <CardHeader className="p-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            width={1280}
            height={720}
            alt={`An image showcasing the project ${title}`}
            className="aspect-video"
          />
        ) : (
          <Skeleton className="w-full aspect-video rounded-none" />
        )}

        <div className="px-6 pt-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex-col lg:flex-row gap-2">
        <Button asChild className="w-full lg:flex-1">
          <Link href={detailsHref} className="no-underline">
            <span className="inline-flex gap-2 items-center">
              <NewspaperIcon />
              Read More
            </span>
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full lg:flex-1">
          <a href={projectHref} target="_blank" className="no-underline">
            <span className="inline-flex gap-2 items-center">
              <LinkIcon />
              Check Out
            </span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
