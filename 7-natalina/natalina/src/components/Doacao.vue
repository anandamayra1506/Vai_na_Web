<script setup>
import Doacao from "../assets/enfeite.png"
</script>

<template>
    <section>
    <div>
        <img :src="Doacao" alt="Imagem de um enfeite de natal">
    </div>
    <div>
        <h2>Conectando generosidade ao redor do mundos</h2>

        <p>Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</p>

        <button>FAZER UMA DOAÇÃO</button>
    </div>
    </section>

</template>

<style scoped lang="scss">
section {
    padding: 10px 50px 10px 50px;
    font-family: "Archivo", sans-serif;
    background-color: #FFF;
    display: flex; //IMAGEM AO LADO 
}

img {
    margin: 50px;
    display: block;
}
h2 {
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
</style>