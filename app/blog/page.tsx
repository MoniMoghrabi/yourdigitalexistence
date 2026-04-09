import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = {
  title: "Blog — Your Digital Existence",
  description: "Articles about digital footprints, online privacy, and taking back control of your data.",
};

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        readingTime: data.readingTime as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Blog</h1>
      <p className="text-slate-500 mb-12">
        Plain-language articles about digital privacy — no jargon, no fearmongering.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
              <time>{new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>·</span>
              <span>{post.readingTime} read</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-slate-500">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
