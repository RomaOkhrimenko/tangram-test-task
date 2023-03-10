<template>
  <div
    class="project-status"
    :class="{ active: isShowOption }"
    @mouseover="handleShowOption(true)"
    @mouseleave="handleShowOption(false)"
  >
    <div
      class="project-status__container"
      :class="{ close: status === 'closed', active: isShowOption }"
    >
      <UnlockSvg v-if="status === 'offene'" />
      <LockSvg v-if="status === 'closed'" />
      <span>Offenes Projekt</span>
      <ThreeVerticalDotSvg v-if="!isShowOption" />
      <CloseCircle v-if="isShowOption" />
    </div>

    <div class="project-status-menu" :class="isShowOption ? 'show' : ''">
      <div class="project-status-menu__title">
        <h3>Projekt-Status</h3>
      </div>

      <ProjectStatusOption
        :status="status === 'offene'"
        @handleChosenStatus="handleChosenStatus"
        :name="'offene'"
      >
        <div slot="status">
          <UnlockSvg />
          <span>Offene</span>
        </div>
      </ProjectStatusOption>

      <ProjectStatusOption
        :status="status === 'closed'"
        @handleChosenStatus="handleChosenStatus"
        :name="'closed'"
      >
        <div slot="status">
          <LockSvg />
          <span>Closed</span>
        </div>
      </ProjectStatusOption>
    </div>
  </div>
</template>

<script>
import {
  UnlockSvg,
  MessageDangerSvg,
  ThreeVerticalDotSvg,
  LockSvg,
  CloseCircle,
  CheckSvg
} from 'assets/images/svg'
import ProjectStatusOption from '@/modules/chat/components/messages/project-status/ProjectStatusOption.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    ProjectStatusOption,
    UnlockSvg,
    MessageDangerSvg,
    ThreeVerticalDotSvg,
    LockSvg,
    CloseCircle,
    CheckSvg
  },

  data() {
    return {
      status: 'offene',
      isShowOption: true
    }
  },

  methods: {
    ...mapMutations('chat', ['handleClosedProjectModalStatus']),
    handleShowOption(status) {
      this.isShowOption = status
    },
    handleChosenStatus(status) {
      if (status === 'closed') {
        this.handleClosedProjectModalStatus(true)
      }
      this.status = status
    }
  }
}
</script>

<style lang="scss" scoped>
.project-status {
  position: relative;

  &.active {
    &:before {
      content: '';
      position: absolute;
      height: 2.4rem;
      bottom: 100%;
      width: 100%;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    background-color: rgba(0, 122, 255, 0.08);
    border-radius: 20px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    & > svg,
    & > span {
      color: #007aff;
    }

    &.active {
      background-color: #007aff;

      & > svg,
      & > span {
        color: #fff;
      }
    }

    &.close {
      background-color: #111;
      & > svg,
      & > span {
        color: #fff;
      }
    }

    & > svg {
      &:first-child {
        margin-right: 0.8rem;
      }
    }

    & > span {
      margin-left: 0.8rem;
      margin-right: 1.6rem;
      font-size: 1.3rem;
      line-height: 16px;
      font-weight: 600;
    }
  }

  &-menu {
    position: absolute;
    bottom: calc(100% + 2.4rem);
    width: 100%;
    left: 0;

    background: #fff;
    box-shadow: 0 8px 16px #11111129;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.3s;

    &.show {
      opacity: 1;
      pointer-events: auto;
    }

    &__title {
      color: #111;
      padding: 1.6rem;
      font-size: 1.3rem;
      line-height: 16px;
    }

    &__option {
      padding: 0.8rem 1.6rem;
      transition: background-color 0.3s;

      &.active {
        background-color: #007aff;
        label {
          color: #fff;
        }

        .checkmark {
          border: 2px solid #fff;

          svg {
            opacity: 1;
          }
        }
      }
      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #007aff;
        cursor: pointer;
      }

      div {
        display: flex;
        align-items: center;

        svg {
          margin-right: 1.6rem;
          transition: color 0.3s;
        }

        span {
          font-size: 1.3rem;
          line-height: 16px;
          font-weight: 600;
          transition: color 0.3s;
        }
      }

      .checkmark {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #007aff;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          transition: opacity 0.3s;
          opacity: 0;
        }
      }
    }
  }
}
</style>
