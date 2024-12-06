export interface BlogPost {
    id: string;
    title: string;
    content: string;
    url: string;
    slug: string;
    published: string;
    
  }
  
  export async function fetchWordPressPosts(site: string): Promise<BlogPost[]> {
    const url = `https://public-api.wordpress.com/wp/v2/sites/${site}/posts?per_page=5&orderby=date&order=desc`;  // URL untuk mengambil postingan terbaru dari blog WordPress
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      content: post.content.rendered,
      url: post.link,
      published: post.date,
      slug: post.slug,
    }));
  }

  
  export async function fetchPostBySlug(site: string, slug: string): Promise<BlogPost | undefined> {
    const posts = await fetchWordPressPosts(site);
    return posts.find((post) => post.slug === slug);
  }
  
  export function getFirstImage(html: string): string | undefined {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : undefined; // Mengembalikan undefined jika tidak ada gambar
  }
  

  export function wrapImagesWithNuxtImg(html: string): string {
    return html.replace(/<img([^>]+)>/g, (match, p1) => {
      return `<NuxtImg ${p1} class="w-full h-auto object-cover" />`;
    });
  }
  