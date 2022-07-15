import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import { getUserEvents } from "./services/events.js";

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

const searchField = document.getElementById("input-search");

document.getElementById("btn-search").addEventListener("click", () => {
    if (searchField.value.length === 0) return;
    
    getUserData(searchField.value);
})

searchField.addEventListener("keyup", (e) => {
    if (searchField.value.length === 0) return;
    if (e.key === 'Enter') {
        getUserData(searchField.value);
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName);

    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }

    const reposResponse = await getRepos(userName);

    const userEventResponse = await getUserEvents(userName);
    
    user.setInfo(userResponse);
    user.setRepos(reposResponse);
    user.setEvents(userEventResponse);

    screen.renderUser(user);
}