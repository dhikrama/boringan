export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = query.url; // URL halaman yang diubah
    const apiKey = process.env.KEY_INDEX_NOW; // Ambil dari environment variable

    if (!url) {
        throw createError({ statusCode: 400, message: "URL is required" });
    }

    const indexNowUrl = `https://www.bing.com/indexnow?url=${encodeURIComponent(url)}&key=${apiKey}`;
    const response = await fetch(indexNowUrl);

    return {
        status: response.status,
        message: "IndexNow notification sent",
    };
});
