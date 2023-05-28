// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/css/preflight.css"],
    modules: [
        // Simple usage
        'nuxt-purgecss',
        // With options
    ],
    purgecss: {
        enabled: true, // Always enable purgecss
        safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
    },
    experimental: {
        inlineSSRStyles: false
    }
})
