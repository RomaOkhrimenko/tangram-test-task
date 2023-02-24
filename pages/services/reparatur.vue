<template>
  <div class="service-container">
    <HeaderBanner
      title="Reparatur"
      :description="`<p>Möchten Sie reparieren?</p>`"
      ><img slot="img" src="~/assets/images/jpg/reparatur-banner.jpg"/><RulePen
        slot="svg"
    /></HeaderBanner>
    <ServiceHeader /><Reparatur />
  </div>
</template>

<script>
import Reparatur from '@/modules/services/pages/Reparatur.vue'
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import { RulePen } from '~/assets/images/svg'
export default {
  components: { Reparatur, RulePen, HeaderBanner, ServiceHeader }
}
</script>
