import { notFound } from "next/navigation";
import { getProjectBySlug, projectDetailsList } from "@/data/projectDetails";
import ClientProjectPage from "./ClientProjectPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for static site generation (SSG) in production
export async function generateStaticParams() {
  return projectDetailsList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ClientProjectPage project={project} />;
}
