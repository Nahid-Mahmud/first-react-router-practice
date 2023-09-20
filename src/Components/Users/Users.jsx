import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
     <h2>Users data : {users.length}</h2>
     <h3>users name:</h3>
     <div className="grid gap-5 grid-cols-3 m-10 ">
       {users.map((user,index)=> <User key={index} user={user}></User>)}
     </div>
    </div>
  );
};

export default Users;
