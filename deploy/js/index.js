import { getProfiles } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const perfisContainer = document.getElementById('perfis-container');

    if (perfisContainer) {
        const perfis = getProfiles();

        perfis.forEach(perfil => {
            const itemPerfil = document.createElement('li');
            itemPerfil.classList.add('item-perfil');

            const linkPerfil = document.createElement('a');
            linkPerfil.href = './catalogo.html';
            linkPerfil.classList.add('perfil');
            linkPerfil.addEventListener('click', () => {
                localStorage.setItem('perfilAtivoNome', perfil.name);
                localStorage.setItem('perfilAtivoImagem', perfil.avatar);
            });

            const iconeAvatar = document.createElement('div');
            iconeAvatar.classList.add('icone-avatar');

            const imagemPerfil = document.createElement('img');
            imagemPerfil.src = perfil.avatar;
            imagemPerfil.alt = `Avatar de ${perfil.name}`;

            const nomePerfil = document.createElement('span');
            nomePerfil.classList.add('nome-perfil');
            nomePerfil.textContent = perfil.name;

            iconeAvatar.appendChild(imagemPerfil);
            linkPerfil.appendChild(iconeAvatar);
            linkPerfil.appendChild(nomePerfil);
            itemPerfil.appendChild(linkPerfil);
            perfisContainer.appendChild(itemPerfil);
        });
    }
});