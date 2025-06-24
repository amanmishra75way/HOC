✅ Common Use Cases of Higher-Order Components (HOCs)
1. Authentication / Access Control
Protect certain routes or components based on login status or user role.

jsx
Copy
Edit
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Component {...props} /> : <p>Please log in</p>;
  };
}
2. Code Reuse / Behavior Injection
Wrap components with shared behavior like logging, timing, etc.

jsx
Copy
Edit
function withLogger(Component) {
  return function Wrapped(props) {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}
3. Fetching and Injecting Data
Fetch data from an API and inject it into components as props.

jsx
Copy
Edit
function withUserData(Component) {
  return function Wrapped(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/api/user").then(res => res.json()).then(setUser);
    }, []);

    return <Component {...props} user={user} />;
  };
}
4. Feature Toggling / Permission Control
Render components based on feature flags or user permissions.

jsx
Copy
Edit
function withFeatureToggle(Component, flagName) {
  return function Wrapped(props) {
    const features = useContext(FeatureFlagContext);
    return features[flagName] ? <Component {...props} /> : <p>Feature disabled</p>;
  };
}
5. Theming or Styling Injection
Inject theme or styling-related props.

jsx
Copy
Edit
function withTheme(Component) {
  return function ThemedComponent(props) {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
}
6. Form Logic Sharing
Add validation, error handling, or form state to multiple components.

jsx
Copy
Edit
function withFormHandler(Component) {
  return function Wrapped(props) {
    const [values, setValues] = useState({});
    const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });

    return <Component {...props} formValues={values} onInputChange={handleChange} />;
  };
}
7. Wrapping Third-party Components
You can wrap external libraries with added logic, like animations, layout wrappers, etc.

jsx
Copy
Edit
function withBorder(Component) {
  return function Wrapped(props) {
    return <div style={{ border: "1px solid gray" }}><Component {...props} /></div>;
  };
}
🧠 When Not to Use HOCs
If you're using React hooks, it may be simpler to use custom hooks.

If you're only sharing styles, prefer styled-components or utility classes.

If you're creating UI layouts, use composition (children) instead.



# Render Props 

✅ What Are Render Props in React?
Render Props is a pattern in React where a component shares its logic with other components by passing a function as a prop — that function returns JSX.

📘 Definition
A render prop is a function prop that a component calls to know what to render.

🧠 Why Do We Use Render Props?
Code reuse: Share logic between components without duplicating code.

Separation of concerns: Separate logic (state, effects) from UI.

Flexibility: Let the parent decide what UI to render using shared logic.

🔧 Syntax Example
jsx
Copy
Edit
const MouseTracker = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};
Usage:
jsx
Copy
Edit
<MouseTracker render={({ x, y }) => (
  <h1>Mouse position: {x}, {y}</h1>
)} />
🧰 Common Use Cases for Render Props
Use Case	Description
✅ Mouse position tracking	Share logic about cursor position
✅ Form state handling	Manage form data and validation (e.g. FormHandler)
✅ Toggling UI	Show/hide components like modals, dropdowns, etc.
✅ Authentication status	Share login state and redirect logic
✅ Animation/state logic	Manage animation state or effects independently of the UI

📦 Real-World Example: Toggle
jsx
Copy
Edit
const Toggle = ({ render }) => {
  const [isOn, setIsOn] = React.useState(false);

  const toggle = () => setIsOn(!isOn);

  return render({ isOn, toggle });
};

// Usage
<Toggle render={({ isOn, toggle }) => (
  <div>
    <button onClick={toggle}>
      {isOn ? "Turn Off" : "Turn On"}
    </button>
    <p>Status: {isOn ? "ON" : "OFF"}</p>
  </div>
)} />
🆚 Render Props vs HOC vs Custom Hooks
Feature	Render Props	HOC	Custom Hook
API Style	Function as prop	Function that wraps a component	Hook function
Code reuse	✅	✅	✅
UI flexibility	✅ (very high)	Medium	Medium
Nesting/Readability	Can get deeply nested 🟠	Can become unreadable 🟠	✅ Clean & flat
Best for	Fine control of rendering	Wrapping behavior	Modern React apps

⚠️ Downsides of Render Props
Can lead to "prop drilling" or nested trees (callback hell-style) if overused.

Hooks are often a better modern alternative — use Render Props when you need to customize rendering based on shared logic.

✅ Summary
Render props = Function that returns UI, passed to a component.

Used to reuse logic while letting parent decide what to render.

Great for: mouse position, toggle state, auth, form state, etc.

Often replaced by custom hooks in modern React, but still useful.