<template>
  <div class="distance">
    <DistanceButton distance="10" :is-active="true" />
    <DistanceButton distance="20" />
    <DistanceButton distance="100" />
    <InputText :placeholder="'Ihr gewünschte Umkreis'" />
  </div>
</template>

<script>
import DistanceButton from '@/modules/services/components/buttons/DistanceButton.vue'
import InputText from '@/modules/services/components/inputs/InputText.vue'

export default {
  components: { InputText, DistanceButton }
}
</script>

<style lang="scss" scoped>
.distance {
  display: flex;
  align-items: center;
  gap: 0 2.4rem;
  padding: 4.8rem 3.2rem;
  .distance-button {
    flex-shrink: 0;
  }

  .input-text {
    max-width: 280px;
    border: 1px solid #dededf;
    background-color: transparent;
    line-height: 10px;
  }
}
</style>
