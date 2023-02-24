<template>
  <div class="chat-catalog" :class="`${showMenu ? 'active' : ''}`">
    <div class="chat-catalog__menu-btn" :class="showMenu ? 'active' : ''">
      <button @click="handleShowMenuStatus(!showMenu)">
        <CategorySvg />
      </button>
    </div>

    <div class="chat-catalog__menu-close" :class="{ active: !showMenu }">
      <CatalogCategoryTabs />
    </div>

    <div class="chat-catalog__menu-open" :class="{ active: showMenu }">
      <CatalogContent
        title="Projekt Information"
        :isInformation="true"
        :information_inputs="information_inputs"
      >
        <NoteLockSvg slot="logo" />
      </CatalogContent>

      <CatalogContent title="Katalog" :isInformation="false">
        <FolderOpenSvg slot="logo" />
      </CatalogContent>
    </div>
  </div>
</template>

<script>
import { CategorySvg, NoteLockSvg, FolderOpenSvg } from 'assets/images/svg'
import CatalogCategoryTabs from '@/modules/chat/components/chat-catalog/catalog-category/CatalogCategoryTabs.vue'
import CatalogContent from '@/modules/chat/components/chat-catalog/catalog/CatalogContent.vue'
export default {
  components: {
    CatalogContent,
    CatalogCategoryTabs,
    CategorySvg,
    NoteLockSvg,
    FolderOpenSvg
  },
  data() {
    return {
      showMenu: true,
      information_inputs: [{ title: 'Informationen für Darsteller' }]
    }
  },

  methods: {
    handleShowMenuStatus(status) {
      this.showMenu = status
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-catalog {
  max-width: 72px;
  padding: 1.6rem;
  transition: max-width 0.5s, min-width 0.5s;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 0;

  &::-webkit-scrollbar {
    width: 0;
  }

  &.active {
    min-width: 305px;
    max-width: 384px;

    @media (max-width: 1440px) {
      max-width: 305px;
    }
  }

  &__menu-open {
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;

    &.active {
      opacity: 1;
      transition: opacity 0.3s;
      pointer-events: auto;
    }
  }

  &__menu-close {
    position: absolute;
    right: 1.6rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0s;

    &.active {
      opacity: 1;
      transition: opacity 0.3s;
      transition-delay: 0.4s;
      pointer-events: auto;
    }
  }

  &__menu-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    &.active {
      button {
        background-color: rgba(111, 111, 111, 0.08);
      }
    }
    button {
      border: 0;
      padding: 0.8rem;
      background-color: #fff;
      border-radius: 8px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #111111;
        color: #fff;
      }
    }
  }
}
</style>
