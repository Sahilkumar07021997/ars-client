import React, { useState } from "react";
import userApi from "../../../api/users";
const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const _getAllUsers = async () => {
    const result = await userApi.getAllUsersList();
    if (result.ok && result.data){
      setLoading(false);
      return result.data;
    }
  };

  const _onClickHandlerAllUsers = (args) => {
    setLoading(true);
    setUsers(_getAllUsers());
    console.log("All users clicked!");
  };

  const _onClickHandlerUserbyId = (args) => {
    console.log("All users clicked!");
  };

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users button-container">
        <button onClick={_onClickHandlerAllUsers}>All Users</button>
        <button onClick={_onClickHandlerUserbyId}>User By Id</button>
      </div>
      <div className="users description-container">
      
      </div>
    </div>
  );
};


export default Users;
