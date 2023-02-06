<template>
  <div class="catalog">
    <div class="catalog-project">
      <div class="catalog-project__header">
        <slot name="logo"></slot>
        {{ title }}

        <div
          v-if="!isInformation"
          @mouseover="handleShowFilter(true)"
          @mouseleave="handleShowFilter(false)"
          class="catalog-project__header-options"
        >
          <span>{{ option }}</span>
          <ArrowDownFillSvg />

          <div
            class="catalog-project__header-filter"
            :class="`${isShowFilter ? 'active' : ''}`"
          ></div>
        </div>
      </div>
      <CatalogInput
        v-for="input in data"
        :title="input.title"
        :isInformation="isInformation"
        :items="input.items"
      />
    </div>
  </div>
</template>

<script>
import CatalogInput from '@/components/templates/chat-page/chat-catalog/catalog-input/CatalogInput.vue'
import { ArrowDownFillSvg } from '~/assets/images/svg'
export default {
  components: {
    CatalogInput,
    ArrowDownFillSvg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isInformation: {
      type: Boolean,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      option: 'Auftragnehmer',
      isShowFilter: Boolean
    }
  },
  methods: {
    handleShowFilter(status) {
      this.isShowFilter = status
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  margin-top: 4rem;
  margin-bottom: 4.8rem;
  &-project {
    &__header {
      display: flex;
      align-items: center;
      font-size: 2rem;
      line-height: 24px;
      color: #111;
      font-weight: 700;
      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem;

      border-bottom: 1px solid #d9d9d9;

      svg {
        margin-right: 0.8rem;
      }

      &-options {
        margin-left: auto;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;

        &:hover {
          svg {
            transform: rotate(180deg);
          }
        }

        span {
          color: #111111;
          text-align: right;
          font-size: 1.7rem;
          line-height: 20px;
          font-weight: 500;
          margin-right: 0.8rem;
        }
        svg {
          transition: transform 0.3s;
        }
      }
      &-filter {
        position: absolute;
        top: 100%;
        border-radius: 8px;
        width: 100%;
        height: 20px;
        padding: 1.2rem 1.6rem;
        background-color: #fff;
        z-index: 100;
        opacity: 0;

        transition: opacity 0.3s;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
