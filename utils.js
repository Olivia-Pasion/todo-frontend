const BASE_URL = 'http://localhost:7890';

export async function getUser() {
    try {
        const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        if (resp.ok) {
            return resp;
        } else {
            throw new Error();
        }
    } catch (e) {
        return null;
    }
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./index.html');
    }
}

export async function signupUser(email, password) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password })
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }
}

// export async function getTodoTasks() {
//     const resp = await fetch(`${BASE_URL}/api/v1/tasks`, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//     });
//     const data = await resp.json();
//     if (resp.ok) {
//         return data;
//     } else {
//         throw new Error(data.message);
//     }
// }
