<template>
  <div class="page">
    <PageTitle>{{title}}</PageTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PageTitle from '@/components/util/PageTitle.vue'

export default defineComponent({
  name: 'About',
  components: {
    PageTitle
  },
  setup () {
    const router = useRouter()
    const title = router.currentRoute.value.name
    return {
      title
    }
  }
})
</script>
