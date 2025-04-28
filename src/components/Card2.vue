<template>
  <div class="wrapper">
    <div class="profile-card js-profile-card">
      <div class="profile-card__img">
        <img src="https://avatars.githubusercontent.com/u/10180684?v=4" alt="profile card">
      </div>

      <div class="profile-card__cnt js-profile-cnt">
        <div class="profile-card__name">Kutay Çelebi</div>
        <div class="profile-card__txt">Senior Software Developer</div>

        <div class="profile-card-loc">
          <MapPinIcon class="icon" />
          <span class="profile-card-loc__txt">
          Ankara, Turkey
          </span>
        </div>
        <div class="icons">
          <a v-for="link in info.links" :key="link.url" :href="link.url" style="margin-left: 1rem; margin-right: 1rem">
            <component :is="link.logo" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MapPinIcon from '@/assets/map-pin-line.svg'
import MailIcon from '@/assets/mail-line.svg'
import LinkedinIcon from '@/assets/linkedin-box-line.svg'
import GithubIcon from '@/assets/github-line.svg'

const info = {
  name: 'Kutay Çelebi',
  location: 'Ankara/Turkey',
  links: [
    {
      url: 'https://github.com/kutay-celebi',
      logo: GithubIcon,
    },
    {
      url: 'https://www.linkedin.com/in/celebikutay/',
      logo: LinkedinIcon,
    },
    {
      url: 'mailto:mail@kutaycelebi.com',
      logo: MailIcon,
    },
  ],
}
</script>

<style lang="scss" scoped>
.icon {
  fill: #324e63;
  width: 24px;
  height: 24px;
}

.profile-card-loc .icon {
  fill: #071017;
}
</style>
