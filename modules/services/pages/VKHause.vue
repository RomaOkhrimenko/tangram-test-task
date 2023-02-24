<template>
  <div class="vk-house">
    <!--  Hast du eine Küchenplanung?  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Hast du eine Küchenplanung?" />
      <YesOrNo slot="content" />
    </SectionWrapper>
    <!--  End Hast du eine Küchenplanung?  -->

    <!--  Gewünschte Termin  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Gewünschte Termin" />
      <Appointment slot="content" />
    </SectionWrapper>
    <!--  End Gewünschte Termin  -->

    <!--  Firmen in deine Näher -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Firmen in deine Näher" />
      <Distance slot="content" />
    </SectionWrapper>
    <!--  End Firmen in deine Näher  -->

    <!--  Küchenplan herunterladen  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Küchenplan herunterladen" />
      <ServiceMedia
        title="Laden Sie Ihre Küchen Planung Datei hoch"
        slot="content"
      />
    </SectionWrapper>
    <!--  End Küchenplan herunterladen  -->

    <!--  Wie Hoch ist Ihr Budget?  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Wie Hoch ist Ihr Budget?" />
      <Price slot="content" />
    </SectionWrapper>
    <!--  End Wie Hoch ist Ihr Budget?  -->

    <!--  Welche Bilder haben dir in der Küchengalerie gefallen  -->
    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Welche Bilder haben dir in der Küchengalerie gefallen"
      />
      <ApartmentSlider slot="content" />
    </SectionWrapper>
    <!--  End Welche Bilder haben dir in der Küchengalerie gefallen  -->
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import YesOrNo from '@/modules/services/components/templates/YesOrNo.vue'
import CalendarSlider from '@/modules/services/components/sliders/calendar-slider/CalendarSlider.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import ServiceMedia from '@/modules/services/components/templates/ServiceMedia.vue'
import Price from '@/modules/services/components/templates/Price.vue'
import ApartmentSlider from '@/modules/services/components/sliders/apartmnets-slider/ApartmentSlider.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'

export default {
  components: {
    Appointment,
    ApartmentSlider,
    Price,
    ServiceMedia,
    Distance,
    CalendarSlider,
    YesOrNo,
    SectionTitle,
    SectionWrapper
  }
}
</script>

<style lang="scss" scoped>
.vk-house {
  background-color: #fff;
  .yes-or-no {
    padding: 4.8rem 3.2rem;
  }

  .service-media {
    padding: 4.8rem 3.2rem;
    gap: 3.2rem;
  }
}
</style>
