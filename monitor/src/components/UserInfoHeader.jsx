import React, { useContext } from 'react';
import { UserInfoContext } from '../controller/UserInfoInquire.js';
import './UserInfoHeader.css';

const UserInfoHeader = () => {
    const { allUsers, selected } = useContext(UserInfoContext);
    return (
        <div>
            <div className="countInfo">
                <h4>총 {allUsers.length} 명의 사용자가 등록 되어 있습니다.</h4>
                <h4>사용자 {selected.did} 가 선택 되었습니다.</h4>
            </div>
        </div>
    );
}
export default UserInfoHeader;