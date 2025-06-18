import { JSDOM } from "jsdom";

export function normalizeURL(url: string) {
  const urlObj = new URL(url);
  let fullPath = `${urlObj.host}${urlObj.pathname}`;
  if (fullPath.slice(-1) === "/") {
    fullPath = fullPath.slice(0, -1);
  }
  return fullPath;
}

export function getURLsFromHTML(html: string, baseURL: string) {
  const urls = [];
  const dom = new JSDOM(html);
  const anchors = dom.window.document.querySelectorAll("a");

  for (const anchor of anchors) {
    let href = anchor.getAttribute("href");
    if (href) {
      try {
        // convert any relative URLs to absolute URLs
        href = new URL(href, baseURL).href;
        urls.push(href);
      } catch (err) {
        console.log(`${(err as Error).message}: ${href}`);
      }
    }
  }

  return urls;
}

export async function getHTML(url: string) {
  console.log(`crawling ${url}`);

  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    throw new Error(`Got Network error: ${(err as Error).message}`);
  }

  if (res.status > 399) {
    console.log(`Got HTTP error: ${res.status} ${res.statusText}`);
    return;
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("text/html")) {
    console.log(`Got non-HTML response: ${contentType}`);
    return;
  }

  console.log(await res.text());
}
