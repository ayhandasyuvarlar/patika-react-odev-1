import React from "react";
import PropTypes from "prop-types";

function User({ name, lastName, IsLoggedIn, isLogout }) {
  if (!isLogout) {
    return <div>Logout</div>;
  }
  return (
    <div>
      {IsLoggedIn === true ? (
        <p>
          {name} , {lastName}
        </p>
      ) : (
        "Kullanici bulunamadi"
      )}
    </div>
  );
}

User.protoTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  IsLoggedIn: PropTypes.bool,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

User.defaultProps = {
  isLogout: true,
};
export default User;

// PropTypes  ,  shape , isRequired , onOfType  , defaultProps
