<template>
  <div class="reparatur">
    <SectionWrapper>
      <SectionTitle slot="title" title="Möchten Sie reparieren?" />
      <div slot="content" class="reparatur-showbtn">
        <YesOrNo
          @handleShowCheckboxStatus="handleShowCheckboxStatus"
          :isChecked="isShowCheckboxStatus"
        />
      </div>
    </SectionWrapper>

    <div v-if="isShowCheckboxStatus">
      <!--   Was muss repariert werden?   -->
      <SectionWrapper>
        <SectionTitle slot="title" title="Was muss repariert werden?" />
        <ServiceMedia
          slot="content"
          title="Laden Sie das zu reparierende Foto hoch"
        />
      </SectionWrapper>
      <!--    End Was muss repariert werden?   -->

      <!--  Die Adresse, an der die Reparatur durchgeführt wird    -->
      <SectionWrapper>
        <SectionTitle
          slot="title"
          title="Die Adresse, an der die Reparatur durchgeführt wird"
        />

        <div slot="content" class="reparatur-address">
          <div>
            <div>
              <span class="reparatur-address__title">Wo ist die Küche?</span>
              <b>PLZ</b>
            </div>
            <RepairAddress />
          </div>
          <div>
            <span class="reparatur-address__title">Haben Sie Aufzug?</span>
            <YesOrNo />
          </div>
        </div>
      </SectionWrapper>
      <!--   End Die Adresse, an der die Reparatur durchgeführt wird   -->

      <!--   Gewünschte Termin   -->

      <SectionWrapper>
        <SectionTitle slot="title" title="Gewünschte Termin" />
        <Appointment slot="content" />
      </SectionWrapper>

      <!--   End Gewünschte Termin   -->

      <!--  Firmen in deine Näher  -->
      <SectionWrapper>
        <SectionTitle slot="title" title="Firmen in deine Näher" />

        <Distance slot="content" />
      </SectionWrapper>

      <!--  End Firmen in deine Näher  -->

      <!--  Von PLZ Profil  -->
      <SectionWrapper>
        <SectionTitle slot="title" title="Von PLZ Profil" />

        <ProfilePLZ slot="content" />
      </SectionWrapper>

      <!--  End Von PLZ Profil  -->

      <div class="reparatur__button">
        <SubmitApplicationButton />
      </div>
    </div>
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import SwitchCheckbox from '@/modules/services/components/inputs/SwitchCheckbox.vue'
import YesOrNo from '@/modules/services/components/templates/YesOrNo.vue'
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'
import ServiceMedia from '@/modules/services/components/templates/ServiceMedia.vue'
import RepairAddress from '@/modules/services/components/templates/RepairAddress.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import ProfilePLZ from '@/modules/services/components/templates/ProfilePLZ.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'

export default {
  components: {
    SubmitApplicationButton,
    ProfilePLZ,
    Distance,
    Appointment,
    RepairAddress,
    ServiceMedia,
    AddMediaButton,
    YesOrNo,
    SwitchCheckbox,
    SectionTitle,
    SectionWrapper
  },
  data() {
    return {
      isShow: false,
      isShowCheckboxStatus: false
    }
  },

  methods: {
    handleShowCheckboxStatus(status) {
      this.isShowCheckboxStatus = status
    }
  }
}
</script>

<style lang="scss">
.reparatur {
  position: relative;
  background-color: #fff;

  &-showbtn {
    display: flex;
    align-items: center;
    padding: 5.6rem 3.2rem;

    .yes-or-no {
    }
  }

  .service-media {
    padding: 4.8rem 3.2rem;
    grid-template-columns: 30% 70%;
    gap: 1rem 3.2rem;
  }

  .reparatur-address {
    padding: 4.8rem 3.2rem;

    & > div {
      display: grid;
      grid-template-columns: 34% 66%;
      align-items: center;

      &:first-child {
        margin-bottom: 2.6rem;
      }

      b {
        margin: 0 3rem 0 5rem;
        font-size: 1.3rem;
        line-height: 2.4rem;
      }
    }
    .input-text {
      max-width: 207px !important;
    }
    &__title {
      font-size: 1.3rem;
      line-height: 24px;
      opacity: 0.56;
    }
  }

  .appointment {
    padding: 5.6rem 3.2rem 4.8rem;
  }

  &__button {
    display: flex;
    justify-content: center;
    padding: 4.8rem 0;
  }
}
</style>
