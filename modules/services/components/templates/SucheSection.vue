<template>
  <div class="suche">
    <SectionWrapper>
      <SectionTitle slot="title" title="Wann brauchen Sie Hilfe?" />
      <HelpTime slot="content" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Gewünschte Termin" />
      <Appointment slot="content" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Nimmst Du deine Küche mit?" />
      <YesOrNo slot="content" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Geschlecht" />
      <div slot="content" class="suche__radios">
        <RadioInput text="Männlich" />
        <RadioInput text="Weiblich" />
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle
        slot="title"
        title="Welche Aufgaben sollen erledigt werden?"
      />
      <div slot="content" class="suche-help">
        <div class="suche-help__container">
          <div></div>
          <div class="suche-help__container-blocks">
            <TaskCard title="Tragearbeiten"><BoxSvg slot="svg"/></TaskCard>
            <TaskCard title="Möbelab-/aufbau"
              ><JudgeSvg slot="svg" />
            </TaskCard>
            <TaskCard title="Kartons packen"> <BoxSvg slot="svg" /> </TaskCard>
          </div>
        </div>
        <DescribeOrder placeholder="Beschreibung was zu tun ist" />
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Ihre Adresse" />
      <ProfilePLZ slot="content" />
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Ihre Adresse" />
      <div slot="content" class="suche-media">
        <div></div>
        <div class="suche-media__container">
          <AddMediaButton title="Foto hinzufügen" />
          <AddMediaButton title="Video hinzufügen" name="video" />
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle slot="title" title="Ihre Adresse" />
      <Distance slot="content" />
    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import Appointment from '@/modules/services/components/templates/Appointment.vue'
import YesOrNo from '@/modules/services/components/templates/YesOrNo.vue'
import RadioInput from '@/modules/services/components/inputs/RadioInput.vue'
import HelpVariant from '@/modules/services/components/templates/HelpTime.vue'
import DescribeOrder from '@/modules/services/components/templates/DescribeOrder.vue'
import TaskCard from '@/modules/services/components/templates/TaskCard.vue'
import HelpTime from '@/modules/services/components/templates/HelpTime.vue'
import { BoxSvg, JudgeSvg } from '@/assets/images/svg'
import ProfilePLZ from '@/modules/services/components/templates/ProfilePLZ.vue'
import Distance from '@/modules/services/components/templates/Distance.vue'
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'

export default {
  components: {
    AddMediaButton,
    Distance,
    ProfilePLZ,
    HelpTime,
    TaskCard,
    DescribeOrder,
    HelpVariant,
    RadioInput,
    YesOrNo,
    Appointment,
    SectionTitle,
    SectionWrapper,
    BoxSvg,
    JudgeSvg
  }
}
</script>

<style lang="scss" scoped>
.suche {
  .yes-or-no {
    display: flex;
    justify-content: center;
    padding-right: 10rem;
  }

  &__radios {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5rem;

    .radio-input {
      &:first-child {
        margin-right: 3rem;
      }
    }
  }

  .suche-help {
    &__container {
      display: grid;
      grid-template-columns: 35% 65%;
      padding: 4.8rem 3.2rem 0 3.2rem;

      &-blocks {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1.6rem;
      }
    }
  }

  &-media {
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: center;
    padding: 4.8rem 3.2rem;

    &__container {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
  }
}
</style>
