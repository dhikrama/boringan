export interface BlogPost {
    id: string;
    title: string;
    content: string;
    url: string;
    slug: string;
    published:string;
  }
  
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
  
  export async function fetchPostBySlug(apiKey: string, blogId: string, slug: string): Promise<BlogPost | undefined> {
    const posts = await fetchBloggerPosts(apiKey, blogId);
    return posts.find((post) => post.slug === slug);
  }
  

 export  function getFirstImage(html: string): string | undefined {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : undefined; // Mengembalikan undefined jika tidak ada gambar
  }
  