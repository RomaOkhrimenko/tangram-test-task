<template>
  <div class="message-input">
    <div class="message-input-container">
      <div class="message-input-top">
        <TextEditor @editText="handleTextStyle" :editor="editor" />

        <div class="message-input-options">
          <div class="message-input-report">
            <MessageDangerSvg />
            Vorfall Melden
          </div>

          <ProjectStatus />
        </div>
      </div>
      <div class="message-input-bottom">
        <Microphone
          @handleMicrophoneStatus="handleMicrophoneStatus"
          :microphoneStatus="microphoneStatus"
        />
        <div class="message-input__field">
          <div
            class="hide"
            :class="{
              animate: microphoneStatus === 'on' || microphoneStatus === 'stop'
            }"
          ></div>
          <editor-content
            class="editor-content"
            :editor="editor"
            v-model="message"
            :class="{
              lowercase: format === 'lowercase',
              uppercase: format === 'uppercase'
            }"
          />
          <!--          <input-->
          <!--            v-model="message"-->
          <!--            type="text"-->
          <!--            placeholder="Beginnen Sie mit dem Schreiben oder ziehen Sie Dateien in Ihre Notiz"-->
          <!--          />-->
        </div>
        <div class="message-input-attachment">
          <PaperClipSvg />
        </div>
        <div class="message-input-sent">
          <SentMessageSvg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SentMessageSvg,
  PaperClipSvg,
  MicrophoneSlashSvg,
  PlusSvg,
  MessageDangerSvg,
  WorkMicrophoneSvg
} from 'assets/images/svg'
import { Editor, EditorContent } from '@tiptap/vue-2'
import ProjectStatus from '@/modules/chat/components/messages/project-status/ProjectStatus.vue'
import Microphone from '@/modules/chat/components/messages/message-input/Microphone.vue'
import TextEditor from '@/modules/chat/components/messages/text-editor/TextEditor.vue'

import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import StarterKit from '@tiptap/starter-kit'
import { CustomUppercaseText } from '@/modules/chat/helpers/custom-tiptap-extensions'
import { Placeholder } from '@tiptap/extension-placeholder'
export default {
  components: {
    TextEditor,
    Microphone,
    ProjectStatus,
    SentMessageSvg,
    PaperClipSvg,
    MicrophoneSlashSvg,
    MessageDangerSvg,
    PlusSvg,
    WorkMicrophoneSvg,
    EditorContent
  },

  data() {
    return {
      message: '',
      microphoneStatus: 'off',
      editor: null,
      format: 'normal'
    }
  },
  methods: {
    handleMicrophoneStatus(status) {
      this.microphoneStatus = status
    },

    handleTextStyle(style) {
      if (style === 'bold') {
        this.editor
          .chain()
          .focus()
          .toggleBold()
          .run()
      }
      if (style === 'italic') {
        this.editor
          .chain()
          .focus()
          .toggleItalic()
          .run()
      }
      if (style === 'baseline-center') {
        this.editor
          .chain()
          .focus()
          .setTextAlign('center')
          .run()
      }
      if (style === 'baseline-justify') {
        this.editor
          .chain()
          .focus()
          .setTextAlign('justify')
          .run()
      }
      if (style === 'baseline-left') {
        this.editor
          .chain()
          .focus()
          .setTextAlign('left')
          .run()
      }
      if (style === 'baseline-right') {
        this.editor
          .chain()
          .focus()
          .setTextAlign('right')
          .run()
      }
      if (style === 'underline') {
        this.editor
          .chain()
          .focus()
          .toggleUnderline()
          .run()
      }
      if (style === 'strike-trough') {
        this.editor
          .chain()
          .focus()
          .toggleStrike()
          .run()
      }
      if (style === 'bullet-list') {
        this.editor
          .chain()
          .focus()
          .toggleBulletList()
          .run()
      }
      if (style === 'number-list') {
        this.editor
          .chain()
          .focus()
          .toggleOrderedList()
          .run()
      }
      if (style === 'quote') {
        this.editor
          .chain()
          .focus()
          .toggleBlockquote()
          .run()
      }
      if (style === 'uppercase') {
        this.editor
          .chain()
          .focus()
          .toggleUppercase({ textTransform: 'uppercase' })
          .run()
      }
      if (style === 'lowercase') {
        this.editor
          .chain()
          .focus()
          .toggleUppercase({ textTransform: 'lowercase' })
          .run()
      }
      if (style === 'normal-format') {
        this.editor
          .chain()
          .focus()
          .toggleUppercase({ textTransform: 'normal' })
          .run()
      }
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Text,
        StarterKit,
        Underline,
        Strike,
        CustomUppercaseText,
        Placeholder.configure({
          placeholder: 'My Custom Placeholder'
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph']
        })
      ],
      content: `<div></div>`
    })
  }
}
</script>

<style lang="scss" scoped>
.message-input {
  width: 100%;
  margin: 0 auto 3.2rem auto;

  &-container {
    margin: 0 3.2rem;
    background-color: #fff;
    box-shadow: 0 8px 16px #11111129;
    border-radius: 20px;
    padding: 0.8rem;

    @media (max-width: 554px) {
      margin: 0 1rem;
    }
  }
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #dcdcdc;

    .text-editor__states {
      overflow-y: auto;
      max-width: 300px;
    }
  }

  &-options {
    display: flex;
    align-items: center;
  }

  &-report {
    display: flex;
    align-items: center;
    opacity: 0.4;
    color: #111111;
    font-size: 1.3rem;
    line-height: 16px;
    padding: 0.8rem 3.2rem 0.8rem 1.6rem;
    margin-right: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;

    svg {
      margin-right: 0.8rem;
    }

    &:hover {
      background-color: #f5f5f5;
      opacity: 1;
    }
    @media (max-width: 994px) {
      display: none;
    }
  }

  .project-status {
    @media (max-width: 994px) {
      display: none;
    }
  }

  &-bottom {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;

    .record {
      @media (max-width: 554px) {
        margin-right: 0.5rem;
        transform: scale(0.8);
        z-index: 10;
      }
    }
  }

  &__field {
    width: 100%;
    margin-right: 1rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-height: 300px;
    overflow-y: auto;
    @media (max-width: 554px) {
      margin-right: 0.5rem;
    }

    .lowercase {
      text-transform: lowercase !important;
    }

    .uppercase {
      text-transform: uppercase !important;
    }

    .hide {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: #fff;
      width: 0;
      transition: width 1s;
      z-index: 1;

      &.animate {
        width: 100%;
      }
    }
  }

  &-attachment {
    color: #007aff;
    background-color: #007aff14;
    padding: 0.7rem;
    border: 1px solid #007aff;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
    margin-right: 1.6rem;

    &:hover {
      transform: rotate(135deg);
      background-color: #007aff;
      color: #fff;
    }

    @media (max-width: 554px) {
      transform: scale(0.8);
      margin-right: 0.3rem;
    }
  }

  &-sent {
    color: #fff;
    background-color: #007aff;
    border-radius: 50%;
    padding: 1.1rem 0.9rem 1.1rem 1.3rem;
    cursor: pointer;

    @media (max-width: 554px) {
      transform: scale(0.8);
    }
  }

  .editor-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
