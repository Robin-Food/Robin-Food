const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const user = JSON.parse(stringyUser);

    return user;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function clearUser() {
    localStorage.removeItem(USER);
}