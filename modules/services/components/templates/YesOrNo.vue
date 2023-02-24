<template>
  <div class="yes-or-no">
    <span>Nein</span>
    <SwitchCheckbox
      :isChecked="isChecked"
      @handleShowCheckboxStatus="handleShowCheckboxStatus"
    />
    <span>Ja</span>
  </div>
</template>

<script>
import SwitchCheckbox from '@/modules/services/components/inputs/SwitchCheckbox.vue'

export default {
  components: { SwitchCheckbox },
  props: ['isChecked'],
  methods: {
    handleShowCheckboxStatus(status) {
      this.$emit('handleShowCheckboxStatus', status)
    }
  }
}
</script>

<style lang="scss" scoped>
.yes-or-no {
  display: flex;
  align-items: center;

  span {
    font-size: 1.3rem;
    line-height: 24px;
  }

  .switch-checkbox {
    width: 6.4rem;
    height: 3.2rem;
    margin: 0 1rem;
  }
}
</style>
