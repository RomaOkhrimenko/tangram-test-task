<template>
  <div class="category-tabs">
    <div class="category-tabs__tab">
      <button><NoteLockSvg /></button>
    </div>
    <div class="category-tabs__tab">
      <button><FolderOpenSvg /></button>
    </div>
  </div>
</template>

<script>
import { FolderOpenSvg, NoteLockSvg } from '~/assets/images/svg'
export default {
  components: { FolderOpenSvg, NoteLockSvg }
}
</script>

<style lang="scss" scoped>
.category-tabs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__tab {
    button {
      border: 0;
      padding: 0.8rem;
      background-color: #fff;
      border-radius: 8px;
      margin-top: 2.4rem;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #111111;
        color: #fff;
      }
    }
  }
}
</style>
