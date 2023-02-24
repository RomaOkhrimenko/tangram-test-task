<template>
  <div class="umzug">
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

    <!--  Welcher Hilfe brauchen Sie?  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Welcher Hilfe brauchen Sie?" />
      <DescribeOrder
        slot="content"
        :placeholder="`(z.B Kartons) und wobei du Hilfe brauchst`"
      />
    </SectionWrapper>

    <!--   End Welcher Hilfe brauchen Sie?  -->

    <!--  Nimmst du deine Küche mit?  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Nimmst du deine Küche mit?" />
      <div slot="content" class="umzug-choice">
        <BlackCheckbox text="Nein" />
        <BlackCheckbox text="Ja" />
      </div>
    </SectionWrapper>
    <!--  End Nimmst du deine Küche mit?-->

    <!--  Brauchen Sie Verpackungs Dienstleistungen? -->
    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Brauchen Sie Verpackungs Dienstleistungen?"
      />
      <div slot="content" class="umzug-choice">
        <BlackCheckbox text="Nein" />
        <BlackCheckbox text="Ja" />
      </div>
    </SectionWrapper>
    <!--  End Brauchen Sie Verpackungs Dienstleistungen? -->

    <!--  Brauchen Sie Transport?  -->
    <SectionWrapper>
      <SectionTitle slot="title" title="Brauchen Sie Transport?" />
      <div slot="content" class="umzug-choice">
        <BlackCheckbox text="Nein" />
        <BlackCheckbox text="Ja" />
      </div>
    </SectionWrapper>
    <!--  End Brauchen Sie Transport?-->

    <div class="umzug-button">
      <SubmitApplicationButton />
    </div>
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import EnterAddress from '@/modules/services/components/templates/EnterAddress.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import DescribeOrder from '@/modules/services/components/templates/DescribeOrder.vue'
import BlackCheckbox from '@/modules/services/components/inputs/BlackCheckbox.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'

export default {
  components: {
    SubmitApplicationButton,
    BlackCheckbox,
    DescribeOrder,
    Distance,
    Appointment,
    EnterAddress,
    SectionTitle,
    SectionWrapper
  }
}
</script>

<style lang="scss" scoped>
.umzug {
  background-color: #fff;

  &-choice {
    display: flex;
    align-items: center;
    padding: 4.8rem 3.2rem;

    .black-checkbox {
      &:first-child {
        margin-right: 10rem;
      }
    }
  }

  &-button {
    padding: 4.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
