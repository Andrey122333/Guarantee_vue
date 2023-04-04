<template>
  <div class="home">
    <h2>Выберите класс отдыха</h2>
    <div class="item-star">
      <span class="title-item">Колличество звёзд:</span>
      <StarRating class="star-rating" :star-size="30" v-model="rating" />
    </div>

    <div class="items-container">
      <h2>Тип отдыха:</h2>
      <div class="item">
        <div>
          <router-link :to="'/active_recreation'">
            <h3 class="title-item-h blue">Активный отдых</h3>
          </router-link>
        </div>
      </div>
      <div class="item item-blue">
        <div>
          <router-link :to="'/cafe'">
            <h3 class="title-item-h white">Кафе</h3>
          </router-link>
        </div>
      </div>
      <div class="item">
        <div>
          <router-link :to="'/resorts'">
            <h3 class="title-item-h blue">Курорты</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
import VueMultiselect from "vue-multiselect";
import ActionButton from "@/components/ActionButton.vue";
import StarRating from "vue-star-rating";

export default {
  name: "HomeView",
  components: {
    VueMultiselect,
    ActionButton,
    StarRating,
  },
  methods: {},
  data() {
    return {
      rating: 5,
      selected: null,
      window: false,
    };
  },
};
</script>
  
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
  <style scoped lang="scss">
  .title-item-h {
  font-weight: bold;
  text-align: center;
  width: 100%;
}
.items-container {
  margin-top: 20px;
  width: 100%;
  //margin-bottom: $create-height+$input-height;
}
.item {
  background: #f2f2f2;
  padding: 10px 10px;
  text-align: left;
  color: #4072cb;
  height: 60px;
}
.item-grey {
  background: #f2f2f2;
}
.item-blue {
  background: #839bc6;
  color: #fff;
}
.blue {
  color: #4072cb;
}
.white {
  color: #fff;
}
.image-item {
  height: 50px;
  float: left;
  margin-right: 10px;
  margin-top: 5px;
}
.title-item {
  font-weight: bold;
  text-align: center;
}
a {
  text-decoration: none;
}

.star-rating {
  float: left;
  margin-left: 3%;
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
.item-star {
  float: left;
  width: 94%;
  margin: 30px 3%;
}


</style>