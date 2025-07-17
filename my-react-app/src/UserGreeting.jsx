function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back, {props.username}!</h1>;
  } else {
    return <h1>Please log in to continue</h1>;
  }
}
export default UserGreeting;
