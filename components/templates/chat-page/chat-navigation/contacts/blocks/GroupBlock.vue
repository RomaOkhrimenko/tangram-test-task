<template>
  <div class="group-block" :class="isActive ? 'active' : ''">
    <div class="group-block__info">
      <img src="~/assets/images/png/avatar.png" alt="Avatar" />

      <div class="group-block__info-desc">
        <h3>Thomas Muller</h3>
        <span>Ehrlichkeit ist nur eine Testrichtlinie</span>
      </div>
    </div>

    <div class="group-block__date">
      <span>12/5/21</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.group-block {
  padding: 1.6rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  &.active {
    background-color: #fff;
    box-shadow: 0px 8px 16px #11111129;
  }

  &__info {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 1.6rem;
    }

    &-desc {
      max-width: 184px;

      h3 {
        font-size: 1.3rem;
        line-height: 25px;
      }

      span {
        font-size: 1.1rem;
        line-height: 14px;
      }
    }
  }

  &__date {
    font-size: 1.1rem;
    line-height: 11px;
    margin-bottom: auto;
  }
}
</style>
