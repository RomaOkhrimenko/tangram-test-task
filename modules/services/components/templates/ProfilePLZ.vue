<template>
  <div class="profile-plz">
    <div v-if="isAddress" class="profile-plz__address">
      <span>Liefer Postleitzahl</span>
      <InputText placeholder="Postleitzahl für Lieferung und Montage" />
    </div>

    <div class="profile-plz__dein">
      <span>Dein PLZ</span>
      <InputText placeholder="00 0000" />
    </div>
  </div>
</template>

<script>
import InputText from '@/modules/services/components/inputs/InputText.vue'

export default {
  components: { InputText },
  props: ['isAddress']
}
</script>

<style lang="scss" scoped>
.profile-plz {
  padding: 4.8rem 3.2rem;
  &__address {
    margin-bottom: 2.4rem;
  }
  &__address,
  &__dein {
    display: grid;
    align-items: center;
    grid-template-columns: 35% 65%;

    span {
      font-size: 1.3rem;
      line-height: 24px;
      font-weight: 600;
    }

    .input-text {
      max-width: 350px;
      line-height: 10px;
    }
  }
}
</style>
