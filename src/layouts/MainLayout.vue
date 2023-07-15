<template>
  <!-- <div id="header">
    <div class="back"></div>
    <div @click="$router.back()" class="div_back">
    </div>
    <h2 class="header-title">{{ title }}</h2>
    <div class="info">?</div>
    <div @click="info" class="div_info">
    </div>
  </div> -->
  <div id="layouts">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  beforeUpdate() {
    if (this.$route.name == "home") {
      switch (this.$route.params.categories) {
        case "buy":
          this.title = "Совместные покупки";
          break;
        case "competitions":
          this.title = "Соревнования";
          break;
        case "active_recreation":
          this.title = "Совместные покупки";
          break;
        case "cafe":
          this.title = "Совместные покупки";
          break;
        case "resorts":
          this.title = "Совместные покупки";
          break;
        case "lawsuits":
          this.title = "Совместные покупки";
          break;
        case "сlaims":
          this.title = "Совместные покупки";
          break;
        case "сooperatives":
          this.title = "Совместные покупки";
          break;
        case "hiring":
          this.title = "Совместные покупки";
          break;
      }
      
    }

    switch (this.$route.name) {
        case "vacation":
          this.title = "Отдых";
          break;
        case "initiatives":
          this.title = "Инициативы";
          break;
        case "profile":
          this.title = "Профиль";
          break;
        case "application":
          this.title = "Заявка";
          break;
        case "edit":
          this.title = "Редактирование заявки";
          break;
        case "chat":
          this.title = "Чат";
          break;
        case "create":
          this.title = "Создание заявки";
          break;
        case "createrequest":
          this.title = "Создание запроса";
          break;
      }


  },
  methods: {
    info() {
      console.log("ads");
    },
  },
  data() {
    return {
      title: "",
    };
  },
};
</script>
<style lang="scss">
.div_back {
  position: fixed;
  float: left;
  width: 70px;
  left: 0px;
  height: 50px;
  padding: 0px;
  z-index: 3;
  border: 0px;
  opacity: 0;
}

.div_info {
  position: fixed;
  float: right;
  width: 40px;
  right: 0px;
  height: 50px;
  padding: 0px;
  z-index: 3;
  border: 0px;
  opacity: 0;
}

.back {
  float: left;
  margin-top: 13px;
  border: 12px solid transparent;
  border-right: 24px solid #fff;
}

#layouts {
  margin-top: 50px;
}

#header {
  position: fixed;
  left: 0px;
  width: 100%;
  height: 50px;
  background: #29426d;
  top: 0px;
}

.header-title {
  margin: 0px;
  color: #fff;
  width: 100%;
  text-align: center;
  margin-top: 11px;
  position: fixed;
}

.info {
  float: right;
  margin-top: 8px;
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
