<template>
  <div class="contacts-input">
    <SearchSvg />

    <input type="text" placeholder="Finden" />
  </div>
</template>

<script>
import { SearchSvg } from '~/assets/images/svg'
export default {
  components: { SearchSvg }
}
</script>

<style lang="scss" scoped>
.contacts-input {
  display: flex;
  align-items: center;
  width: 100%;
  background: #eaeaea;
  border-radius: 8px;
  padding: 0 1.6rem;

  svg {
    margin-right: 1rem;
  }

  input {
    background: transparent;
    width: 100%;
    padding: 1.2rem 0;
    border: none;
  }
}
</style>
