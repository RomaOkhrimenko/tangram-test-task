<template>
  <div class="service-container">
    <HeaderBanner
      title="Umzug"
      :description="`<p>Willst du <b>umziehen</b>? </p>`"
      ><img slot="img" src="~/assets/images/jpg/umzug-banner.jpg"/><BoxSvg
        slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <Umzug />
  </div>
</template>

<script>
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import Umzug from '@/modules/services/pages/Umzug.vue'
import { BoxSvg } from '@/assets/images/svg'

export default {
  components: { ServiceHeader, HeaderBanner, BoxSvg, Umzug }
}
</script>

<style lang="scss" scoped></style>
