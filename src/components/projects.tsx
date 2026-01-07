import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  href,
}: ProjectCardProps) {
  return (
    <div>
      <a href={href} target="_blank" className="no-underline">
        <Image
          src={imageSrc}
          width={1280}
          height={720}
          alt={`An image showcasing the project ${title}`}
          className="rounded-xl aspect-video"
        />
      </a>

      <div className="mt-2">
        <span className="font-semibold text-xl">{title}</span>
        <br />
        <span className="text-muted-foreground text-lg">{description}</span>
      </div>
    </div>
  );
}
