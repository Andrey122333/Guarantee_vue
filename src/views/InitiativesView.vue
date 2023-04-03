<template>
  <div class="home">

      <router-link :to="'/lawsuits'">
        <h3 class="title-item">Cовместные иски</h3>
      </router-link>
      <router-link :to="'/сlaims'">
        <h3 class="title-item">Претензии</h3>
      </router-link>
      <router-link :to="'/сooperatives'">
        <h3 class="title-item">Кооперативы </h3>
      </router-link>
      <router-link :to="'/hiring'">
        <h3 class="title-item">Совместный найм</h3>
      </router-link>

    <!-- <div
        class="footer-div"
      >
        <router-link :to="'/active_recreation'">
          <button class="button">Cовместные иски</button>
        </router-link>
        <router-link :to="'/cafe'">
          <button class="button-center button">Кооперативы</button>
        </router-link>
        <router-link :to="'/resorts'">
          <button class="button">Совместный найм </button>
        </router-link>
      </div> -->
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
.star-rating {
  float: left;
  margin-left: 3%;
}
.title-item {
  text-align: center;
  width: 100%;
}
.multiselect {
  float: right;
  width: 50vw;
}
.item {
  float: left;
  width: 94%;
  margin: 30px 3%;
}

.footer-div {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
.footer-div-top {
  width: 100%;
  position: fixed;
  bottom: 70px;
}

.button {
  float: left;
  height: 70px;
  width: (100vw/3);
  background: #29426d;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: 0px;
  padding: 0px;
  border: 2px solid #000;
}
.button-center {
  border-left: 0px;
  border-right: 0px;
  //border-bottom: 2px solid #000;
}
</style>