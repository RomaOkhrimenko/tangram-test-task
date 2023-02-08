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
          >
            <div v-if="!isInformation">
              <CatalogProjectFilterInput
                v-for="(item, index) in filters"
                :key="index"
                :title="item.title"
                :isChecked="index === checked"
                :id="index"
                @handleFilterOption="handleFilterOption"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isInformation">
        <CatalogInputProject
          v-for="(input, index) in project_inputs"
          :key="index"
          :title="input.title"
          :items="input.items"
        />
      </div>

      <div v-if="isInformation">
        <CatalogInputInformation
          v-for="(input, index) in information_inputs"
          :key="index"
          :title="input.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogInputProject from '@/components/templates/chat-page/chat-catalog/catalog-input/CatalogInputProject.vue'
import { ArrowDownFillSvg } from '~/assets/images/svg'
import CatalogProjectFilterInput from '~/components/templates/chat-page/chat-catalog/catalog-input/CatalogProjectFilterInput.vue'
import CatalogInputInformation from '~/components/templates/chat-page/chat-catalog/catalog-input/CatalogInputInformation.vue'
export default {
  components: {
    CatalogProjectFilterInput,
    CatalogInputInformation,
    CatalogInputProject,
    ArrowDownFillSvg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    information_inputs: {
      type: Array,
      required: false
    },
    project_inputs: {
      type: Array,
      required: false
    },
    isInformation: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      option: '',
      isShowFilter: false,
      checked: 0,
      filters: [{ title: 'Auftragnehmer' }, { title: 'Auftraggeber' }]
    }
  },
  methods: {
    handleShowFilter(status) {
      this.isShowFilter = status
    },
    handleFilterOption(obj) {
      this.checked = obj.id
      this.option = obj.title
    }
  },
  mounted() {
    this.option = this.filters[0].title
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
        width: 204px;
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
          margin-left: auto;
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
        background-color: #fff;
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s;

        &.active {
          opacity: 1;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>
