import { notFound } from "next/navigation";

// Catch-all for unknown project slugs
export default function ProjectPage() {
  notFound();
}
