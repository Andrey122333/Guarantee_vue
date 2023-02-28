<template>
  <div class="home">
    <h2>Приглашения</h2>
    <Application></Application>
    <h2>Мои заявки</h2>
    <Application></Application>
    <Application></Application>
    <h2>Чаты</h2>
    <Application></Application>
    <Application></Application>
    <Application></Application>
    <ActionButton></ActionButton>
  </div>
</template>

<script>
// @ is an alias to /src
import Application from '@/components/Application.vue'
import ActionButton from '@/components/ActionButton.vue'

export default {
  name: 'HomeView',
  components: {
    ActionButton, Application
  }
}
</script>
