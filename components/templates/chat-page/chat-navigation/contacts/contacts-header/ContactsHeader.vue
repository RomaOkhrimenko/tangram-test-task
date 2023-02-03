<template>
  <div class="contacts-header">
    <div class="contacts-header-top">
      <div class="contacts-header-category">
        <button class="active">Chat</button>
        <div class="contacts-header-category__line" />
        <button>Kontakte</button>
      </div>
      <div>
        <button @click="handleShowMenu" class="contacts-header-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="menu" transform="translate(-684 -380)">
              <path id="Vector" d="M0,0H18" transform="translate(687 387)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
              <path id="Vector-2" data-name="Vector" d="M0,0H18" transform="translate(687 392)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
              <path id="Vector-3" data-name="Vector" d="M0,0H18" transform="translate(687 397)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
              <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(684 380)" fill="none" opacity="0"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="contacts-header-bottom">
      <ContactsInput />
    </div>
  </div>
</template>

<script>
import ContactsInput from "@/components/templates/chat-page/chat-navigation/contacts/contacts-header/ContactsInput.vue";

export default {
  components: {ContactsInput},

  methods: {
    handleShowMenu() {
      console.log('click')
      this.$emit('handleShowMenu', true)
    },
  },
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


      &.active {
        font-size: 2rem;
        font-weight: 700;
        line-height: 32px;
      }
    }
  }

  &-btn {
    padding: 0.8rem;
    background-color: #FFFFFF;
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
