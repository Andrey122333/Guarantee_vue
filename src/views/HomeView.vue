<template>
  <div class="home">
    <h2>Приглашения</h2>
    <ApplicationsList :applications="invitation_applications" @open="open" />
    <h2>Мои заявки</h2>
    <ApplicationsList :applications="my_applications" @open="open"/>
    <h2>Чаты</h2>
    <ApplicationsList :applications="applications" @open="open"/>

    <!-- <div class="footer-div">
      <router-link :to="$route.params.categories+'/create'">
            <button class="button">
              Поиск
            </button>
            </router-link>
            <router-link :to="$route.params.categories+'/create'">
            <button class="button">
              Создать заявку
            </button>
            </router-link>
            <router-link :to="$route.params.categories+'/create'">
            <button class="button">
              Страница
            </button>
            </router-link>
    </div> -->

    <router-link :to="$route.params.categories+'/create'"><ActionButton>Создать заявку</ActionButton></router-link>


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
import ApplicationsList from "@/components/ApplicationsList.vue";
import ActionButton from "@/components/ActionButton.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import ModalLayout from "@/components/ModalLayout.vue";

export default {
  name: "HomeView",
  components: {
    ActionButton,
    ApplicationsList,
    ModalDialog,
    ModalLayout,
  },
  methods: {
    open(application) {
      console.log(application);
      if (application.type=='my_application') {
        window.location.href = this.$route.params.categories+'/application/'+application.id
      } else {
        this.application = application;
        this.window = true;
      }
    },
    close() {
      this.window = false;
    }
  },
  data() {
    return {
      window: false,
      application: {},
      invitation_applications: [
      {
        id: 1,
        type: "invitation_application",
          name: "Заявка 1",
          who_invited: [{id: 1, name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Отправил приглашение"}],
          role_invited: "Кандидат на исполнение",
          status: "Открыта",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { id: 1, name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Кандидат на исполнение" },
            { id: 2, name: "Юзер 2", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Кандидат на исполнение" },
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
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { id: 1,  name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Кандидат на исполнение" },
          ],
        },
      ],
      applications: [
        {
          id: 3,
          type: "application",
          name: "Заявка 1",
          status: "Открыта",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { id: 1,  name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Кандидат на исполнение" },
          ],
        },
        {
          id: 4,
          type: "application",
          name: "Заявка 1",
          city: "Москва",
          status: "Стоп-сумма",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            { id: 1,  name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Кандидат на исполнение" },
          ],
        },
      ],
    };
  },
};
</script>



<style scoped lang="scss">
.footer-div {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }

  .button {
    float: left;
    height: 70px;
    width: 30%;
    background: #29426d;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border: 0px;
    margin-left: 2.5%;
  }
</style>