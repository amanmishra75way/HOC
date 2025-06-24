import React from "react";
import WithAuth from "./utils/WithAuth";
import Dashboard from "./components/Dashboard";
import Toggle from "./components/Toggle";
import FormHandler from "./FormHandler";

const App = () => {
  const data = {
    name: "Aman Mishra",
    age: 25,
  };
  // Using Higher order component
  const AuthDashboard = WithAuth(Dashboard);
  return (
    <>
      <div>
        <AuthDashboard data={data} />
      </div>

      {/* Using Render Props */}
      <Toggle
        render={() => <h1>This is a render prop modified from outside</h1>}
      />

      <Toggle
        render={() => {
          return (
            <div>
              <h1>This is another render prop modified from outside</h1>
              <p>It can be anything, even a component!</p>
            </div>
          );
        }}
      />

      <FormHandler
        render={({ data, errors, handlechange, handlesubmit }) => (
          <form onSubmit={handlesubmit}>
            <input type="text" name="username" onChange={handlechange} />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}

            <input type="password" name="password" onChange={handlechange} />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </>
  );
};

export default App;
