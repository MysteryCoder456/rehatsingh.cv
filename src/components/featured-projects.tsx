import type { SanityDocument } from "next-sanity";
import { ProjectCard } from "@/components/projects";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/utils";

const PROJECTS_QUERY =
  "*[_type == 'project' && defined(slug.current) && isFeatured]|order(completedOn desc, startedOn){_id, title, slug, description, image, projectUrl }";

export default async function FeaturedProjects() {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );

  return (
    <>
      {projects.map((project) => {
        const imageSrc = urlFor(project.image)?.width(1280).height(720).url();
        return (
          <ProjectCard
            key={project._id}
            title={project.title}
            slug={project.slug.current}
            description={project.description}
            imageSrc={imageSrc}
            projectHref={project.projectUrl}
          />
        );
      })}
    </>
  );
}
