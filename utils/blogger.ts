export interface BlogPost {
  id: string;
  title: string;
  content: string;
  url: string;
  slug: string;
  published: string;
}

/**
 * Fungsi untuk mengambil semua postingan dari Blogger API.
 * @param {string} apiKey - API key untuk autentikasi.
 * @param {string} blogId - ID blog dari Blogger.
 * @returns {Promise<BlogPost[]>} - Daftar postingan yang sudah diformat.
 */
export async function fetchBloggerPosts(apiKey: string, blogId: string): Promise<BlogPost[]> {
  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data = await response.json();
  return data.items.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    url: post.url,
    published: post.published,
    slug: post.url.split('/').pop(),
  }));
}

/**
 * Fungsi untuk mengambil postingan spesifik berdasarkan slug.
 * @param {string} apiKey - API key untuk autentikasi.
 * @param {string} blogId - ID blog dari Blogger.
 * @param {string} slug - Slug unik dari postingan.
 * @returns {Promise<BlogPost | undefined>} - Postingan yang ditemukan, atau undefined jika tidak ditemukan.
 */
export async function fetchPostBySlug(apiKey: string, blogId: string, slug: string): Promise<BlogPost | undefined> {
  const posts = await fetchBloggerPosts(apiKey, blogId);
  return posts.find((post) => post.slug === slug);
}

/**
 * Fungsi untuk mengambil URL gambar pertama dari konten HTML.
 * @param {string} html - Konten HTML.
 * @returns {string | undefined} - URL gambar pertama, atau undefined jika tidak ada gambar.
 */
export function getFirstImage(html: string): string | undefined {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const imgElement = doc.querySelector('img');
  return imgElement ? imgElement.src : undefined;
}

/**
 * Fungsi untuk membungkus tag <img> dalam konten HTML dengan NuxtImg.
 * @param {string} html - Konten HTML.
 * @returns {string} - Konten HTML yang sudah dimodifikasi.
 */
export function wrapImagesWithNuxtImg(html: string): string {
  return html.replace(/<img([^>]+)>/g, (match, p1) => {
    return `<NuxtImg ${p1} class="w-full h-auto object-cover" />`;
  });
}
