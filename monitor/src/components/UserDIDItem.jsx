import React, { useContext } from 'react';
import { UserInfoContext } from '../controller/UserInfoInquire.js';
import './UserDIDItem.css';

const UserDIDItem = ({index, userInfo}) => {
    const { sellectedDisPath } = useContext(UserInfoContext);

    const itemClickHandler = (e) => {
        sellectedDisPath({type:'ITEM_CLICK', payload:{index:index, did:userInfo.did}});
    }

    return (
        <li
            data-id={userInfo.did}
            onClick={itemClickHandler}>
                {userInfo.did}
            </li>
    );
}

export default UserDIDItem;