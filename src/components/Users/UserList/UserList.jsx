import React from "react";
import styles from './UserList.module.css'
import Card from "../../UI/Card/Card";
const UserList = (props) =>{
    // Userlist is imported in App.jsx
    return(
        <Card className={styles.users}>
            <ul>
                {
                    props.users.map(user=>(
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default UserList