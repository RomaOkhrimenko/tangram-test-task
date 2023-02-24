<template>
  <div class="service-container">
    <HeaderBanner
      title="Transport"
      :description="`<p>Was muss transportiert werden?</p>`"
      ><img
        slot="img"
        src="~/assets/images/jpg/transport-banner.jpg"/><TransportSvg slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <Transport />
  </div>
</template>

<script>
import Transport from '@/modules/services/pages/Transport.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import { TransportSvg } from '@/assets/images/svg'
export default {
  components: { HeaderBanner, ServiceHeader, Transport, TransportSvg }
}
</script>

<style lang="scss" scoped></style>
