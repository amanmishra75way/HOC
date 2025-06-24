import React from "react";
import WithAuth from "./utils/WithAuth";
import Dashboard from "./components/Dashboard";

const App = () => {
  const data = {
    name: "Aman Mishra",
    age: 25,
  };
  const AuthDashboard = WithAuth(Dashboard);
  return (
    <div>
      <AuthDashboard data={data} />
    </div>
  );
};

export default App;
