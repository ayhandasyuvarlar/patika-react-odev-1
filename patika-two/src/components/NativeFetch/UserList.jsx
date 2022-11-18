import React, { useEffect, useState  , useMatches} from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUserList(res);
      })
      .catch((e) => {
        setUserList(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div>{isLoading && "Loadinggg"}</div>
      
      <div>
        {userList.map((item) => {
          return <Link to={`/users/${item.id}`}>{item.name}</Link>;
        })}
      </div>
    </div>
  );
}
