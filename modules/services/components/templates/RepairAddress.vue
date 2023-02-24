<template>
  <div class="repair-address">
    <InputText placeholder="00 00000" />

    <div class="repair-address__floor">
      <span>Etage</span>
      <div class="repair-address__floor-input">
        0
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/modules/services/components/inputs/InputText.vue'

export default {
  components: { InputText },
  data() {
    return {
      floor: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.repair-address {
  display: flex;
  align-items: center;
  .input-text {
    margin-right: 4rem;
  }

  .repair-address__floor {
    display: flex;
    align-items: center;

    span {
      font-size: 1.3rem;
      line-height: 24px;
      margin-right: 1.6rem;
    }

    &-input {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      border: 1px solid #dededf;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      line-height: 2.4px;
    }
  }
}
</style>
