<template>
  <div class="project-information">
    <div class="project-information__container">
      <div class="project-information__main">
        <div class="location">
          <MapMark /> <span>Platz 24 60594 Frankfurt am Main</span>
        </div>

        <div class="project-information__main-time">
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
      <div class="project-information__client">
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
      <div class="project-information__manager">
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
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
.project-information {
  svg {
    transform: scale(1.1);
  }
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.6rem 2.4rem;
    flex-wrap: wrap;

    @media (max-width: 1440px) {
      padding: 1.6rem;
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
        flex-wrap: wrap;
        font-size: 1.4rem;
        line-height: 16px;
        svg {
          margin-right: 0.8rem;
        }
        &:first-child {
          margin-right: 2.4rem;

          @media (max-width: 1440px) {
            margin-right: 1.6rem;
          }
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
      font-size: 1.4rem;
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
      font-size: 1.4rem;
      line-height: 16px;
    }
  }

  .title {
    margin-bottom: 1.6rem;
    span {
      font-size: 1.4rem;
      line-height: 16px;
      margin-right: 0.8rem;
    }
    b {
      font-size: 1.4rem;
      line-height: 16px;
    }
  }
}
</style>
