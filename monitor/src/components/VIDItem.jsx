import React, { useContext } from 'react';
import { UserInfoContext } from '../controller/UserInfoInquire.js';

const VIDItem = ({index, vid}) => {
    // const { sellectedDisPath } = useContext(UserInfoContext);

    const itemClickHandler = (e) => {
        // sellectedDisPath({type:'ITEM_CLICK', payload:{index:index, did:userInfo.did}});
    }

    return (
        <li
            data-id={vid}
            onClick={itemClickHandler}>
                {vid}
            </li>
    );
}

export default VIDItem;