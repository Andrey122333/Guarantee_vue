<template>
      <div class="modal-dialog">
      <div class="modal-info">
        <details><summary>
        <h2 class="modal-name">Название заявки {{ $route.params.id }}</h2> 
        <p class="text-item" :class="{ red: application.status=='Стоп-сумма'}">{{application.status}}<span class="text-status">Идет голосование</span></p>
        <InfoText :application="application"/>
        <Voting :voting="application.voting" :participants_count="application.participants.length" v-if="application.voting.type!='no' && application.voting.type!='executor'" />

        <Contribution v-if="application.voting.type!='amount'"> Взнос: {{ application.contribution }}Р</Contribution>
        <Contribution @click="redirectToLink(this.$route.params.categories+'/creatingvote/amount')" v-if="application.voting.type=='no'">Начать голосование за сумму взноса</Contribution>
        <Contribution @click="redirectToLink(this.$route.params.categories+'/creatingvote/status')" v-if="application.voting.type=='no'">Начать голосование за статус заявки</Contribution>
      </summary>
        <TagsList :tags="application.tags"/>
        <Description :application="application"/>
      </details>
      </div>

      <div class="modal-users">
      <div class="modal-users-item">
        <details><summary>
        <p class="users-name">Участники ({{application.participants.length}}/100):</p>    </summary>
          <UsersList :participants="application.participants" />

          <Voting :voting="application.voting" style="background: #6B80A5; margin: 0px;" v-if="application.voting.type=='executor'" />
          <GreyButton class="margin-top">Пригласить</GreyButton>
          <GreyButton class="margin-top" @click="redirectToLink(this.$route.params.categories+'/creatingvote/executor')" v-if="application.voting.type=='no'">Начать голосование за исполнителя</GreyButton>
      </details>
      </div>
    </div>
  </div>
  <div class="events-div">
        <details><summary class="events-summary">
        <p class="events-name" >События:</p>      </summary>
        <EventsList :events="application.events"/>
      </details>
    </div>
    <ActionButton>Редактировать заявку</ActionButton>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import InfoText from "@/components/Application/InfoText.vue";
import Contribution from "@/components/Application/Contribution.vue";
import TagsList from "@/components/Application/TagsList.vue";
import Description from "@/components/Application/Description.vue";
import UsersList from "@/components/Application/UsersList.vue";
import Voting from "@/components/Application/Voting.vue";

import GreyButton from "@/components/UI/GreyButton.vue";
import EventsList from "@/components/EventsList.vue";

export default {
  name: "HomeView",
  components: {
    ActionButton,
    InfoText,
    Contribution,
    TagsList,
    Description,
    UsersList,
    GreyButton,
    EventsList,
    Voting,
  },
  data() {
    return {
      window: false,
      application: 
      {
        id: 2,
          name: "Заявка 1",
          status: "Стоп-сумма",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { id: 1,  name: "Юзер 1", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Создатель" },
            { id: 2,  name: "Юзер 2", photo: "https://cheboksari.imperiya-pola.ru/img/nophoto.jpg", role: "Исполнитель" },
          ],
          events: [
            {id: 2, text: "Изменена сумма взноса на 1100₽"},
            {id: 1, text: "Закончилось голосование за сумму взноса"},
          ],
          voting: {type: "no", date: "2023-04-09 15:59:40", voted: "0"}, //amount, status, executor, no
        },
    };
  },
  methods: {
  redirectToLink(link) {
    window.location.pathname = link;
  }
},
}
</script>

<style  scoped  lang="scss">
$create-height: 70px;
.modal-name {
  display: inline;
}
.modal-dialog {
  margin-top: 30px;
    background: #879ac5;
    // position: fixed;
    // height: calc(90vh - $create-height);
    // width: 90vw;
    // left: 5vw;
    // top: 5vh;
    border-radius: 0px 0px 20px 20px;
    overflow: auto;
  }
  .modal-info {
    float: left;
      background: #fff;
      border-radius: 0px 0px 20px 20px;
  }
  .icon-close {
    height: 20px;
      width: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB1ZRBCoAwDAQXX5D/X9wf+ST10IMHCRONogOF0kwWSkukvxGqE1lh2dcsjkdPZMIKQ7FLROLghqxWDj07uxx63N/CIwiFTXoZq/HKVuOjWI3fhjQQpyYS95Hh0Dq+vskGHow2UkviuZ0AAAAASUVORK5CYII=);
      position: fixed;
      right: 8vw;
      top: 7vh;
      margin: 6px
  }
  .modal-users-item {
    float: left;
      margin: 15px 5vw;
      width: 80vw;
      text-align: left;
  }
  .users-name {
    color: #fff;
    display: inline;
  }
  
  .user-item {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-photo {
    height: 50px;
    float: left;
  }
  .user-text {
    border-radius: 0px 10px 10px 0px;
      float: left;
      width: calc(100% - 50px);
      height: 50px;
      background: #6B80A5;
  }
  .user-name {
    color: #fff;
    font-weight: bold;
    float: left;
    font-size: 15px;
    margin-top: 3px;
    margin-left: 10px;
  }
  .user-role {
    color: #40CB4E;
    float: left;
    font-size: 14px;
    margin-top: 3px;
    margin-left: 10px;
  }
  .events-div {
    text-align: left;
    float: left;
    width: 100%;
    background: #fff;
    margin-top: 15px;
    margin-bottom: 70px;
  }
  .events-name {
    display: inline;
    margin-bottom: 10px;
  }
  .events-summary {
    margin: 0px 5vw;
    width: 80vw;
  }
  .margin-top {
    margin-top: 10px;
  }

  .text-item {
    margin-top: 10px;
    color: #40CB4E;
    height: 30px;
    font-weight: bold;
    margin: 10px 0px;
  }
  .text-status{
    margin-left: 5px;
    color: #40CB4E;
  }
  .red {
    color: #CB4040;
  }
  .text-status::before {
    content: "●";
  }
  </style>
