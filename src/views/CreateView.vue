<template>
  <div>
    <div class="create-layout">
      <h2>Создание заявки</h2>
      <div class="item">
        <span class="title-item">Название:</span>
        <input class="create-input" type="text" />
      </div>
      <div class="item">
        <span class="title-item">Страна:</span>
        <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
      </div>
      <div class="item">
        <span class="title-item">Город:</span>
        <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
      </div>
      <div class="item">
        <span class="title-item">Начальный взнос:</span>
        <input class="create-input" type="text" />
      </div>
      <div class="item">
        <span class="title-item">Тэги</span>
        <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
      </div>
        <span class="title-item">Описание</span>
        <textarea class="create-description"></textarea>
        <div class="item">
        <router-link :to="'/'+$route.params.categories">Список заявок</router-link>
      </div>
    </div>
    <ActionButton @click="create()">Создать</ActionButton>
  </div>
</template>
  
  <script>
import VueMultiselect from "vue-multiselect";
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "SearchView",
  components: { 
    VueMultiselect, ActionButton 
  },
  data() {
    return {
      selected: null,
      options: ["list", "of", "options"],
    };
  },
  methods: {
    create() {
      console.log(121331)
      window.location.href = this.$route.params.categories
    },
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped lang="scss">
.create-layout {
  margin: 5px 5vw;
}
.create-input {
  width: calc(50vw - 2px);
  padding: 0px;
  height: 38px;
  float: right;
  border: 1px solid #e8e8e8;
}
.title-item {
  float: left;
  font-weight: bold;
  line-height: 40px;
}
.multiselect {
  float: right;
  width: 50vw;
}
.item {
  float: left;
  margin-bottom: 15px;
  width: 100%;
}
.create-description {
    text-align: justify;
    width: 100%;
    min-height: 130px;
}
</style>