<template>
  <div class="test">
    <div class="test__buttons">
      <button @click="handleClosedProjectModalStatus(true)">
        Closed Projekt
      </button>
      <Debate />
    </div>

    <div>
      <DebateMessage v-if="getDebateStatus" />
    </div>

    <div>
      <ChatCongratiulationsAlert />
    </div>

    <ModalWrapper
      :is-active="getClosedProjectModalStatus"
      @handleShowModal="handleClosedProjectModalStatus"
    >
      <ProjectRatingModals />
    </ModalWrapper>

    <div>
      <client-only>
        <tiptap-editor />
      </client-only>
    </div>
  </div>
</template>

<script>
import InputDropdown from '@/components/ui/InputDropdown.vue'
import ProjectRatingModals from '@/modules/chat/components/modals/ProjectRatingModals.vue'
import ChatCongratiulationsAlert from '@/modules/chat/components/alerts/ChatCongratiulationsAlert.vue'
import Debate from '@/modules/chat/components/messages/message-input/Debate.vue'
import DebateMessage from '@/modules/chat/components/messages/messages/DebateMessage.vue'
import { mapGetters, mapMutations } from 'vuex'
import ModalWrapper from '@/modules/chat/components/modals/ModalWrapper.vue'
import TiptapEditor from '@/modules/chat/components/tiptap-editor/TiptapEditor.vue'

export default {
  components: {
    ModalWrapper,
    DebateMessage,
    Debate,
    ChatCongratiulationsAlert,
    ProjectRatingModals,
    InputDropdown,
    TiptapEditor
  },

  data() {
    return {
      isShowCongratulations: false,
      isShowClosedProject: false,
      isSoMessage: false,
      content:
        '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>'
    }
  },

  computed: {
    ...mapGetters('chat', ['getDebateStatus', 'getClosedProjectModalStatus'])
  },

  methods: {
    ...mapMutations('chat', ['handleClosedProjectModalStatus'])
  }
}
</script>

<style lang="scss" scoped>
.test__buttons {
  display: flex;
  gap: 2rem;
  margin: 2rem;

  button {
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid #007aff;
    color: #fff;
    background-color: #007aff;
  }
}
</style>
