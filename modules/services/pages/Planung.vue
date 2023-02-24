<template>
  <div class="planung">
    <!--  BestellDetails  -->
    <SectionWrapper>
      <!--   Title   -->
      <SectionTitle slot="title" title="Bestelldetails" />

      <!--  Content  -->
      <div class="planung-project-info" slot="content">
        <div class="planung-project-info__name">
          <span>Projekt Name</span>
          <InputText
            placeholder="Zum Beispiel: Machen Sie einen Küchenschrank"
          />
        </div>

        <ServiceMedia title="Jetzigen Küche hoch" />
      </div>
      <!--  End Content    -->
    </SectionWrapper>
    <!--  End BestellDetails  -->

    <!--  Welche Bilder haben dir in der Küchengalerie gefallen  -->
    <SectionWrapper class="planung-apartment">
      <!--   Title   -->
      <SectionTitle
        slot="title"
        title="Welche Bilder haben dir in der Küchengalerie gefallen"
      >
        <div slot="additional-content" class="planung-apartment__statistics">
          <h4>Bilder ausgewählt:</h4>
          <b>0</b>
        </div>
      </SectionTitle>

      <!--  Content    -->
      <div class="planung-apartment-slider" slot="content">
        <ApartmentSlider />
      </div>
    </SectionWrapper>
    <!--  End Welche Bilder haben dir in der Küchengalerie gefallen  -->

    <!--  Beschreiben Sie Ihre Bestellung  -->

    <SectionWrapper>
      <SectionTitle slot="title" title="Beschreiben Sie Ihre Bestellung" />

      <DescribeOrder
        slot="content"
        placeholder="Beispiel: Machen Sie einen Küchenschrank, Breite - 50 cm, Höhe - 90 cm, Tiefe - 30 cm, Spanplattenmaterial. Alle notwendigen Materialien sind vorhanden. Die notwendigen Werkzeuge des Meisters"
      >
        <span class="planung-microphone-title" slot="microphone-title"
          >Wie soll Ihre Küche sein?</span
        >
      </DescribeOrder>
    </SectionWrapper>

    <!--  End Beschreiben Sie Ihre Bestellung  -->

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

    <!--  Adressen eintragen  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Adressen eintragen" />
      <ProfilePLZ slot="content" :isAddress="true" />
    </SectionWrapper>
    <!--  End Adressen eintragen  -->

    <!--  Ungefähres Küchenbudget  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Ungefähres Küchenbudget" />
      <Price slot="content" />
    </SectionWrapper>
    <!--  End Ungefähres Küchenbudget  -->

    <!--  Submit  -->
    <div class="planung__submit">
      <SubmitApplicationButton />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import InputText from '@/modules/services/components/inputs/InputText.vue'
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'
import ApartmentSlider from '@/modules/services/components/sliders/apartmnets-slider/ApartmentSlider.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import ProfilePLZ from '@/modules/services/components/templates/ProfilePLZ.vue'
import Price from '@/modules/services/components/templates/Price.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'
import DescribeOrder from '@/modules/services/components/templates/DescribeOrder.vue'
import ServiceMedia from '@/modules/services/components/templates/ServiceMedia.vue'
export default {
  components: {
    ServiceMedia,
    DescribeOrder,
    SubmitApplicationButton,
    Price,
    ProfilePLZ,
    Distance,
    Appointment,
    ApartmentSlider,
    AddMediaButton,
    SectionWrapper,
    InputText,
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
.planung {
  background-color: #fff;
  border-radius: 4px;
  &-project-info {
    display: flex;
    flex-direction: column;
    padding: 4.8rem 3.2rem;

    &__name {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin-bottom: 2.4rem;

      span {
        font-size: 1.3rem;
        line-height: 24px;
      }

      .input-text {
        max-width: 350px;
      }
    }
  }

  &-apartment {
    .section-title {
      justify-content: space-between;
    }
    &-slider {
      margin-top: 1.6rem;
    }
    &__statistics {
      display: flex;
      align-items: center;
      h4 {
        font-size: 1.3rem;
        line-height: 13px;
        opacity: 0.56;
        margin-right: 0.8rem;
      }

      b {
        font-size: 1.3rem;
        line-height: 24px;
      }
    }
  }

  &__submit {
    padding: 4.8rem 0;
    display: flex;
    justify-content: center;
  }

  &-microphone-title {
    font-size: 1.3rem;
    line-height: 13px;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
}
</style>
