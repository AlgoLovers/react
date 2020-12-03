
export const AllUsersReducer = (allUsers, {type, payload}) => {
    switch(type) {
        case 'GET_ALL_USERS':
            allUsers = makeUserInfos(payload);
            return allUsers;       
        default:
            return;
    }
}

const makeUserInfos = (data) => {
    console.log('make user infos :', data);
    let users = [];
    for(let i = 0; i < data.users.length; ++i) {
        const user = {did:data.users[i]};
        users.push(user);
    }
    return users;
}