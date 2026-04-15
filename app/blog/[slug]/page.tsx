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
    <>
      {/* Article header */}
      <section className="bg-[#00353A] px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#FAFAF5]/60 hover:text-[#FBBC00] transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            All Articles
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#FBBC00]">
              {new Date(fm.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest text-[#FAFAF5]/40">
              // {fm.readingTime} read
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter mb-4">
            {fm.title}
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl">{fm.description}</p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-slate prose-headings:font-headline prose-headings:text-[#00353A] prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[#00353A] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1C19] max-w-none font-body text-[#40484A]">
            <MDXRemote source={content} />
          </article>

          <GiscusComments />
        </div>
      </section>
    </>
  );
}
