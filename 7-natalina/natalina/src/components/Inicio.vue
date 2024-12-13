<script setup>
import Logo from "../assets/logo.png"
import Loja from "../assets/loja.png";
</script>

<template>
    <section>
        <div>
            <img :src="Logo" alt="Logo Papai Noel ">

            <h1>Uma <span>plataforma de doação</span> para espalhar alegria</h1>

            <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>

            <button>FAZER UMA DOAÇÃO</button>
        </div>    

        <div class="loja">
            <img :src="Loja" alt="Loja Natalina">
        </div>
    </section>
</template>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&display=swap');

section {
    padding: 10px 50px 10px 50px;
    font-family: "Archivo", sans-serif;
    background-color: #FFE9E8;
    display: flex; //IMAGEM AO LADO 
}
span {
    color: #CD3C32;
}
img {
    margin: 50px;
    display: block;
}
h1 {
    margin-left: 50px;
    color: black;
}
p{
    margin: 50px;
    color: black;
}
button {
    font-family: roboto;
    height: 50px;
    width: 160px;
    border-radius: 0%;
    display: block;
    background-color: #CD3C32;
    color: white;
    margin: 50px;
    padding: 5px;
}
.loja{
    flex-direction: column;

}
</style>