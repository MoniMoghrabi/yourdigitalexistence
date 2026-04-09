import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GiscusComments from "@/components/GiscusComments";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return { title: `${data.title} — Your Digital Existence`, description: data.description };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { data: fm, content } = matter(raw);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/blog"
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 inline-block"
      >
        ← All articles
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
          <time>{new Date(fm.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</time>
          <span>·</span>
          <span>{fm.readingTime} read</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{fm.title}</h1>
        <p className="text-slate-500">{fm.description}</p>
      </header>

      {/* MDX content */}
      <article className="prose prose-slate prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-hr:border-slate-100 max-w-none">
        <MDXRemote source={content} />
      </article>

      <GiscusComments />
    </div>
  );
}
