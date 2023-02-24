<template>
  <button class="price-button" :class="{ active: isActive }">
    <span>bis</span>
    <h3>
      <strong>{{ firstNumber }}</strong
      ><strong>{{ restNumbers }}</strong>
    </h3>
    <b>€</b>
  </button>
</template>

<script>
export default {
  props: ['price', 'isActive'],

  data() {
    return {
      firstNumber: '',
      restNumbers: '',
      currentPrice: 0
    }
  },

  mounted() {
    this.currentPrice = this.price
    this.currentPrice = this.currentPrice.toString().split('')
    this.firstNumber = this.currentPrice[0]
    this.currentPrice.shift()
    this.restNumbers = this.currentPrice.join('')
  }
}
</script>

<style lang="scss" scoped>
.price-button {
  display: flex;
  align-items: flex-end;
  background-color: #11111100;
  border: 2px solid #111111;
  border-radius: 4px;
  padding: 1.2rem 1.6rem;
  transition: border 0.3s, color 0.3s, opacity 0.3s;
  &:hover {
    border: 2px solid rgba(#111, 0.16);
  }

  &.active {
    background-color: #111;
    color: #fdfdfd;

    b {
      opacity: 0.56;
    }
  }
  span {
    opacity: 0.4;
    font-size: 1.3rem;
    line-height: 16px;
    font-weight: 600;
  }
  h3 {
    margin: 0 0.8rem;
    font-size: 2.6rem;
    line-height: 26px;
    font-weight: bold;

    strong {
      &:first-child {
        margin-right: 0.5rem;
      }
    }
  }
  b {
    font-size: 1.7rem;
    line-height: 20px;
    font-weight: 600;
  }
}
</style>
