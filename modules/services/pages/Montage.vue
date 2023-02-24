<template>
  <div class="montage montage-container">
    <!--  Fotos hochladen  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Fotos hochladen" />
      <div class="montage-media" slot="content">
        <ServiceMedia
          title="Arbeitsfläche und alles was montiert werden muss"
        />

        <ServiceMedia title="Plan der einzubauenden Küche hochladen" />
      </div>
    </SectionWrapper>
    <!--  End Fotos hochladen  -->

    <!--  Beschreibe was defekt ist oder montiert werden soll  -->
    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Beschreibe was defekt ist oder montiert werden soll"
      />

      <DescribeOrder
        slot="content"
        placeholder="Was defekt ist oder montiert werden soll"
      />
    </SectionWrapper>
    <!-- End Beschreibe was defekt ist oder montiert werden soll   -->

    <!--  Die Adresse, wo deine Küchenmöbel montiert werden sollen"  -->
    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Die Adresse, wo deine Küchenmöbel
      montiert werden sollen"
      />

      <div class="montage-address" slot="content">
        <div class="montage-address__plz">
          <span>PLZ</span>
          <RepairAddress />
        </div>

        <div class="montage-address__checkbox">
          <span>Haben Sie Aufzug?</span>
          <YesOrNo />
        </div>
      </div>
    </SectionWrapper>
    <!--  End Die Adresse, wo deine Küchenmöbel montiert werden sollen"  -->

    <!--  Gewünschte Termin  -->

    <SectionWrapper>
      <SectionTitle slot="title" title="Gewünschte Termin" />
      <Appointment slot="content" />
    </SectionWrapper>

    <!--  End Gewünschte Termin -->

    <!--  Firmen in deine Näher  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Firmen in deine Näher" />
      <Distance slot="content" />
    </SectionWrapper>
    <!--   End Firmen in deine Näher  -->

    <!--  Profil PLZ  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Profil PLZ" />
      <ProfilePLZ slot="content" />
    </SectionWrapper>

    <!--  End Profil PLZ  -->

    <div class="montage__button">
      <SubmitApplicationButton />
    </div>
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'
import ServiceMedia from '@/modules/services/components/templates/ServiceMedia.vue'
import DescribeOrder from '@/modules/services/components/templates/DescribeOrder.vue'
import ProfilePLZ from '@/modules/services/components/templates/ProfilePLZ.vue'
import RepairAddress from '@/modules/services/components/templates/RepairAddress.vue'
import YesOrNo from '@/modules/services/components/templates/YesOrNo.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'

export default {
  components: {
    SubmitApplicationButton,
    Distance,
    Appointment,
    YesOrNo,
    RepairAddress,
    ProfilePLZ,
    DescribeOrder,
    ServiceMedia,
    AddMediaButton,
    SectionTitle,
    SectionWrapper
  }
}
</script>

<style lang="scss">
.montage {
  &-container {
    background-color: #fff;
  }
  &-media {
    padding: 5.2rem 3.2rem;
    .service-media {
      grid-template-columns: 30% 70%;
      &:first-child {
        margin-bottom: 2.4rem;
      }

      span {
        margin-right: 0;
      }

      & > div {
        padding-left: 3.2rem;
      }
    }
  }

  &-address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3.2rem;
    &__plz {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 3rem;
      margin-bottom: 2.4rem;

      span {
        font-size: 1.3rem;
        line-height: 24px;
        margin-right: 4rem;
        font-weight: 500;
      }

      .input-text {
        max-width: 207px;
      }
    }

    &__checkbox {
      display: grid;
      grid-template-columns: 35% 65%;
      align-items: center;

      & > span {
        font-size: 1.3rem;
        line-height: 24px;
        opacity: 0.56;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    padding: 4.8rem 0;
  }
}
</style>
