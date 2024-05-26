import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)  //user cz we need data not method i.e setUser
  
    if (!user) return <div>please login</div>
    return <div>welcome {user.username}</div>

}

export default Profile
