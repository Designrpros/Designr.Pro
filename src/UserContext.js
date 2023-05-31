import { createContext } from 'react';

// Create a context for user data
const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default UserContext;
