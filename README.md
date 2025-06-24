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

