import ComingSoon from "@/coming-soon/page";

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return <ComingSoon />;
}
