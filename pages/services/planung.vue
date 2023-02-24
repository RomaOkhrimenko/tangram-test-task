<template>
  <div class="service-container">
    <HeaderBanner
      title="Planung"
      image="~/assets/images/jpg/planung-banner.jpg"
      :description="
        `<p><b>Hinweis:</b> Beim weitere erfolgreiche Zusammenarbeit <br> die Planung kosten werden zurückerstattet</p>`
      "
      ><img
        slot="img"
        src="~/assets/images/jpg/planung-banner.jpg"/><TransferSvg slot="svg"
    /></HeaderBanner>
    <ServiceHeader />
    <Planung />
  </div>
</template>

<script>
import Planung from '@/modules/services/pages/Planung.vue'
import ServiceHeader from '@/modules/services/components/templates/ServiceHeader.vue'
import HeaderBanner from '@/modules/services/components/templates/HeaderBanner.vue'
import { TransferSvg } from '~/assets/images/svg'
export default {
  components: { HeaderBanner, ServiceHeader, Planung, TransferSvg }
}
</script>
