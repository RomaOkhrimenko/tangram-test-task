<template>
  <div class="project-input" :class="`${isOpen ? 'open' : ''}`">
    <InputDropdown :config="{ options }">
      <div
        slot="input"
        class="project-input__field"
        @click="handleOpenInput(!isOpen)"
      >
        <span>{{ title }}</span>
        <b :class="`${!options.length ? 'disable' : ''}`"
          >({{ options.length }})</b
        >
        <ArrowRightSvg />
      </div>

      <div slot="options" class="project-input-dropdown">
        <div v-for="item in options" class="project-input-dropdown__option">
          <div><span>March 2019</span> <span>28 Marz 2022</span></div>
          <img :src="item.img" alt="" />
        </div>
      </div>
    </InputDropdown>
  </div>
</template>

<script>
import { ArrowRightSvg } from '~/assets/images/svg'
import InputDropdown from '@/components/ui/InputDropdown.vue'
export default {
  components: {
    ArrowRightSvg,
    InputDropdown
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    handleOpenInput(status) {
      if (this.isInformation) return
      this.isOpen = status
    }
  },
  created() {
    console.log(this.options)
  }
}
</script>

<style lang="scss" scoped>
.project-input {
  margin-bottom: 1.6rem;

  &.open {
    .project-input__field {
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

    span {
      font-size: 1.7rem;
      line-height: 20px;
      margin-right: 0.8rem;
    }

    b {
      font-size: 1.7rem;
      line-height: 20px;
      &.disable {
        opacity: 0.24;
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

    &__option {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 1.6rem;
      margin-bottom: 1.6rem;
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
