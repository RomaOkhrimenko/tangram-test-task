<template>
  <div class="contacts-header">
    <div class="contacts-header-top">
      <div class="contacts-header-category">
        <button
          @click="handleTab('chat')"
          :class="currentTab === 'chat' ? 'active' : ''"
        >
          Chat
        </button>
        <div class="contacts-header-category__line" />
        <button
          @click="handleTab('contacts')"
          :class="currentTab === 'contacts' ? 'active' : ''"
        >
          Kontakte
        </button>
      </div>
      <div>
        <button @click="handleShowMenu" class="contacts-header-btn">
          <BurgerMenuSvg />
        </button>
      </div>
    </div>
    <div class="contacts-header-bottom">
      <ContactsInput />
    </div>
  </div>
</template>

<script>
import ContactsInput from '@/components/templates/chat-page/chat-navigation/contacts/contacts-header/ContactsInput.vue'
import { BurgerMenuSvg } from '~/assets/images/svg'
export default {
  components: { ContactsInput, BurgerMenuSvg },

  props: {
    currentTab: {
      type: String,
      required: true
    }
  },

  methods: {
    handleShowMenu() {
      console.log('click')
      this.$emit('handleShowMenu', true)
    },

    handleTab(tab) {
      this.$emit('handleTab', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-header {
  padding: 2.3rem 1.6rem;
  &-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }

  &-category {
    display: flex;
    align-items: center;

    &__line {
      height: 16px;
      width: 1px;
      background-color: #111111;
      margin: 0 1.2rem;
    }

    button {
      font-size: 1.3rem;
      line-height: 32px;
      border: none;
      margin-top: auto;
      transition: margin-top 0.3s, font-size 0.3s;

      &.active {
        font-size: 2rem;
        font-weight: 700;
        line-height: 32px;
        margin-top: 0;
      }
    }
  }

  &-btn {
    padding: 0.8rem;
    background-color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #111111;
      color: #fff;
    }
  }
}
</style>
