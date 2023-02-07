<template>
  <div class="chat-catalog" :class="`${showMenu ? 'active' : ''}`">
    <div class="chat-catalog__menu-btn" :class="showMenu ? 'active' : ''">
      <button @click="handleShowMenuStatus(!showMenu)">
        <CategorySvg />
      </button>
    </div>
    <CatalogCategoryTabs v-if="!showMenu" />
    <CatalogContent
      v-if="showMenu"
      title="Projekt Information"
      :isInformation="true"
      :data="information_inputs"
    >
      <NoteLockSvg slot="logo" />
    </CatalogContent>
    <CatalogContent
      v-if="showMenu"
      title="Katalog"
      :isInformation="false"
      :data="project_inputs"
    >
      <FolderOpenSvg slot="logo" />
    </CatalogContent>
  </div>
</template>

<script>
import { CategorySvg, NoteLockSvg, FolderOpenSvg } from '~/assets/images/svg'
import CatalogCategoryTabs from '@/components/templates/chat-page/chat-catalog/catalog-category/CatalogCategoryTabs.vue'
import CatalogContent from '@/components/templates/chat-page/chat-catalog/catalog/CatalogContent.vue'
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
      information_inputs: [{ title: 'Informationen für Darsteller' }],
      project_inputs: [
        { title: 'Planung', items: [] },
        { title: 'Auslieferung', items: [] },
        { title: 'Montage', items: [{}, {}, {}] }
      ]
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
  transition: max-width 0.5s;
  width: 100%;
  &.active {
    max-width: 384px;
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
