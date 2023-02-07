<template>
  <div class="chat-avatar">
    <img src="~/assets/images/png/avatar.png" alt="User" />

    <div class="chat-avatar__status">
      <div v-if="status === 'online'" class="chat-avatar__status-online" />
      <div v-else class="chat-avatar__status-offline" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // large: {
    //   type: Boolean,
    //   required: true,
    // }
    status: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-avatar {
  position: relative;
  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
  }

  //&.large {
  //  img {
  //    width: 64px;
  //    height: 64px;
  //  }
  //
  //  .chat-avatar__status {
  //    width: 20px;
  //    height: 20px;
  //
  //    &-online {
  //      width: 12px;
  //      height: 12px;
  //    }
  //  }
  //}

  &__status {
    position: absolute;
    bottom: -0.3rem;
    right: 0.3rem;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fdfdfd;

    &-online {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #007b29;
    }

    &-offline {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #d9d9d9;
    }
  }
}
</style>

function increment() { setState((prev) => prev + 1)) setState(state) }
