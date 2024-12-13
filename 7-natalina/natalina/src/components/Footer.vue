<script setup>
import Logo from "../assets/logo.png";
</script>

<template>

<section>
    <img :src="Logo" alt="Logo com o papai noel e Feliz Natal">
    <ul>
        <a href="https://x.com/doacao" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Vector-twitter.png" alt="Icone Twitter" />
        </a>
        <a href="http://instagram.com.br" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Vector-whatsapp.png" alt="Icone WhastApp">
        </a>
        <a href="http://instagram.com.br" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Vector-instagram.png" alt="Icone Instagram">
        </a>
        <a href="http://facebook.com.br" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Vector-facebook.png" alt="Icone Facebook">
        </a>
        <a href="http://google.com.br" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Vector-google.png" alt="Icone Google">
        </a>
    </ul>
    
</section>
</template>

<style scoped lang="scss">
section {
    font-family: "Archivo", sans-serif;
    background-color: #FFE9E8;
    display: flex; 
    justify-content: space-between;
    padding: 10px 50px 10px 50px;
}

img {
    margin-bottom: 20px;
    padding: 10px;
}
</style>