<template>
  <div class="congratulations">
    <div class="fake"></div>
    <h3 class="congratulations__title">
      Herzlichen Glückwunsch zum Abschluss des Projekts!
    </h3>
    <span class="congratulations__description"
      >Das Projekt hat den Status von "Offen" an "Geschlossen" geändert.</span
    >
    <div class="congratulations__button"><button>HOME PAGE</button></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.congratulations {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background: #007b29;
  box-shadow: 0 8px 16px #11111129;
  border-radius: 20px;
  padding: 1.6rem 0 4rem 0;

  .fake {
    height: 50px;
    width: 50px;
    background-color: #fff;
    margin-bottom: 0.8rem;
  }

  &__title {
    font-size: 2.6rem;
    line-height: 32px;
    color: #fff;
    margin-bottom: 2rem;
  }

  &__description {
    font-size: 1.7rem;
    line-height: 28px;
    color: #fff;
    margin-bottom: 3.2rem;
  }

  &__button {
    button {
      background-color: #eaeaea;
      border-radius: 28px;
      padding: 1.8rem 7.3rem;
      border: 0;
      font-size: 1.7rem;
      line-height: 20px;
    }
  }
}
</style>
