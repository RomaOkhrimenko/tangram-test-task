<template>
  <div class="catalog-input" :class="`${isOpen ? 'open' : ''}`">
    <InputDropdown :config="{ options }" :isExpanded="isOpen">
      <div
        slot="input"
        class="catalog-input__field"
        @click="handleOpenInput(!isOpen)"
      >
        <span>{{ title }}</span>
        <b :class="`${!options.length ? 'disable' : ''}`"
          >({{ options.length }})</b
        >
        <ArrowRightSvg />
      </div>

      <div slot="options" class="catalog-input-dropdown">
        <div class="catalog-input-dropdown__header">
          <div class="catalog-input-dropdown__header-filters">
            <span class="active">Images</span>
            <span>Videos</span>
            <span>Files</span>
          </div>

          <div class="catalog-input-dropdown__header-input">
            <label :for="`catalog-input-file-${id}`">
              <span>{{ fileName }}</span>
              <PlusSvg />
            </label>
            <input
              @change="handleInputFile"
              type="file"
              :id="`catalog-input-file-${id}`"
              hidden
            />
          </div>
        </div>
        <div v-for="item in options" class="catalog-input-dropdown__option">
          <div><span>March 2019</span> <span>28 Marz 2022</span></div>
          <img :src="item.img" alt="" />
        </div>
      </div>
    </InputDropdown>
  </div>
</template>

<script>
import { ArrowRightSvg, PlusSvg } from '~/assets/images/svg'
import InputDropdown from '@/components/ui/InputDropdown.vue'
import { cutString } from '@/utils/functions'
export default {
  components: {
    ArrowRightSvg,
    InputDropdown,
    PlusSvg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: [],
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      fileName: 'Zum Teilen hier ablegen'
    }
  },

  methods: {
    handleOpenInput(status) {
      if (this.isInformation) return
      this.isOpen = status
    },

    handleInputFile(e) {
      this.fileName = cutString(e.target.files[0].name, 20)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-input {
  margin-bottom: 1.6rem;

  &.open {
    .catalog-input__field {
      svg {
        transform: rotate(90deg);
      }
    }
  }
  &__field {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.2rem 2.4rem;
    background: #fff;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;

    @media (max-width: 1440px) {
      padding: 1.2rem 1.2rem;
    }

    span {
      font-size: 1.7rem;
      line-height: 20px;
      margin-right: 0.8rem;

      @media (max-width: 1440px) {
        font-size: 1.5rem;
        margin-right: 0.3rem;
      }
    }

    b {
      font-size: 1.7rem;
      line-height: 20px;
      &.disable {
        opacity: 0.24;
      }

      @media (max-width: 1440px) {
        font-size: 1.5rem;
      }
    }

    svg {
      margin-left: auto;
      transition: transform 0.3s;
    }
  }

  &-dropdown {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__header {
      padding-top: 1.6rem;
      margin-bottom: 1.6rem;
      &-filters {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5.6rem;
        font-size: 0.8rem;
        line-height: 10px;
        margin: 0 2.4rem 1.6rem;
        padding-bottom: 1.4rem;
        border-bottom: 1px solid #d9d9d9;

        @media (max-width: 1440px) {
          gap: 3.3rem;
        }

        span {
          cursor: pointer;
          position: relative;

          &.active {
            color: #007aff;

            &:before {
              content: '';
              position: absolute;
              bottom: -1.4rem;
              width: 5.8rem;
              height: 2px;
              background-color: #007aff;
              left: 0;

              @media (max-width: 1440px) {
                width: 100%;
              }
            }
          }
        }
      }

      &-input {
        label {
          background-color: rgba(111, 111, 111, 0.04);
          border-radius: 8px;
          margin: 0 1.6rem;
          padding: 1.4rem 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          span {
            font-size: 1.5rem;
            line-height: 19px;

            @media (max-width: 1440px) {
              font-size: 1.3rem;
            }
          }
        }
      }
    }

    &__option {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 1.6rem;
      margin-bottom: 1.6rem;

      &:last-child {
        padding-bottom: 1.6rem;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.1rem;

        span {
          font-size: 1rem;
          line-height: 13px;
          color: #606060;
        }
      }

      img {
        width: 100%;
        height: 144px;
        object-fit: cover;
        border-radius: 4px;
      }
    }
  }
}
</style>
