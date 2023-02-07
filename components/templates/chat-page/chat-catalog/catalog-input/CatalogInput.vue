<template>
  <div
    class="catalog-input"
    :class="`${isInformation ? 'information' : ''} ${isOpen ? 'open' : ''}`"
  >
    <div class="catalog-input__field" @click="handleOpenInput(!isOpen)">
      <span>{{ title }}</span>
      <b v-if="!isInformation" :class="`${!items.length ? 'disable' : ''}`"
        >({{ items.length }})</b
      >
      <ArrowRightSvg />
    </div>
    <div
      v-if="!isInformation"
      class="catalog-input-dropdown"
      :class="`${isOpen ? 'open' : ''}`"
    >
      <img src="~/assets/images/jpg/kitchen.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import { ArrowRightSvg } from '~/assets/images/svg'
export default {
  components: {
    ArrowRightSvg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: []
    },
    isInformation: {
      type: Boolean,
      required: true
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
  }
}
</script>

<style lang="scss" scoped>
.catalog-input {
  margin-bottom: 1.6rem;
  &.information {
    .catalog-input__field {
      svg {
        opacity: 0.24;
      }
    }
  }

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
    max-height: 0;
    background-color: #fff;
    transition: max-height 0.5s;
    overflow: hidden;

    &.open {
      max-height: 1000px;
      transition: max-height 0.5s;
    }
  }
}
</style>
