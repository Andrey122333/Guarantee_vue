<template>
  <div class="home">
    <div class="left-offers">
      «
    </div>
    <div class="right-offers">
      »
    </div>
    <OffersList @open="open" :offers="offers" />

    <div v-if="Myinput" class="input">
        <input class="input-text" type="text" placeholder="Поиск" />
      </div>

    <!-- <div v-if="vacation.includes($route.params.categories)" class="item">
      <span class="title-item">Колличество звёзд:</span>
      <StarRating class="star-rating" :star-size="30" v-model="rating" />
    </div> -->

    <!-- <div class="input">
      <span class="title-item">Поиск: </span>
        <input class="input-text" type="text" placeholder="Поиск" />
      </div> -->

    <!-- <h2>Приглашения</h2>
    <ApplicationsList :applications="invitation_applications" @open="open" />
    <h2>Мои заявки</h2>
    <ApplicationsList :applications="my_applications" @open="open" /> -->
    <!-- <h2>Заявки</h2>
    <ApplicationsList :applications="applications" @open="open" /> -->

    <RequestsList />

    <div class="footer-div">
            <button class="button" @click="openInput()">
              Поиск
            </button>
            <router-link v-if="$route.params.role=='organizer'" :to="{ name: 'create', params: { role: $route.params.role, categories: $route.params.categories }}">
            <button class="button-center button">
              Создать заявку
            </button>
            </router-link>
            <router-link v-if="$route.params.role=='user'" :to="{ name: 'createrequest', params: { role: $route.params.role, categories: $route.params.categories }}">
            <button class="button-center button">
              Создать запрос
            </button>
            </router-link>
            <router-link :to="{ name: 'profile', params: { role: $route.params.role, categories: $route.params.categories }}">
            <button class="button">
              Профиль
            </button>
            </router-link>
    </div>

    <!-- <div
      v-if="vacation.includes($route.params.categories)"
      class="footer-div-top"
    >
      <router-link :to="'/active_recreation'">
        <button class="button">Активный отдых</button>
      </router-link>
      <router-link :to="'/cafe'">
        <button class="button-center button">Кафе</button>
      </router-link>
      <router-link :to="'/resorts'">
        <button class="button">Курорты</button>
      </router-link>
    </div> -->

    <!-- <router-link :to="$route.params.categories + '/create'"
      ><ActionButton>Создать заявку</ActionButton></router-link
    > -->

    <div v-if="window">
      <ModalLayout />
      <ModalDialog :application="application" @close="close" />
      <!-- <div class="footer-div">
      <button class="create">Присоединиться</button>
    </div> -->
      <ActionButton>Присоединиться</ActionButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMultiselect from "vue-multiselect";
import OffersList from "@/components/OffersList.vue";
import ApplicationsList from "@/components/ApplicationsList.vue";
import ActionButton from "@/components/ActionButton.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import ModalLayout from "@/components/ModalLayout.vue";
import StarRating from "vue-star-rating";
import RequestsList from "@/components/RequestsList.vue";

export default {
  name: "HomeView",
  components: {
    VueMultiselect,
    ActionButton,
    ApplicationsList,
    ModalDialog,
    ModalLayout,
    OffersList,
    RequestsList,
    StarRating,
  },
  methods: {
    open() {
    },
    close() {
      this.window = false;
    },
    openInput() {
      this.Myinput = !this.Myinput;
    }
  },
  data() {
    return {
      rating: 5,
      Myinput: false,
      selected: null,
      options: [1, 2, 3, 4, 5],
      vacation: ["active_recreation", "cafe", "resorts"],
      window: false,
      offers: [
        {
          id: 2,
          type: "application",
          name: "Товар 1",
          contribution: 1100,
          date: "17.04.2023",
          description:
            "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
        },
        {
          id: 3,
          type: "application",
          name: "Товар 2",
          contribution: 1100,
          date: "15.04.2023",
          description:
            "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
        },
      ],
      application: {},
      invitation_applications: [
        {
          id: 1,
          type: "invitation_application",
          name: "Заявка 1",
          who_invited: [
            {
              id: 1,
              name: "Юзер 1",
              photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
              role: "Отправил приглашение",
            },
          ],
          role_invited: "Кандидат на исполнение",
          status: "Открыта",
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
              role: "Кандидат на исполнение",
            },
            {
              id: 2,
              name: "Юзер 2",
              photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
              role: "Кандидат на исполнение",
            },
          ],
        },
      ],
      my_applications: [
        {
          id: 2,
          type: "my_application",
          name: "Заявка 1",
          status: "Открыта",
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
              role: "Кандидат на исполнение",
            },
          ],
        },
        {
          id: 3,
          type: "my_application",
          name: "Заявка 1",
          status: "Открыта",
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
              role: "Кандидат на исполнение",
            },
          ],
        },
      ],
      applications: [
        {
          id: 4,
          type: "application",
          name: "Заявка 1",
          status: "Открыта",
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
              role: "Кандидат на исполнение",
            },
          ],
        },
        {
          id: 5,
          type: "application",
          name: "Заявка 1",
          city: "Москва",
          status: "Стоп-сумма",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            {
              id: 1,
              name: "Юзер 1",
              photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
              role: "Кандидат на исполнение",
            },
          ],
        },
        {
          id: 6,
          type: "application",
          name: "Заявка 1",
          city: "Москва",
          status: "Стоп-сумма",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            {
              id: 1,
              name: "Юзер 1",
              photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
              role: "Кандидат на исполнение",
            },
          ],
        },
        {
          id: 7,
          type: "application",
          name: "Заявка 1",
          city: "Москва",
          status: "Стоп-сумма",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            {
              id: 1,
              name: "Юзер 1",
              photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg",
              role: "Кандидат на исполнение",
            },
          ],
        },
      ],
    };
  },
};
</script>


<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped lang="scss">
.left-offers {
  position: absolute;
    font-size: 70px;
    left: 0vw;
    color: #000;
    opacity: 0.1;
}
.right-offers {
  position: absolute;
    right: 0vw;
    font-size: 70px;
    opacity: 0.3;
    color: #000;
    opacity: 0.1;
}
.input {
  height: 70px;
  background: #fff;
}
.input-text {
  height: 30px;
  margin-top: 20px;
  width: 80%;
}
.star-rating {
  float: left;
  margin-left: 3%;
}
.home {
  margin-bottom: 140px;
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