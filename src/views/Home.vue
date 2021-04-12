<template>
  <div class="page">
    <PageTitle>{{title}}</PageTitle>
    <nameList :userData="userList"></nameList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getContent } from '@/api'
import { UserData } from '@/api/list'
import PageTitle from '@/components/util/PageTitle.vue'
import nameList from '@/components/List.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PageTitle,
    nameList
  },
  setup () {
    const router = useRouter()
    const title = router.currentRoute.value.name
    const userList = ref<UserData | null>()
    const getList = async () => {
      const res = await getContent()
      console.log(res)
      userList.value = res.data
    }
    getList()
    return {
      title,
      userList
    }
  }
})
</script>
