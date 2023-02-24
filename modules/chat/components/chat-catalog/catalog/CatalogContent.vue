<template>
  <div class="catalog">
    <div class="catalog-project">
      <div class="catalog-project__header">
        <slot name="logo"></slot>
        <h3>{{ title }}</h3>

        <div
          v-if="!isInformation"
          @click="handleShowFilter(!isShowFilter)"
          class="catalog-project__header-options"
          :class="{ active: isShowFilter }"
        >
          <span>{{ option }}</span>
          <ArrowDownFillSvg />

          <div
            class="catalog-project__header-filter"
            :class="{ active: isShowFilter }"
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
      <InputDropdown />

      <div v-if="!isInformation" class="catalog-project__wrapper">
        <CatalogInputProject
          v-for="(input, index) in project_inputs"
          :key="index"
          :title="input.title"
          :options="input.options"
          :id="index"
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
import CatalogInputProject from '@/modules/chat/components/chat-catalog/catalog-input/CatalogInputProject.vue'
import { ArrowDownFillSvg } from 'assets/images/svg'
import CatalogProjectFilterInput from '@/modules/chat/components/chat-catalog/catalog-input/CatalogProjectFilterInput.vue'
import CatalogInputInformation from '@/modules/chat/components/chat-catalog/catalog-input/CatalogInputInformation.vue'
import InputDropdown from '@/components/ui/InputDropdown.vue'
export default {
  components: {
    CatalogProjectFilterInput,
    CatalogInputInformation,
    CatalogInputProject,
    ArrowDownFillSvg,
    InputDropdown
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
      filters: [{ title: 'Auftragnehmer' }, { title: 'Auftraggeber' }],
      project_inputs: [
        {
          title: 'Title',
          options: [
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            }
          ]
        },
        {
          title: 'title 2',
          options: [
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleShowFilter(status) {
      this.isShowFilter = status
    },
    checkFilterClick(e) {
      if (!e.target.closest('.catalog-project__header-options')) {
        this.isShowFilter = false
      }
    },
    handleFilterOption(obj) {
      setTimeout(() => (this.checked = obj.id), 0)
      this.option = obj.title
    }
  },
  watch: {
    isShowFilter() {
      if (this.isShowFilter) {
        window.addEventListener('click', this.checkFilterClick)
      } else {
        window.removeEventListener('click', this.checkFilterClick)
      }
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
    &__wrapper {
      height: 100%;
      overflow: auto;
    }
    &__header {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      font-size: 2rem;
      line-height: 24px;
      color: #111;
      font-weight: 700;
      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem;
      border-bottom: 1px solid #d9d9d9;

      @media (max-width: 1440px) {
        font-size: 1.8rem;
      }

      svg {
        margin-right: 0.8rem;
        flex: none;
      }

      h3 {
        //min-width: 220px;
        white-space: nowrap;
      }

      &-options {
        margin-left: auto;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        &.active {
          svg {
            transform: rotate(180deg) !important;
          }
        }
        &:hover {
          & > span,
          & > svg {
            color: #007aff;
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
          transition: color 0.3s;

          @media (max-width: 1440px) {
            font-size: 1.2rem;
            margin-right: 0.3rem;
          }
        }
        svg {
          transition: transform 0.3s, color 0.3s;

          @media (max-width: 1440px) {
            transform: scale(0.9);
          }
        }
      }
      &-filter {
        position: absolute;
        top: 100%;
        border-radius: 8px;
        background-color: #fff;
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        width: 204px;
        right: 0;

        &.active {
          opacity: 1;
          pointer-events: auto;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  @keyframes k-arrow-down {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>
