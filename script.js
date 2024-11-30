// Seleciona os elementos do DOM necessários
const toggleButton = document.getElementById("menuToggle"); // Botão do menu hamburguer
const sidebar = document.querySelector(".sidebar"); // Sidebar
const navbar = document.querySelector(".navbar"); // Navbar (barra superior)
const servicos = document.querySelector(".servicos"); // Área de serviços/cards

// Adiciona evento de clique ao botão hambúrguer
toggleButton.addEventListener("click", () => {
    // Alterna a classe 'hidden' na sidebar para mostrar/esconder
    sidebar.classList.toggle("hidden");

    // Ajusta a posição da navbar e da área de serviços para se alinharem
    navbar.classList.toggle("shifted");
    servicos.classList.toggle("shifted");
});
