import { NewspaperIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  projectHref: string;
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  projectHref,
}: ProjectCardProps) {
  // TODO: Enable when project page is live
  // const projectName = title.toLowerCase().replace(/\s+/, "-");
  const detailHref = "/coming-soon"; // `/projects/${projectName}`;

  return (
    <Card className="pt-0 overflow-clip">
      <CardHeader className="p-0">
        <Image
          src={imageSrc}
          width={1280}
          height={720}
          alt={`An image showcasing the project ${title}`}
          className="aspect-video"
        />

        <div className="px-6 pt-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex-col lg:flex-row gap-2">
        <Button asChild className="w-full lg:flex-1">
          <Link href={detailHref} className="no-underline">
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
