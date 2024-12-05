import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  try {
    const BLOGGER_API_URL = 'https://www.googleapis.com/blogger/v3/blogs/3462907902652169422/posts';
    const API_KEY = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg';

    // Fetch data dari Blogger API
    const response = await fetch(`${BLOGGER_API_URL}?key=${API_KEY}`);
    const data = await response.json();

    if (!data || !data.items) {
      throw new Error('Failed to fetch blog data or no items available.');
    }

    // Format ulang data jika diperlukan
    const formattedData = data.items.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-'),
      published: item.published,
      content: item.content,
      url: item.url,
    }));

    // Kembalikan data
    return {
      success: true,
      posts: formattedData,
    };
  } catch (error) {
    console.error(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
});
