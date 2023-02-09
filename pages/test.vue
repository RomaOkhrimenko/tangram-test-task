<template>
  <div>
    <ChatCongratiulationsAlert />
  </div>
</template>

<script>
import InputDropdown from '@/components/ui/InputDropdown.vue'
import ProjectRatingModals from '@/components/templates/modals/ProjectRatingModals.vue'
import ChatCongratiulationsAlert from '@/components/templates/chat-page/alerts/ChatCongratiulationsAlert.vue'

export default {
  components: { ChatCongratiulationsAlert, ProjectRatingModals, InputDropdown }
}
</script>

<style lang="scss" scoped></style>
