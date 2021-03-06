import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";
import FriendsList from "./FriendsList";

function App() {
  const appContainer = {
    display: 'grid',
    gridTemplateColumns: '25vw 50vw 25vw',
    gridTemplateRow: 'repeat(8, 1fr)'
  }

  return (
    <div style={appContainer}>
      <Header/>
      <Profile/>
      <ProfileDescription/>
      <FriendsList/>
    </div>
  );
}

export default App;
