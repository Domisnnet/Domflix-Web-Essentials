import { getProfiles } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const perfisContainer = document.getElementById('perfis-container');

    if (perfisContainer) {
        const perfis = getProfiles();

        perfis.forEach(perfil => {
            const linkPerfil = document.createElement('a');
            linkPerfil.href = './catalogo.html';
            linkPerfil.classList.add('perfil');
            linkPerfil.addEventListener('click', () => {
                localStorage.setItem('perfilAtivoNome', perfil.name);
                localStorage.setItem('perfilAtivoImagem', perfil.avatar);
            });

            const imagemPerfil = document.createElement('img');
            imagemPerfil.src = perfil.avatar;
            imagemPerfil.alt = `Avatar de ${perfil.name}`;

            const nomePerfil = document.createElement('span');
            nomePerfil.classList.add('nome-perfil');
            nomePerfil.textContent = perfil.name;

            linkPerfil.appendChild(imagemPerfil);
            linkPerfil.appendChild(nomePerfil);
            perfisContainer.appendChild(linkPerfil);
        });
    }
});
