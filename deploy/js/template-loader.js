async function loadTemplates() {
    // Carrega o cabeçalho
    const headerResponse = await fetch("./templates/header.html");
    const headerData = await headerResponse.text();
    document.getElementById("header-container").innerHTML = headerData;

    // Carrega o rodapé
    const footerResponse = await fetch("./templates/footer.html");
    const footerData = await footerResponse.text();
    document.getElementById("footer-container").innerHTML = footerData;
    
    // Atualiza o perfil do usuário
    const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));
    if (selectedProfile) {
        const profileIcon = document.querySelector(".profile-icon");
        const kidsLink = document.querySelector(".kids-link");

        if(profileIcon) {
            profileIcon.src = selectedProfile.avatar;
        }

        if(kidsLink) {
            kidsLink.textContent = selectedProfile.name;
        }
    }
}

loadTemplates();