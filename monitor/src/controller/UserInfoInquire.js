import React, { useEffect, useReducer } from 'react';
import useUserInfosFetch from './useUserInfosFetch.js';
import { AllUsersReducer } from './AllUsersReducer.js';
import { SellectedReducer } from './SellectedReducer.js';
import { UserDetailReducer } from './UserDetailReducer.js';

export const UserInfoContext = React.createContext();

const UserInfoInquire = (props) => {
    const [allUsers, allUsersDispatch] = useReducer(AllUsersReducer, []);
    const [selected, sellectedDisPath] = useReducer(SellectedReducer, {index: -1, did: null});
    const [userDetail, userDetailDispatch] = useReducer(UserDetailReducer, {owner: [], renter: []});
    
    const getAllUsers = (data) => {
        allUsersDispatch({type:'GET_ALL_USERS', payload:data});
    }
    const allUsersLoading = useUserInfosFetch(getAllUsers, 'getAllUsers', []);
    // {"users":["1Q2W3E4R","5T6Y7U8I","4R3E2W1Q","8I7U6Y5T","QAWSEDRF","TGYHUJIK","IKUJYHTG","RFEDWSQA"]}

/*
    const getUserInfos = (ownerData, renterData) => {
        userDetailDispatch({type:'GET_USER_DETAIL', payload:{owner: ownerData, renter: renterData}});
    }

    const GetUserDetail = () => {
        if(selected.did != null) {
            queryData(selected.did);
        }
    }
    
    // TODO : I want to move queryData function into hook.
    const queryData = async (did) => {
        const ownerURL = `http://10.112.164.147:8080/api/getOwnerInfos?owner=${selected.did}`;
        const ownerRes = await fetch(ownerURL);
        const ownerData = (ownerRes == null) ? ({owners: []}) : await ownerRes.json();
        // {"owners":[{"owner":"IKUJYHTG","vid":"8i7u6y5t"}]}

        const renterURL = `http://10.112.164.147:8080/api/getRenterInfos?renter=${selected.did}`;
        const renterRes = await fetch(renterURL);
        const renterData = (renterRes == null) ? ({renters: []}) : await renterRes.json();
        // {"renters":[{"renter":"IKUJYHTG","vid":"1q2w3e4r","lessor":"QAWSEDRF","starttime":1592000000,"endtime":1693000000,"ShareOTP":"sangchul"}]}

        getUserInfos(ownerData, renterData);
    }
*/

    const getOwnerInfos = (data) =>  {
        userDetailDispatch({type:'GET_OWNER_INFOS', payload:data});
    }
    const getRenterInfos = (data) =>  {
        userDetailDispatch({type:'GET_RENTER_INFOS', payload:data});
    }
    const GetOwnerInfos = () => {
        const loading = useUserInfosFetch(getOwnerInfos, 'getOwnerInfos', [selected.did]);
    }

    const GetRenterInfos = () => {
        const loading = useUserInfosFetch(getRenterInfos, 'getRenterInfos', [selected.did]);
    }

    useEffect( () => {
        console.log('allUsers 가 랜더링 되었습니다.', allUsers);
    }, [allUsers]);

    useEffect( () => {
        console.log('selected 가 랜더링 되었습니다.', selected);
        GetOwnerInfos();
        GetRenterInfos();
    }, [selected]);

    useEffect( () => {
        console.log('userDetail 가 랜더링 되었습니다.', userDetail);
    }, [userDetail]);

    return (
        <UserInfoContext.Provider value={ {allUsers, selected, userDetail, allUsersLoading, sellectedDisPath } }>
            {props.children}
        </UserInfoContext.Provider>
    );
}

export default UserInfoInquire;