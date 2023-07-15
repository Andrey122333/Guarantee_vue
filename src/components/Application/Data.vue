<template>
      <div class="modal-data">
        <p class="modal-data-text">Минимальная сумма взноса: <span>500 руб.</span></p>
        <p class="modal-data-text">Приблизительный срок реализации: <span>15.04.2023</span></p>
        <p class="modal-data-text">Примерная общая сумма: <span>5 000 руб.</span></p>
      </div>
</template>
<!-- Поменять на внутри текст -->
<script>
export default {
};
</script>

<style scoped lang="scss">
.modal-data {
    font-size: 13px;
    float: left;
    margin: 0px 5vw;
    width: 80vw;
    text-align: left;
}
.modal-data-text {
    margin: 0px;
    margin-top: 5px;
}
.modal-data-text span {
font-weight: bold;
}
</style>