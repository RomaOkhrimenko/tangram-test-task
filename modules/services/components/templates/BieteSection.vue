<template>
  <SectionWrapper>
    <SectionTitle slot="title" title="Ich Hilfe gerne beim Umzug" />

    <div slot="content" class="offer">
      <div class="offer-field">
        <h3 class="offer-field__title">Geschlecht Männlich oder Weblich</h3>

        <div class="offer-field__radio">
          <RadioInput text="Männlich" />
          <RadioInput text="Weiblich" />
        </div>
      </div>

      <div class="offer-field">
        <h3 class="offer-field__title">Name</h3>

        <InputText placeholder="Type your name here..." />
      </div>

      <div class="offer-field">
        <h3 class="offer-field__title">Alter</h3>

        <InputText placeholder="Type alter here..." />
      </div>

      <div class="offer-field">
        <h3 class="offer-field__title">Dein PLZ</h3>

        <InputText placeholder="Dein PLZ" />
      </div>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import RadioInput from '@/modules/services/components/inputs/RadioInput.vue'
import InputText from '@/modules/services/components/inputs/InputText.vue'

export default {
  components: { InputText, RadioInput, SectionTitle, SectionWrapper }
}
</script>

<style lang="scss" scoped>
.offer {
  padding: 4.8rem 3.2rem;

  &-field {
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: center;
    margin-bottom: 2.4rem;

    &:nth-child(2) {
      .input-text {
        max-width: 350px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.3rem;
      line-height: 16px;
      color: #606060;
    }

    &__radio {
      display: flex;
      align-items: center;
    }

    .input-text {
      line-height: 10px;

      max-width: 160px;
    }
  }
}
</style>
