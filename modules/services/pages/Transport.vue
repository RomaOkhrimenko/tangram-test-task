<template>
  <div class="transport">
    <!--  Fotos hochladen  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Fotos hochladen" />
      <ServiceMedia slot="content" title="Gegenstände für den Transport." />
    </SectionWrapper>
    <!--  End Fotos hochladen  -->

    <!--  Beschreibe, was transportiert werden muss  -->
    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Beschreibe, was transportiert werden muss"
      />
      <DescribeOrder slot="content" />
    </SectionWrapper>
    <!--  End Beschreibe, was transportiert werden muss  -->

    <!--  Adressen eintragen  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Adressen eintragen" />
      <EnterAddress slot="content" />
    </SectionWrapper>
    <!--  End Adressen eintragen  -->

    <!--  Gewünschte Termin  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Gewünschte Termin" />
      <Appointment slot="content" />
    </SectionWrapper>
    <!--  End Gewünschte Termin  -->

    <!--  Firmen in deine Näher  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Firmen in deine Näher" />
      <Distance slot="content" />
    </SectionWrapper>
    <!--  End Firmen in deine Näher  -->

    <div class="transport__button">
      <SubmitApplicationButton />
    </div>
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import ServiceMedia from '@/modules/services/components/templates/ServiceMedia.vue'
import DescribeOrder from '@/modules/services/components/templates/DescribeOrder.vue'
import EnterAddress from '@/modules/services/components/templates/EnterAddress.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'

export default {
  components: {
    SubmitApplicationButton,
    Distance,
    Appointment,
    EnterAddress,
    DescribeOrder,
    ServiceMedia,
    SectionTitle,
    SectionWrapper
  }
}
</script>

<style lang="scss" scoped>
.transport {
  background-color: #fff;
  &__button {
    padding: 4.8rem 0;
    display: flex;
    justify-content: center;
  }
  .service-media {
    padding: 4.8rem 3.2rem;
  }
}
</style>
