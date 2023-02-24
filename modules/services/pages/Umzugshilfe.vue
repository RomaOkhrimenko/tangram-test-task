<template>
  <div class="move-help">
    <div class="move-help-variants">
      <VariantInput
        @handleChecked="handleTab"
        :isChecked="tab === 'suche'"
        id="suche"
        title="Suche:"
      />
      <VariantInput
        @handleChecked="handleTab"
        :isChecked="tab === 'biete'"
        id="biete"
        title="Biete:"
      />
    </div>

    <BieteSection v-if="tab === 'biete'" />
    <SucheSection v-if="tab === 'suche'" />

    <div class="move-help__button">
      <SubmitApplicationButton />
    </div>
  </div>
</template>

<script>
import VariantInput from '@/modules/services/components/inputs/VariantInput.vue'
import SectionWrapper from '@/modules/services/components/templates/SectionWrapper.vue'
import SectionTitle from '@/modules/services/components/templates/SectionTitle.vue'
import BieteSection from '@/modules/services/components/templates/BieteSection.vue'
import SubmitApplicationButton from '@/modules/services/components/buttons/SubmitApplicationButton.vue'
import SucheSection from '@/modules/services/components/templates/SucheSection.vue'

export default {
  components: {
    SucheSection,
    SubmitApplicationButton,
    BieteSection,
    SectionTitle,
    SectionWrapper,
    VariantInput
  },
  data() {
    return {
      tab: 'suche'
    }
  },
  methods: {
    handleTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.move-help {
  background-color: #fff;

  &-variants {
    display: flex;
    align-items: center;
    width: 100%;

    .variant-input {
      &:first-child {
        border-radius: 4px 0px 0px 0px;
      }

      &:last-child {
        border-radius: 0px 4px 0px 0px;
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
