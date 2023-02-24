<template>
  <div class="planung-page">
    <div class="slider-container">
      <CalendarSlider />
    </div>
    <div class="slider-container">
      <div class="media-buttons">
        <AddMediaButton :title="'Foto hinzufügen'"
          ><ImageAddSvg slot="svg"
        /></AddMediaButton>
        <AddMediaButton title="Video hinzufügen">
          <VideoAddSvg slot="svg" />
        </AddMediaButton>
      </div>

      <div class="price-buttons">
        <PriceButton :price="1200" :isActive="true" />
        <PriceButton :price="1500" />
        <PriceButton :price="1700" />
      </div>

      <SubmitApplicationButton />
      <div class="distance-buttons">
        <DistanceButton :distance="10" />
        <DistanceButton :distance="15" :isActive="true" />
      </div>

      <div class="apartment-slider-wrapper">
        <ApartmentSlider />
      </div>

      <div class="switch-button">
        <SwitchCheckbox />
      </div>

      <div class="black-checkbox">
        <BlackCheckbox text="Ja" />
        <BlackCheckbox text="Night" />
      </div>

      <div class="radio">
        <RadioInput :checked="true" text="Text1" />
        <RadioInput :checked="false" text="Text2" />
      </div>

      <div class="input-text">
        <InputText />
      </div>

      <div class="textarea-input">
        <TextareaInput />
      </div>
    </div>

    <ServiceWrapper>
      <SectionTitle slot="title" title="Any title" />

      <div slot="content" class="custom-section">
        <ApartmentSlider />
      </div>
    </ServiceWrapper>
    <div class="section-title-container">
      <SectionTitle />
    </div>

    <div class="task-cards">
      <TaskCard title="Mobelab-/aufbau">
        <JudgeSvg slot="svg" />
      </TaskCard>
    </div>
  </div>
</template>

<script>
import CalendarSlider from '@/modules/services/components/sliders/calendar-slider/CalendarSlider.vue'
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'
import { ImageAddSvg, VideoAddSvg, JudgeSvg } from '~/assets/images/svg'
import PriceButton from '@/modules/services/components/buttons/PriceButton.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'
import DistanceButton from '@/modules/services/components/buttons/DistanceButton.vue'
import ApartmentSlider from '@/modules/services/components/sliders/apartmnets-slider/ApartmentSlider.vue'
import SwitchCheckbox from '@/modules/services/components/inputs/SwitchCheckbox.vue'
import BlackCheckbox from '@/modules/services/components/inputs/BlackCheckbox.vue'
import RadioInput from '@/modules/services/components/inputs/RadioInput.vue'
import InputText from '@/modules/services/components/inputs/InputText.vue'
import TextareaInput from '@/modules/services/components/inputs/TextareaInput.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import ServiceWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import TaskCard from '@/modules/services/components/templates/TaskCard.vue'

export default {
  components: {
    TaskCard,
    ServiceWrapper,
    SectionTitle,
    TextareaInput,
    InputText,
    RadioInput,
    BlackCheckbox,
    SwitchCheckbox,
    ApartmentSlider,
    DistanceButton,
    SubmitApplicationButton,
    PriceButton,
    AddMediaButton,
    CalendarSlider,
    ImageAddSvg,
    VideoAddSvg,
    JudgeSvg
  }
}
</script>

<style lang="scss" scoped>
.planung-page {
  overflow-y: auto;
  height: calc(100vh - 132px);
  padding-bottom: 10rem;
}
.slider-container {
  max-width: 730px;
}

.media-buttons {
  display: flex;
  align-items: center;
  max-width: 600px;
  gap: 5rem;
}

.price-buttons {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin: 1rem;
}

.distance-buttons {
  gap: 1.6rem;
  display: flex;
  margin: 1rem;
}

.apartment-slider-wrapper {
  margin: 1rem;
}

.switch-button {
  display: flex;
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  .switch-checkbox {
    width: 6.4rem;
    height: 3.2rem;
  }
}

.black-checkbox {
  margin: 1rem;
  display: flex;
}

.radio {
  margin: 1rem;
}

.input-text {
  margin: 1rem;
}
.textarea-input {
  margin: 1rem;
  width: 100%;
}
.section-title-container {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
}

.custom-section {
  .input-text {
    max-width: 400px;
  }
}
</style>
