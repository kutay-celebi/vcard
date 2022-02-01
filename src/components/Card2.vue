<template>
  <div class="wrapper">
    <div class="profile-card js-profile-card">
      <div class="profile-card__img">
        <img src="https://avatars.githubusercontent.com/u/10180684?v=4" alt="profile card">
      </div>

      <div class="profile-card__cnt js-profile-cnt">
        <div class="profile-card__name">Kutay Çelebi</div>
        <div class="profile-card__txt">Software Developer</div>

        <div class="profile-card-loc">
          <MapPinIcon style="fill:#071017;"/>
          <span class="profile-card-loc__txt">
          Ankara, Turkey
          </span>
        </div>
        <div class="icons">
          <a v-for="link in info.links" :key="link.url" :href="link.url" style="margin-left: 1rem; margin-right: 1rem">
            <component :is="link.logo" style="fill:#324e63;"/>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import MapPinIcon from '@/assets/map-pin-line.svg';
import MailIcon from '@/assets/mail-line.svg';
import LinkedinIcon from '@/assets/linkedin-box-line.svg';
import GithubIcon from '@/assets/github-line.svg';

export default {
  name: 'Card2',
  components: {
    MapPinIcon,
  },
  // Data
  data() {
    return {
      info: {
        name: 'Kutay Çelebi',
        location: 'Ankara/Turkey',
        links: [
          {
            url: 'https://github.com/kutay-celebi',
            logo: GithubIcon,
          },
          {
            url: 'mailto:mail@kutaycelebi.com',
            logo: MailIcon,
          },
          {
            url: 'https://www.linkedin.com/in/celebikutay/',
            logo: LinkedinIcon,
          },
        ],
      },
    };
  },
  // Filters
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped></style>
