import Text from '@tiptap/extension-text'
import { Mark, mergeAttributes } from '@tiptap/core'

export const CustomUppercaseText = Mark.create({
  name: 'custom-uppercase',

  addOptions() {
    return {
      HTMLAttributes: {}
    }
  },

  addAttributes() {
    return {
      textTransform: {
        default: null,
        parseHTML: element =>
          element.getAttribute('data-textTransform') ||
          element.style.textTransform,
        renderHTML: attributes => {
          if (!attributes.textTransform) {
            return {}
          }

          return {
            'data-textTransform': attributes.textTransform,
            style: `text-transform: ${attributes.textTransform}`
          }
        }
      }
    }
  },
  parseHTML() {
    return [
      {
        tag: 'span'
      }
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ]
  },

  addCommands() {
    return {
      toggleUppercase: attributes => ({ commands }) => {
        return commands.toggleMark(this.name, attributes)
      },
      unsetUppercase: () => ({ commands }) => {
        return commands.unsetMark(this.name)
      }
    }
  }
})
