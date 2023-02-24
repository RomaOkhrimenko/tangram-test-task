<template>
  <div class="service-header">
    <div class="service-header__navigation">
      <NuxtLink v-for="link in serviceNavigationLinks()" :to="link.to">{{
        link.name
      }}</NuxtLink>
    </div>
  </div>
</template>

<script>
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import { serviceNavigationLinks } from '@/modules/services/helpers/navigation'

export default {
  methods: {
    serviceNavigationLinks() {
      return serviceNavigationLinks
    }
  },
  components: { HeaderBanner }
}
</script>

<style lang="scss" scoped>
.service-header {
  background-color: #fff;
  padding: 1.6rem;
  width: 100%;
  margin-bottom: 3.2rem;
  box-shadow: 0 4px 16px #11111129;
  border-radius: 4px;
  &__navigation {
    a {
      padding: 0.6rem 1.6rem;
      margin-right: 3.2rem;
      font-size: 1.7rem;
      line-height: 20px;
      color: #111;
      border-radius: 4px;
      font-weight: 600;
      transition: background-color 0.3s, color 0.3s;

      &.nuxt-link-active {
        background-color: #111;
        color: #fdfdfd;
      }
    }
  }
}
</style>
