<template>
  <div class="service-media">
    <span>{{ title }}</span>

    <div>
      <AddMediaButton title="Foto hinzufügen" />
      <AddMediaButton name="video" title="Video hinzufügen" />
    </div>
  </div>
</template>

<script>
import AddMediaButton from '@/modules/services/components/buttons/AddMediaButton.vue'

export default {
  components: { AddMediaButton },
  props: ['title']
}
</script>

<style lang="scss" scoped>
.service-media {
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;

  span {
    font-size: 1.3rem;
    line-height: 24px;
  }

  div {
    max-width: 510px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0 1.6rem;
  }
}
</style>
