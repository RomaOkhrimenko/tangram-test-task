<template>
  <button class="add-media-btn">
    <VideoAddSvg v-if="name === 'video'" />
    <ImageAddSvg v-else />
    <span>{{ title }}</span>
  </button>
</template>

<script>
import { VideoAddSvg, ImageAddSvg } from '~/assets/images/svg'
export default {
  props: ['title', 'name'],
  components: { VideoAddSvg, ImageAddSvg }
}
</script>

<style lang="scss" scoped>
.add-media-btn {
  background-color: rgba(0, 122, 255, 0.08);
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 2.4rem;
  color: #007aff;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #007aff;
    color: #fdfdfd;
  }

  svg {
    margin-right: 1.6rem;
  }

  span {
    font-size: 1.7rem;
    line-height: 20px;
  }
}
</style>
