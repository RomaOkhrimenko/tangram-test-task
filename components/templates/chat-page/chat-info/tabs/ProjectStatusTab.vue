<template>
  <div class="project-status">
    <ProjectStatusOption
      :status="status === 'offene'"
      @handleChosenStatus="handleStatus"
      :name="'offene'"
    >
      <div slot="status">
        <UnlockSvg />
        <span>Offene</span>
      </div>
    </ProjectStatusOption>

    <ProjectStatusOption
      :status="status === 'closed'"
      @handleChosenStatus="handleStatus"
      :name="'closed'"
    >
      <div slot="status">
        <UnlockSvg />
        <span>Offene</span>
      </div>
    </ProjectStatusOption>
  </div>
</template>

<script>
import ProjectStatusOption from '@/components/templates/chat-page/chat/project-status/ProjectStatusOption.vue'
import { UnlockSvg } from '~/assets/images/svg'

export default {
  components: { ProjectStatusOption, UnlockSvg },

  data() {
    return {
      status: 'offene'
    }
  },

  methods: {
    handleStatus(status) {
      this.status = status
    }
  }
}
</script>

<style lang="scss" scoped>
.project-status {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
