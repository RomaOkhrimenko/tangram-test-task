<template>
  <div class="service-container">
    <HeaderBanner
      title="Umzugshilfe"
      :description="`<p>Ich Hilfe gerne beim Umzug</p>`"
      ><img
        slot="img"
        src="~/assets/images/jpg/umzugshilfe-banner.jpg"/><TransportSvg
        slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <Umzugshilfe />
  </div>
</template>

<script>
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import Umzugshilfe from '@/modules/services/pages/Umzugshilfe.vue'
import { TransportSvg } from '@/assets/images/svg'

export default {
  components: { ServiceHeader, HeaderBanner, TransportSvg, Umzugshilfe }
}
</script>

<style lang="scss" scoped></style>
