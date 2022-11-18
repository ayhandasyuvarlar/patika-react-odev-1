import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios"

export default function UserDetails() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        setUserDetails(result.data);
      })
      .catch((error) => {
        setUserDetails(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div style={{ width: "250px", margin: "20px" }}>
      {isLoading && "Loading"}
      {JSON.stringify(userDetails)}
      <br />
      <br />
      {!isLoading && (
        <Link style={{ color: "gray" }} to={`/users/${parseInt(id) + 1}`}>
          {parseInt(id) < 10 ? "Next" : ""}
        </Link>
      )}
      <Link style={{ color: "gray" }} to={`/users/${parseInt(id) - 1}`}>
        {parseInt(id) >= 10 ? "prev" : ""}
      </Link>
    </div>
  );
}
