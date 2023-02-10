<template>
  <div class="project-catalog">
    <CatalogInputProject
      v-for="(item, index) in project_inputs"
      :id="index"
      :title="item.title"
      :options="item.options"
    />
  </div>
</template>

<script>
import CatalogInputProject from '@/components/templates/chat-page/chat-catalog/catalog-input/CatalogInputProject.vue'

export default {
  components: { CatalogInputProject },
  data() {
    return {
      project_inputs: [
        {
          title: 'Title',
          options: [
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            }
          ]
        },
        {
          title: 'title 2',
          options: [
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },
            {
              img:
                'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-catalog {
  max-height: 71vh;
  overflow-y: auto;
  .catalog-input__field {
    background: #d9d9d9 !important;
    border: 1px solid #d9d9d9;
  }
}
</style>
