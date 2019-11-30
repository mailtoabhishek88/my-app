import React, { useState, useEffect } from 'react';
const initProfile = {
    name: null,
    followers: null,
    users : []
}
const FetchExample = () => {

    const [userProfile, setUserProfile] = useState(initProfile);
    const [waiting, setWaiting] = useState(true);

    async function getUserProfile() {
        let userData = await fetch('https://jsonplaceholder.typicode.com/users');
        let profileData = await userData.json();
        if (profileData) {
            setUserProfile({
                users: profileData
            });
            setWaiting(false)
        }
    }
    //Will run after mounting - one time coz [] is blank
    useEffect(() => {
        getUserProfile();

        return (() => {
            console.log('clean up code')
        })
    }, [])

    return (
        <div>

            Fetch Example<hr />
            <div>
               {!waiting ? <span > Users List : <ul>{userProfile.users.map(user => {
                   return (<li key={user.id}><h3>{user.name}</h3></li>) })}</ul></span> : 'waiting'}
            </div>
        </div>
    );
};

export default FetchExample;