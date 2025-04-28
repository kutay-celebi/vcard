<template>
  <card2 />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Card2 from '@/components/Card2.vue'

useHead({
  title: 'Kutay Çelebi | Senior Software Developer',
  meta: [
    // Primary Meta Tags
    {
      name: 'description',
      content: 'Kutay Çelebi - Senior Software Developer. 7+ years of experience, Vue.js and Java expert. Specialist in microservice architecture, cloud technologies, and full-stack development. Software engineer based in Ankara, Turkey.'
    },
    {
      name: 'author',
      content: 'Kutay Çelebi'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-image-preview:large'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5'
    },
    
    // Open Graph / Facebook
    {
      property: 'og:type',
      content: 'profile'
    },
    {
      property: 'og:title',
      content: 'Kutay Çelebi | Senior Software Developer'
    },
    {
      property: 'og:description',
      content: 'Kutay Çelebi - Senior Software Developer. 7+ years of experience, Vue.js and Java expert. Specialist in microservice architecture, cloud technologies, and full-stack development.'
    },
    {
      property: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/10180684?v=4'
    },
    {
      property: 'og:image:alt',
      content: 'Kutay Çelebi - Professional Photo'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'og:site_name',
      content: 'Kutay Çelebi - Personal Portfolio'
    },
    
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Kutay Çelebi | Senior Software Developer'
    },
    {
      name: 'twitter:description',
      content: 'Kutay Çelebi - Senior Software Developer. 7+ years of experience, Vue.js and Java expert. Specialist in microservice architecture, cloud technologies, and full-stack development.'
    },
    {
      name: 'twitter:image',
      content: 'https://avatars.githubusercontent.com/u/10180684?v=4'
    },
    {
      name: 'twitter:image:alt',
      content: 'Kutay Çelebi - Professional Photo'
    },
    
    // Additional Meta Tags for 2025 SEO
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    {
      name: 'theme-color',
      content: '#324e63'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kutaycelebi.github.io/'
    },
    {
      rel: 'alternate',
      hreflang: 'tr',
      href: 'https://kutaycelebi.github.io/'
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://kutaycelebi.github.io/en'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kutay Çelebi',
        jobTitle: 'Senior Software Developer',
        image: 'https://avatars.githubusercontent.com/u/10180684?v=4',
        url: 'https://kutaycelebi.github.io',
        sameAs: [
          'https://github.com/kutay-celebi',
          'https://www.linkedin.com/in/kutay-celebi/'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Software Development Company'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ankara',
          addressCountry: 'TR'
        },
        knowsAbout: [
          'Vue.js',
          'React',
          'Node.js',
          'Web Development',
          'Cloud Architecture',
          'Software Engineering'
        ],
        description: 'Senior Software Developer with 7+ years of experience. Expert in Vue.js, Java, and microservice architecture.',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Hacettepe University'
        },
        award: [
          'Senior Software Developer',
          'Full Stack Developer'
        ]
      })
    }
  ]
})
</script>

<style lang="scss">
</style>
