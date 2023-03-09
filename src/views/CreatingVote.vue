<template>
  <div>
    <div class="create-layout">
      <h2>Создание голосования {{ text[$route.params.type] }}</h2>
      <div v-if="$route.params.type == 'status'" class="item">
        <span class="title-item">На:</span>
        <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
      </div>
      <span class="title-item">Описание:</span>
      <textarea class="create-description"></textarea>
    </div>
    <div class="background-blue">
      <div class="create-layout">
        <h3>{{ textName[$route.params.type] }}:</h3>
        <div class="item">
          <button @click="open()" class="add_btn">
            Добавить {{ textButton[$route.params.type] }}
          </button>
        </div>
      </div>
    </div>
    <ActionButton>Создать голосование</ActionButton>

    <div v-show="window">
      <ModalLayout />
      <ModalCandidates :application="application" />
      <ActionButton>Создать</ActionButton>
    </div>
  </div>
</template>
    
    <script>
import VueMultiselect from "vue-multiselect";
import ActionButton from "@/components/ActionButton.vue";
import ModalCandidates from "@/components/ModalCandidates.vue";
import ModalLayout from "@/components/ModalLayout.vue";

export default {
  name: "SearchView",
  components: {
    VueMultiselect,
    ActionButton,
    ModalCandidates,
    ModalLayout,
  },
  data() {
    return {
      selected: null,
      options: ["list", "of", "options"],
      text: {
        amount: "сумму взноса",
        status: "смену статуса",
        executor: "исполнителя",
      },
      textName: {
        amount: "Варианты",
        status: "Варианты",
        executor: "Кандидаты",
      },
      textButton: {
        amount: "вариант",
        status: "вариант",
        executor: "кандидата",
      },
      application: {
        id: 2,
        name: "Заявка 1",
        status: "Стоп-сумма",
        city: "Москва",
        date: "15.09.2022",
        contribution: 1100,
        tags: ["das", "dsa"],
        description:
          "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
        participants: [
          {
            id: 1,
            name: "Юзер 1",
            photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
            role: "Создатель",
          },
          {
            id: 2,
            name: "Юзер 2",
            photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
            role: "Исполнитель",
          },
        ],
        events: [
          { id: 2, text: "Изменена сумма взноса на 1100₽" },
          { id: 1, text: "Закончилось голосование за сумму взноса" },
        ],
        voting: { type: "no", date: "2023-03-09 15:59:40", voted: "0" }, //amount, status, executor, no
      },
    };
  },
  methods: {
    open() {
      console.log("31312");
        this.window = true;
    },
    close() {
      this.window = false;
    }
  },
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
.background-blue {
  background: #839bc6;
  color: #fff;
  float: left;
  width: 100%;
  text-align: left;
}
.add_btn {
  background: #6b80a5;
  border: 0px;
  color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 30px;
}
</style>