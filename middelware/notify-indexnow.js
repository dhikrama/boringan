export default defineNuxtRouteMiddleware(async (to) => {
    if (to.query.update) {
        const runtimeConfig = useRuntimeConfig();
        const url = `${runtimeConfig.public.siteUrl}${to.fullPath}`;
        const apiKey = runtimeConfig.public.indexnowApiKey;

        try {
            const indexNowUrl = `https://www.bing.com/indexnow?url=${encodeURIComponent(url)}&key=${apiKey}`;
            const response = await $fetch(indexNowUrl);
            console.log(`IndexNow notification sent for: ${url}`, response);
        } catch (error) {
            console.error('Failed to notify IndexNow:', error);
        }
    }
});
