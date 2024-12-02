<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MauNguli",
        "url": "https://www.boringan.com",
        "logo": "https://www.boringan.com/logo.png"
      })
    }
  ]
});
</script>
