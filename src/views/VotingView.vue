<template>
 <div>
    <div class="create-layout">
      <h2>Голосование</h2>
      <p>за сумму взноса</p>
      <div>
      <div class="voting-left">
      <p>Проголосовали 5/10</p>
      <p>Осталость 01:00:56</p>
    </div>
    <div class="voting-right">
      <p>Вы не проголосовали</p>
      </div>
    </div>
    </div>
    <p class="modal-description">
        Подробное описание голосования. Consectetur adipiscing elit. Suspendisse
        cursus, lorem et ultricies interdum, ante dolor tincidunt lectus, vel
        molestie nunc elit vitae nisi. Nam a neque viverra, efficitur elit sit
        amet, scelerisque purus. Nulla venenatis purus id lacus facilisis, ut
        dictum risus commodo. Donec et erat interdum, vehicula odio quis,
        ultricies nulla. Fusce bibendum, nulla viverra posuere iaculis, tortor
        justo vulputate justo.
      </p>
      <div class="background-blue">
      <div class="create-layout">
        <h3>Варианты:</h3>

        <div class="item">
            <div class="voting-item">
                <div class="voting-item-text">
                <label for="one" class="voting-contribution">1200 Р</label >
                <label class="text-right">25%</label>
            </div>
            <div class="voting-item-text">
                <label class="voting-description">Описание, почему эта сумма оптимальна</label>
                <input class="text-right" type="radio" id="one" value="Один" v-model="picked">
            </div>
            </div>
        </div>

        <div class="item">
            <div class="voting-item">
                <div class="voting-item-text">
                <label for="two" class="voting-contribution">2200 Р</label >
                <label class="text-right">75%</label>
            </div>
            <div class="voting-item-text">
                <label class="voting-description">Описание, почему эта сумма оптимальна</label>
                <input class="text-right" type="radio" id="two" value="Два" v-model="picked">
            </div>
            </div>
        </div>

        <div class="item">
            <button class="add_btn">Предложить свою сумму</button>
        </div>


        </div>
    </div>



    <ActionButton :text="Создать"></ActionButton>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import ActionButton from "@/components/ActionButton.vue";
import Description from "@/components/Application/Description.vue";
  
  export default {
    name: "SearchView",
    components: { 
      VueMultiselect, ActionButton, Description,
    },
    data() {
      return {
        selected: null,
        options: ["list", "of", "options"],
      };
    },
  };
  </script>
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
  <style scoped lang="scss">
  .create-layout {
    margin: 5px 5vw;
    text-align: left;
  }
  .create-input {
    width: calc(50vw - 2px);
    padding: 0px;
    height: 38px;
    float: right;
    border: 1px solid #e8e8e8;
  }
.voting-left {
    float: left;
    font-size: 14px;
}
.voting-right {
    float: right;
    font-weight: bold;
    font-size: 14px;
    color: red;
}
.modal-description {
    font-size: 13px;
    text-align: justify;
    height: 135px;
    float: left;
    margin: 5px 5vw;
}


.voting-item {
    background: #6B80A5;
    color: #fff;
    float: left;
    padding: 10px;
    border-radius: 10px;
}
.voting-item-text {
    float:left;
    width: 100%;
}
.voting-contribution {
    float: left;
    width: 70vw;
    font-weight: bold;
}
.text-right {
    float: right;
    font-weight: bold;
}
.voting-description {
    float: left;
    width: 70vw;
    font-size: 14px;
}
  .item {
    float: left;
    margin-bottom: 15px;
    width: 100%;
  }
  .background-blue {
    background: #839BC6;
    color: #fff;
    float: left;
    width: 100%;
    text-align: left;
  }
  .add_btn {
    background: #6B80A5;
    border: 0px;
    color: #fff;
    width: 100%;
    height: 30px;
    border-radius: 30px;
  }
  </style>