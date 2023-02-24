<template>
  <button type="submit" class="submit-app">EINEN ANTRAG STELLEN</button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.submit-app {
  background-color: #111;
  border-radius: 4px;
  padding: 1.8rem 6.5rem;
  border: 0;

  color: #fdfdfd;
  font-size: 1.7rem;
  line-height: 20px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #007aff;
    background-color: rgba(#111, 0.9);
  }
}
</style>
