<template>
  <div class="contact">
    <div class="contact__image">
      <img src="~/assets/images/png/avatar.png" alt="" />
      <div class="contact__status">
        <div class="contact__status-online" />
      </div>
    </div>
    <div class="contact__info">
      <h3>Yaroslav</h3>
      <span>@Zhaldak_Yaroslav</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  &__image {
    width: 64px;
    height: 64px;
    position: relative;
    margin-right: 1.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fdfdfd;

    &-online {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #007b29;
    }

    &-offline {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #d9d9d9;
    }
  }

  &__info {
    h3 {
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 20px;
      margin-bottom: 0.4rem;
    }

    span {
      color: #111111;
      opacity: 0.48;
      font-size: 1.3rem;
      line-height: 16px;
    }
  }
}
</style>
