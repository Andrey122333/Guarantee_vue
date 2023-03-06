<template>
  <div>
    <h2>Поиск</h2>
    <ApplicationsListSearch />
    <div class="footer-div">
      <div class="input">
        <input class="input-text" type="text" placeholder="Поиск" />
      </div>
      <button class="create">Создать заявку</button>
    </div>
  </div>
  <div v-show="true">
    <ModalLayout />
    <ModalDialog />
    <!-- <div class="footer-div">
      <button class="create">Присоединиться</button>
    </div> -->
    <ActionButton />
  </div>
</template>
  
  
  <script>
import ActionButton from "@/components/ActionButton.vue";
import ApplicationsListSearch from "@/components/ApplicationsListSearch.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import ModalLayout from "@/components/ModalLayout.vue";

export default {
  name: "SearchView",
  components: {
    ActionButton,
    ApplicationsListSearch,
    ModalDialog,
    ModalLayout
  },
  data() {
    return {
      value: "",
      applications: [
        {
          id: 1,
          name: "Заявка 1",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
        {
          id: 1,
          name: "Заявка 1",
          city: "Москва",
          date: "15.09.2022",
          contribution: 1100,
          tags: ["das", "dsa"],
          description: "Описание",
          participants: [
            { name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение" },
          ],
        },
      ],
      invitations: [
        {
          name: "Заявка 1",
          role: "Кандидат на исполнение",
          status: "Стоп-сумма",
          user_invited: {
            name: "Юзер 1",
            photo: "ссылка",
            role: "Кандидат на исполнение",
          },
          applications: {
            name: "Заявка 1",
            city: "Москва",
            date: "15.09.2022",
            contribution: 1100,
            tags: ["das", "dsa"],
            description: "Описание",
            participants: [
              {
                name: "Юзер 1",
                photo: "ссылка",
                role: "Кандидат на исполнение",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.flex-div {
  display: flex;
}
.select {
  width: 30vw;
}
.input {
  height: 70px;
  background: #f2f2f2;
}
.input-text {
  height: 30px;
  margin-top: 20px;
  width: 80%;
}
.full-width {
  width: 100%;
  height: 20px;
}
.text-sort {
  font-size: 13px;
  text-align: left;
}
.footer-div {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
</style>