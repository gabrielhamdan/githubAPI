import { baseUrl, repositoryQty } from "../variables.js";

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoryQty}`);
    return await response.json();
}

export { getRepos }