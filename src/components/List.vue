<template>
  <div class="btn-box">
    <Button :class="[`${unitType === 'metric' ? 'active' : ''}`]" @click="unitType='metric'">Metric units</Button>
    <Button :class="[`${unitType === 'imperial' ? 'active' : ''}`]" @click="unitType='imperial'">Imperial units</Button>
  </div>
  <ul class="card-list">
    <li class="card-frame" v-for="user in filteredContent" :key="user.id">
      <Card>
        <template #name>
        Name: {{user.name}}
        </template>
        <template #weight>
        Weight: {{user.weight}}
        </template>
        <template #height>
        Height: {{user.height}}
        </template>
        <template #gender>
        Gender: {{user.gender}}
        </template>
      </Card>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import { UserData } from '@/api/list'
import Card from '@/components/util/UserCard.vue'
import Button from '@/components/util/PageBtn.vue'

export default defineComponent({
  components: {
    Card,
    Button
  },
  props: {
    userData: {
      type: Array as PropType<UserData[]>
    }
  },
  setup (props) {
    const unitType = ref('cm')
    const filteredContent = computed(() => {
      if (!props.userData) return
      return props.userData.map(user => {
        const height = unitType.value === 'imperial' ? +(user.height * 0.39).toFixed(2) + 'in' : user.height + 'cm'
        const weight = unitType.value === 'imperial' ? +(user.weight * 2.204).toFixed(2) + 'lb' : user.weight + 'kg'
        const name = user.name
        const gender = user.gender
        return {
          name,
          height,
          weight,
          gender
        }
      })
    })
    return {
      unitType,
      filteredContent
    }
  }
})
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card-frame {
    padding: 1rem;
  }
}
.page-btn {
  color: $cyber-text;
  background-color: $cyber-background;
}
.btn-box {
  display: flex;
  button+button{
    margin-left: 1rem;
  }
  button {
    padding: 5px 10px;
    max-width: 80px;
    transition: all 0.5s ease;
    &:hover{
      box-shadow: inset 0px 3px 5px, inset 6px 0px 6px, inset -6px 0px 6px, inset 0px -3px 5px;
    }
  }
  .active {
    box-shadow: inset 0px 3px 5px, inset 6px 0px 6px, inset -6px 0px 6px, inset 0px -3px 5px;
  }
}
</style>
