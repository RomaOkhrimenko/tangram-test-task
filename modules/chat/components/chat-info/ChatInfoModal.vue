<template>
  <div class="chat-info-modal">
    <ChatInfoTabHeader v-if="tab !== 'main'" @handleTab="handleTab" />
    <ChatInfoMain
      v-if="tab === 'main'"
      @handleShowChatInfo="handleShowChatInfo"
      @handleTab="handleTab"
    />
    <ProjectInformaionTab v-if="tab === 'information'" />
    <ProjectCatalogTab v-if="tab === 'catalog'" />
    <ProjectStatusTab v-if="tab === 'project-status'" />
    <ChatSettings v-if="tab === 'settings'" :show-settings="true" />
  </div>
</template>

<script>
import {
  CloseSvg,
  FolderOpenSvg,
  NoteLockSvg,
  ShareSvg,
  SettingEmpty
} from 'assets/images/svg'
import ProjectInformaionTab from '@/modules/chat/components/chat-info/tabs/ProjectInformaionTab.vue'
import ChatInfoMain from '@/modules/chat/components/chat-info/tabs/ChatInfoMain.vue'
import ChatInfoTabHeader from '@/modules/chat/components/chat-info/tabs/ChatInfoTabHeader.vue'
import ProjectCatalogTab from '@/modules/chat/components/chat-info/tabs/ProjectCatalogTab.vue'
import ChatSettings from '@/modules/chat/components/messages/messages-header/ChatSettings.vue'
import ProjectStatusTab from '@/modules/chat/components/chat-info/tabs/ProjectStatusTab.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    ProjectStatusTab,
    ChatSettings,
    ProjectCatalogTab,
    ChatInfoTabHeader,
    ChatInfoMain,
    ProjectInformaionTab,
    CloseSvg,
    FolderOpenSvg,
    NoteLockSvg,
    ShareSvg,
    SettingEmpty
  },
  data() {
    return {
      tab: 'main'
    }
  },

  methods: {
    handleTab(tab) {
      this.tab = tab
    },
    handleShowChatInfo(bool) {
      this.$emit('handleShowChatInfo', bool)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-info-modal {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  background-color: #fff;
  max-width: 448px;
  width: 444px;
  height: 100%;
  margin: 0 2rem;
  border-radius: 8px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 554px) {
    width: 355px;
  }

  @media (max-width: 350px) {
    width: 310px;
  }

  .chat-settings {
    margin-top: 3.2rem;
    padding: 0 1rem;
    position: static;
    right: 0;
    top: 0;
    width: 100%;
    box-shadow: none;
    border: 0;
    overflow-y: auto;
    max-height: 70vh;
  }
}
</style>
