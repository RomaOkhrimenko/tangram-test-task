<template>
  <div
    class="dropdown"
    :class="{ expanded: isExpanded }"
    :style="computedStyles"
  >
    <slot name="input"></slot>

    <div v-expand="isExpanded" class="options expand">
      <slot name="options"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config', 'isExpanded'],
  data() {
    return {
      // optionsHeight: 0,
      // configOptions: [],
      // isExpanded: false
      // optionHeight: 60
    }
  },
  components: {},
  computed: {
    computedStyles: function() {
      return [
        // { '--options-height': this.optionsHeight + 'px' },
        // { '--options-height-neg': '-' + this.optionsHeight + 'px' },
        // { '--option-height': this.optionHeight + 'px' },
        { '--dropdown-width': '100%' },
        { '--dropdown-default-text-color': 'black' }
      ]
    }
  },
  directives: {
    expand: {
      inserted: function(el, binding) {
        if (binding.value !== null) {
          function calcHeight() {
            const currentState = el.getAttribute('aria-expanded')
            el.classList.add('u-no-transition')
            el.removeAttribute('aria-expanded')
            el.style.height = null
            console.log(el, el.clientHeight)
            el.style.height = el.clientHeight + 'px'
            el.setAttribute('aria-expanded', currentState)

            setTimeout(function() {
              el.classList.remove('u-no-transition')
            })
          }

          el.classList.add('expand')
          el.setAttribute('aria-expanded', binding.value ? 'true' : 'false')
          calcHeight()
          window.addEventListener('resize', calcHeight)
        }
      },
      update: function(el, binding) {
        if (el.style.height && binding.value !== null) {
          el.setAttribute('aria-expanded', binding.value ? 'true' : 'false')
        }
      }
    }
  },
  methods: {
    // setConfigData() {
    //   this.configOptions = this.config?.options
    // },
    // setOptionsHeight() {
    //   if (this.configOptions?.length) {
    //     this.optionsHeight = this.optionHeight * this.configOptions.length
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: var(--dropdown-width);
  position: relative;
  border: 1px solid transparent;
  border-radius: var(--main-el-border-radius);
  color: var(--dropdown-default-text-color);
  background: var(--dropdown-background-color);
  .dropdown-label-container {
    display: flex;
    width: 100%;
  }

  .options {
    width: 100%;
  }
}
.dropdown.expanded {
  background: var(--dropdown-expanded-color);
}

.expand {
  overflow: hidden;
  transition-property: height;
  transition-duration: 1s;

  &[aria-expanded='false'] {
    height: 0 !important;
  }
}
</style>
