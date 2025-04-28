<template>
  <div class="card">

    <div class="front-face">
      <div
          class="pv-top-card--photo text-align-left
          pv-top-card--photo-resize">
        <div class="pv-top-card__photo-wrapper ml0">
          <div class="profile-photo-edit pv-top-card__edit-photo">
            <button class="profile-photo-edit__edit-btn" type="button">
              <img
                  width="200"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQESnalTmC_EWw/profile-displayphoto-shrink_200_200/0/1602248178097?e=1649289600&amp;v=beta&amp;t=ewqdWsqR1Dm2sYbf-i1ObgAcWXpoqfrj0JBsTnUoANM"
                  height="200"
                  alt="Kutay Çelebi"
                  class="ember-view profile-photo-edit__preview">
            </button>
          </div>
        </div>
      </div>
      <div class="contents front">
        <p>{{ uppercase(frontName) }}</p>
        <p class="bottom-bar">{{ uppercase(frontSurname) }}</p>
        <span>Software Developer</span>
      </div>
    </div>

    <div class="back-face">
      <div class="contents back">
        <div style="fill: white">
        </div>
        <h2>{{ uppercase(backTitle) }}</h2>
        <span>Follow Me</span>
        <div class="icons">
          <a v-for="link in links" :key="link.url" :href="link.url" style="margin-left: 1rem; margin-right: 1rem">
            <component :is="link.logo" class="icon" />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import GithubIcon from '@/assets/github-line.svg'
import MailIcon from '@/assets/mail-line.svg'
import LinkedinIcon from '@/assets/linkedin-box-line.svg'

const links = [
  {
    url: 'https://github.com/kutay-celebi',
    logo: GithubIcon,
  },
  {
    url: 'mailto:kutay.celebi@gmail.com',
    logo: MailIcon,
  },
  {
    url: 'https://www.linkedin.com/in/kutay-celebi/',
    logo: LinkedinIcon,
  },
]

const frontName = ref('Kutay')
const frontSurname = ref('Çelebi')
const backTitle = ref('Contact Me')

const uppercase = (text) => text.toUpperCase()
</script>

<style lang="scss" scoped>
/****************************************************
* Card Settings
****************************************************/
.card, .front-face,
.back-face, .contents {
  position: absolute;
}

.card {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 290px;
  transform-style: preserve-3d;
  perspective: 1000px;
  // Card Hover
  &:hover > .front-face {
    transform: rotateY(-180deg);
  }

  &:hover > .back-face {
    transform: rotateY(0deg);
  }

  // Card Icons
  .icons {
    margin: 10px 0;

    .icon {
      fill: white;
      width: 24px;
      height: 24px;
    }
  }

  // Card Faces Rules
  .front-face,
  .back-face {
    height: 100%;
    width: 100%;
    text-align: center;
    background-size: cover;
    background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('../assets/bg.jpg') center;
    border-radius: 10px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: transform .7s cubic-bezier(.4, .2, .2, 1);
    -webkit-box-shadow: 7px 7px 23px 0px #000000;
    box-shadow: 7px 7px 23px 0px #000000;
  }

  .back-face {
    transform: rotateY(180deg);
    background: linear-gradient(45deg, #0e0e0e 0%, #5a5959 100%);
  }

  //Card Contents
  .contents {
    left: 0;
    top: 50%;
    width: 100%;
    perspective: 100px;
    transform: translateY(-50%) translateZ(60px) scale(.94);
    //FrontCard
    &.front {
      p {
        color: white;
        font-size: 28px;
        margin-bottom: 5px;

        &.bottom-bar::after {
          content: '';
          display: block;
          left: 0;
          right: 0;
          height: 2px;
          width: 150px;
          background: white;
          margin: 0 auto;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }

      span {
        color: white;
        font-size: 12px;
        font-weight: 300;
      }
    }

    //BackCard
    &.back {
      color: white;

      h2 {
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 300;
      }

      span {
        font-weight: 300;
        font-size: 12px;
      }
    }
  }
}
</style>
