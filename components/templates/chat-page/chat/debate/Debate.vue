<template>
  <div class="debate" @click="handleDebateStatus(true)">
    <MessageChatSvg />
    <span>Debatte</span>
  </div>
</template>

<script>
import { MessageChatSvg } from '~/assets/images/svg'
import { mapMutations } from 'vuex'
export default {
  components: { MessageChatSvg },

  methods: {
    ...mapMutations('chat', ['handleDebateStatus'])
  }
}
</script>

<style lang="scss" scoped>
.debate {
  display: flex;
  align-items: center;
  padding: 0.8rem 2.4rem 0.8rem 1.6rem;
  background: rgba(0, 122, 255, 0.08);
  border-radius: 20px;
  color: #007aff;
  cursor: pointer;
  svg {
    margin-right: 0.8rem;
  }

  span {
    font-size: 1.3rem;
    line-height: 16px;
    font-weight: 600;
  }
}
</style>
