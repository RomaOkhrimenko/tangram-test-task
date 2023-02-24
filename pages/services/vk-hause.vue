<template>
  <div class="service-container">
    <HeaderBanner
      title="VK Hause"
      :description="`<p>Was muss transportiert werden?</p>`"
      ><img
        slot="img"
        src="~/assets/images/jpg/vk-hause-banner.jpg"/><TransportSvg slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <VKHause />
  </div>
</template>

<script>
import VKHause from '@/modules/services/pages/VKHause.vue'
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import { TransportSvg } from '@/assets/images/svg'

export default {
  components: { ServiceHeader, HeaderBanner, VKHause, TransportSvg }
}
</script>

<style lang="scss" scoped></style>
