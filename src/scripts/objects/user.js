const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    activities: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepos(repos) {
        this.repositories = repos;
    },
    setEvents(events) {
        this.activities = events;
    }
}

export { user }