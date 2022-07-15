const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário." />
                            <div class="data">
                                <h1>${user.name ?? 'Não há nome cadastrado 🙁'}</h1>
                                <p>${user.bio ?? 'Não há biografia cadastrada 🙁'}</p>
                                <div class="social">
                                    <p>Seguidores ${user.followers}</p>
                                </div>
                                <div class="social">
                                    <p>Seguindo ${user.following}</p>
                                </div>
                            </div> 
                        </div>`;

        let repositoryItems = "";

        user.repositories.forEach(repo => {
            repositoryItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br>🍴${repo.forks} ⭐${repo.stargazers_count} 👀${repo.watchers} 💻${repo.language ?? 'Sem linguagem'}</a></li>`
        });

        if (user.repositories.length > 0)
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoryItems}</ul>
                                            </div>`;

        let activitiesList = "";

        user.activities.forEach((activity, index) => {
            let activityRepo = user.activities[index].repo.name;
            let activityPayload = user.activities[index].payload;

            if (activityPayload.commits != null) {
                activitiesList += `<li><span>${activityRepo}:</span> ${activityPayload.commits[0].message}</li>`
            }

            if (activityPayload.issue != null) {
                activitiesList += `<li><span>${activityRepo}:</span> ${activityPayload.issue.title}</li>`
            }
        });

        if (activitiesList != "") {
            this.userProfile.innerHTML += `<div class="activities">
                                                <h2>Atividades</h2>
                                                <ul>${activitiesList}</ul>
                                            </div>`;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    }
}

export { screen }