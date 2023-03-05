<template>
  <div class="home">
    <h2>Приглашения</h2>
    <ApplicationsList v-bind:applications="invitation_applications" />
    <h2>Мои заявки</h2>
    <ApplicationsList v-bind:applications="my_applications"/>
    <h2>Чаты</h2>
    <ApplicationsList v-bind:applications="applications"/>
    <ActionButton></ActionButton>
  </div>
</template>

<script>
// @ is an alias to /src
import ApplicationsList from "@/components/ApplicationsList.vue";
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "HomeView",
  components: {
    ActionButton,
    ApplicationsList,
  },
  data() {
    return {
      invitation_applications: [
      {
        id: 1,
          name: "Заявка 1",
          who_invited: {name: "Юзер 1", photo: "ссылка"},
          role_invited: "Кандидат на исполнение",
          status: "Открыта",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
      ],
      my_applications: [
      {
        id: 2,
          name: "Заявка 1",
          status: "Открыта",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
      ],
      applications: [
        {
          id: 3,
          name: "Заявка 1",
          status: "Открыта",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Первые несколько строк описания. Первые несколько строк описания....Первые несколько строк описания....",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
        {
          id: 4,
          name: "Заявка 1",
          city: "Москва",
          status: "Стоп-сумма",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
      ],
    };
  },
};
</script>
