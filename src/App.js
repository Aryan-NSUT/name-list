import React,{useState} from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';
function App() {
  const [userList, setuserList] = useState([])
  const addUserHandler = (userName,userAge) =>{
    setuserList((prevuserList)=>{
      return [...prevuserList,{name: userName,age: userAge,id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
