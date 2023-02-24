<template>
  <div class="apartment-block">
    <img
      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80"
      alt=""
    />

    <div class="apartment-block__plus"><PlusSvg /></div>
  </div>
</template>

<script>
import { PlusSvg } from '~/assets/images/svg'
export default {
  components: { PlusSvg }
}
</script>

<style lang="scss" scoped>
.apartment-block {
  width: 388px;
  height: 264px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  &__plus {
    background: #ffffff;
    border-radius: 4px 0;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    padding: 1.6rem;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #111;
      color: #fff;

      svg {
        transform: rotate(45deg);
      }
    }

    svg {
      transition: transform 0.3s;
    }
  }
}
</style>
