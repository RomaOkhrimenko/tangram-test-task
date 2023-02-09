<template>
  <div class="input-information" :class="`${isOpen ? 'open' : ''}`">
    <InputDropdown :isExpanded="isOpen">
      <div
        slot="input"
        class="input-information__field"
        @click="handleOpenInput(!isOpen)"
      >
        <span>{{ title }}</span>
        <ArrowRightSvg />
      </div>

      <div slot="options" class="input-information-dropdown">
        <div class="input-information-dropdown__container">
          <div class="input-information__main">
            <div class="location" @click="onClick">
              <MapMark /> <span>Platz 24 60594 Frankfurt am Main</span>
            </div>

            <div class="input-information__main-time">
              <div>
                <CalendarSvg />
                Tue, 3 Aug 2021
              </div>
              <div>
                <WatchSvg />
                2:45PM
              </div>
            </div>
          </div>
          <div class="input-information__client">
            <div class="title">
              <span>Name der Auftraggeber:</span>
              <b>Thomas Müller</b>
            </div>
            <div class="location">
              <MapMark /> <span>Platz 24 60594 Frankfurt am Main</span>
            </div>
            <div class="phone">
              <PhoneSvg />
              <span>0157 00 00 00 00</span>
            </div>
          </div>
          <div class="input-information__manager">
            <div class="title">
              <span>Auftragsverwalter::</span>
              <b>Mats Hummels</b>
            </div>

            <div class="phone">
              <PhoneSvg />
              <span>0157 00 00 00 00</span>
            </div>
          </div>
        </div>
      </div>
    </InputDropdown>
  </div>
</template>

<script>
import {
  ArrowRightSvg,
  MapMark,
  CalendarSvg,
  WatchSvg,
  PhoneSvg
} from '~/assets/images/svg'
import InputDropdown from '@/components/ui/InputDropdown.vue'
export default {
  components: {
    InputDropdown,
    ArrowRightSvg,
    MapMark,
    CalendarSvg,
    WatchSvg,
    PhoneSvg
  },
  props: {
    title: {
      type: String,
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
      this.isOpen = status
    },
    onClick() {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.input-information {
  margin-bottom: 1.6rem;

  &.open {
    .input-information__field {
      border-radius: 8px 8px 0 0;
      svg {
        transform: rotate(90deg);
        opacity: 1;
      }
    }
  }
  &__field {
    width: 100%;
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
      opacity: 0.22;
      transition: transform 0.3s, opacity 0.3s;
    }
  }

  &-dropdown {
    display: flex;
    overflow: hidden;

    width: 100%;
    background-color: #fff;
    border-radius: 0 0 8px 8px;

    svg {
      color: #d9d9d9;
    }
    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1.6rem 2.4rem;
      border-top: 1px solid #d9d9d9;
    }
  }

  &__main {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 1.6rem;
    .location {
      margin-bottom: 1.6rem;
    }
    &-time {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        line-height: 16px;
        svg {
          margin-right: 0.8rem;
        }
        &:first-child {
          margin-right: 2.4rem;
        }
      }
    }
  }

  &__client {
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #d9d9d9;
    .location {
      margin-bottom: 0.8rem;
      span {
        font-size: 1.3rem;
        line-height: 16px;
        color: #007aff;
      }
    }
  }

  .location {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }

    span {
      font-size: 1.3rem;
      line-height: 16px;
    }
  }

  .phone {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.8rem;
    }

    span {
      color: #007aff;
      font-size: 1.3rem;
      line-height: 16px;
    }
  }

  .title {
    margin-bottom: 1.6rem;
    span {
      font-size: 1.3rem;
      line-height: 16px;
      margin-right: 0.8rem;
    }
    b {
      font-size: 1.3rem;
      line-height: 16px;
    }
  }
}
</style>
