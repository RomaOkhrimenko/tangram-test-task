<template>
  <div class="debate-message">
    <div class="debate-message__preview"></div>
    <div class="debate-message__title">
      Wünscht ihnen viel erfolg bei diesem projekt.
    </div>
    <div class="debate-message__desc">
      Machen sie es zu einem grossartigen ereignis!
    </div>
    <div class="debate-message__buttons" v-if="isShowButtons">
      <button>Ablehnen</button>
      <button @click="isShowButtons = false">Annehmen</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowButtons: true
    }
  }
}
</script>

<style lang="scss" scoped>
.debate-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 2.4rem 4rem;

  background: #007aff;
  box-shadow: 0 8px 16px #11111129;
  border-radius: 16px 16px 16px 0;

  &__preview {
    width: 96px;
    height: 96px;
    background-color: #fff;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 2rem;
    line-height: 26px;
    color: #fdfdfd;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  &__desc {
    color: #fdfdfd;
    font-size: 1.7rem;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 3.2rem;
  }
  &__buttons {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 28px;
    button {
      width: 50%;
      font-size: 1.7rem;
      line-height: 20px;
      font-weight: 700;
      padding: 1.8rem 0;
      border-radius: 28px;
      &:first-child {
        margin-right: 3.2rem;
        background-color: transparent;
        border: 1px solid rgba(253, 253, 253, 0.24);
        color: #fdfdfd;
      }

      &:last-child {
        background-color: #fff;
        border: 0;
        color: #111;
      }
    }
  }
}
</style>
