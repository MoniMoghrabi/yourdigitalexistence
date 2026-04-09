"use client";

import { useEffect, useRef } from "react";

// Configure these with your own Giscus settings from https://giscus.app
// You'll need: a public GitHub repo with Discussions enabled + Giscus app installed.
const GISCUS_REPO = "your-github-username/yourdigitalexistence"; // e.g. "jsmith/yourdigitalexistence"
const GISCUS_REPO_ID = ""; // Paste repo ID from giscus.app
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = ""; // Paste category ID from giscus.app

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    if (!GISCUS_REPO_ID || !GISCUS_CATEGORY_ID) return; // skip until configured

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;
    ref.current.appendChild(script);
  }, []);

  if (!GISCUS_REPO_ID || !GISCUS_CATEGORY_ID) {
    return null; // hidden until Giscus is configured
  }

  return <div ref={ref} className="mt-12 pt-8 border-t border-slate-100" />;
}
