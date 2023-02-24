<template>
  <div class="service-price">
    <PriceButton price="1 500" />
    <PriceButton price="2 500" />
    <PriceButton price="5 800" />
    <InputText placeholder="Geben Sie Ihren Wunschpreis an" />
  </div>
</template>

<script>
import PriceButton from '@/modules/services/components/buttons/PriceButton.vue'
import InputText from '@/modules/services/components/inputs/InputText.vue'

export default {
  components: { InputText, PriceButton }
}
</script>

<style lang="scss" scoped>
.service-price {
  display: flex;
  align-items: center;
  gap: 0 1.6rem;
  padding: 4.8rem 3.2rem;

  .price-button {
    flex-shrink: 0;
  }
}
</style>
