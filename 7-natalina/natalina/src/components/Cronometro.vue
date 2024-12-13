<script setup>
import Presente from "../assets/presentes.png";
</script>

<template>

    <section>
        <h2>Tempo limitado</h2>
        <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
        <img :src="Presente" alt="Imagem com vários presentes e um urso">
    </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&display=swap');

section {
    background-color: rgb(255, 255, 255);
    color: black;
    font-family: "Archivo", sans-serif;
    text-align: center;
}
img {
    justify-items: center;
}
h2{
    font-weight: bold;

}
</style>