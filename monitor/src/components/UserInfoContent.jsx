import React, { useContext } from 'react'
import UserDIDItem from './UserDIDItem.jsx';
import VIDItem from './VIDItem.jsx';
import { UserInfoContext } from '../controller/UserInfoInquire.js';

const UserInfoContent = () => {
    const { allUsers, userDetail, loading } = useContext(UserInfoContext);

    let dids = <div>loading...</div>
    if(!loading) {
        let i = 0;
        dids = allUsers.map( (user) =>
            <UserDIDItem key={user.did} index={i++} userInfo={user} />
        );
    }

    let i = 0;
    let ownedList = userDetail.owner.map( (car) => 
        <VIDItem key={car} index={i++} vid={car} />
    );

    i = 0;
    let renterList = userDetail.renter.map( (car) =>
        <VIDItem key={car} index={i++} vid={car} />
    );

    return (
        <div>
            <ul>
                {dids}
            </ul>
            <hr />
            <h3>소유한 자동차 리스트</h3>
            <ul>
                {ownedList}
            </ul>
            <h3>대여한 자동차 리스트</h3>
            <ul>
                {renterList}
            </ul>
        </div>
    );
}

export default UserInfoContent;