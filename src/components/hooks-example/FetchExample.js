import React, { useState, useEffect } from 'react';
const initProfile = {
    name: null,
    followers: null
}
const FetchExample = () => {

    const [userProfile, setUserProfile] = useState(initProfile);
    const [waiting, setWaiting] = useState(true);

    async function getUserProfile() {
        let userData = await fetch('https://api.github.com/users/mailtoabhishek88');
        let profileData = await userData.json();
        if (profileData) {
            setUserProfile({
                name: profileData.name
            });
            setWaiting(false)
        }

    }

    useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <div>

            Fetch Example<hr />
            <div>
               {!waiting ? <span > Name : {userProfile.name}</span> : 'waiting'}
            </div>
        </div>
    );
};

export default FetchExample;