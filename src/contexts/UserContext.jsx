import { createContext, useState } from "react";

export const UserContext = createContext();

function getRandomUser() {
  const users = [
    "tickle122",
    "grumpy19",
    "happyamy2016",
    "cooljmessy",
    "weegembump",
    "jessjelly",
  ];
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getRandomUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
