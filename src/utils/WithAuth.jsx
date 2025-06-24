import React from "react";

function WithAuth(Component) {
  const isAuthenticated = false;

  return function AuthComponent(props) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <p>Please log in to continue.</p>;
    }
  };
}

export default WithAuth;
