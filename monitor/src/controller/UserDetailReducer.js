
export const UserDetailReducer = (userDetail, {type, payload}) => {
    switch(type) {
        case 'GET_USER_DETAIL':
            userDetail = convert(payload);
            return userDetail;
        
        case 'GET_OWNER_INFOS':
            userDetail = addOwnerInfo(payload, userDetail);
            return userDetail;

        case 'GET_RENTER_INFOS':
            userDetail = addRenterInfo(payload, userDetail);
            return userDetail;
        default:
            return;
    }
}

const convert = (data) => {
    console.log('convert::', data);
    // {"owners":[{"owner":"IKUJYHTG","vid":"8i7u6y5t"}]}
    let _user = {owner: [], renter: []};
    for(let i = 0; i < data.owner.owners.length; ++i) {
        _user.owner.push(data.owner.owners[i].vid);
    }
    // {"renters":[{"renter":"IKUJYHTG","vid":"1q2w3e4r","lessor":"QAWSEDRF","starttime":1592000000,"endtime":1693000000,"ShareOTP":"sangchul"}]}
    for(let i = 0; i < data.renter.renters.length; ++i) {
        _user.renter.push(data.renter.renters[i].vid);
    }

    return _user;
}
const addOwnerInfo = (data, userDetail) => {
    // {"owners":[{"owner":"IKUJYHTG","vid":"8i7u6y5t"}]}
    let _user = {owner: [], renter: userDetail.renter};
    for(let i = 0; i < data.owner.owners.length; ++i) {
        _user.owner.push(data.owner.owners[i].vid);
    }
    return _user;
}

const addRenterInfo = (data, userDetail) => {
    // {"owners":[{"owner":"IKUJYHTG","vid":"8i7u6y5t"}]}
    let _user = {owner: userDetail.owner, renter: []};
    for(let i = 0; i < data.renter.renters.length; ++i) {
        _user.renter.push(data.renter.renters[i].vid);
    }
    return _user;
}