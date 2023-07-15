<template>
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
        <span class="title-item">Мин. сумма:</span>
        <input class="create-input" type="number" />
      </div>
      <div class="item">
          <span class="title-item">Срок реализации:</span>
          <input class="create-input" type="date" />
        </div>
      <div class="item">
        <span class="title-item" >Комиссия: (%)</span>
        <input class="create-input" v-model="value" maxlength="3" type="number" />
      </div>
      <div class="item">
        <span class="title-item">Тэги</span>
        <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
      </div>
        <span class="title-item">Описание</span>
        <textarea class="create-description"></textarea>
</template>

<script>
import VueMultiselect from "vue-multiselect";
export default {
  name: "",
  components: { 
    VueMultiselect 
  },
  data() {
    return {
      selected: null,
      value: 0,
      options: ["list", "of", "options"],
    };
  },
}
</script>

<style scoped lang="scss">
.create-layout {
  margin: 5px 5vw;
  margin-bottom: 100px;
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