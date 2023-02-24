<template>
  <div class="montage">
    <HeaderBanner
      title="Montage"
      :description="`<p>Du suchst einen Monteur?</p>`"
      ><img slot="img" src="~/assets/images/jpg/montage-banner.jpg"/><JudgeSvg
        slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <Montage />
  </div>
</template>

<script>
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import Montage from '@/modules/services/pages/Montage.vue'
import { JudgeSvg } from '~/assets/images/svg'

export default {
  components: { ServiceHeader, HeaderBanner, JudgeSvg, Montage }
}
</script>

<style lang="scss" scoped>
.montage {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
