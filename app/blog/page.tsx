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
    <>
      {/* Page header */}
      <section className="bg-[#00353A] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-label text-[#FBBC00] text-xs uppercase tracking-[0.3em] mb-4">
            Archive
          </p>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
            Blog
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl leading-relaxed">
            Plain-language articles about digital privacy — no jargon, no fearmongering.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="border border-[#E3E3DE] p-16 text-center">
              <span className="material-symbols-outlined text-[#BFC8C9] text-5xl mb-4 block">edit_note</span>
              <p className="font-headline font-bold text-[#70797A] uppercase tracking-tight">No posts yet</p>
              <p className="font-body text-sm text-[#BFC8C9] mt-2">Articles coming soon.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E3E3DE] border border-[#E3E3DE]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <time className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A]">
                        {new Date(post.date).toLocaleDateString("en-AU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#BFC8C9]">
                        // {post.readingTime} read
                      </span>
                    </div>
                    <h2 className="font-headline font-bold text-2xl text-[#1A1C19] mb-3 group-hover:text-[#00353A] transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-body text-sm text-[#70797A] leading-relaxed max-w-2xl">{post.description}</p>
                    <div className="mt-6 font-label text-[10px] uppercase tracking-widest text-[#00353A] group-hover:text-[#FBBC00] transition-colors">
                      Read Article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
