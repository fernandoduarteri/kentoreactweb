const getUsers = async () => {
    const url = 'http://127.0.0.1:4000/users/getList/';
    const datos = await fetch(url);
    return await datos.json();
}

const getLikes = async (id) => {
    const url = 'http://127.0.0.1:4000/users/getLikes/' + id;
    const datos = await fetch(url);
    return await datos.json();
}

export { getUsers, getLikes }