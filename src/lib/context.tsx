import { createContext, createSignal, useContext } from "solid-js";

const UserContext = createContext();

export function UserProvider(props: any) {
  const [userData, setUserData] = createSignal(props),
    setUser = [
      userData,
      {
        setuserName() {
          setUserData(userData);
        },
      },
    ];

  return (
    <UserContext.Provider value={userData}>{props.children}</UserContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserContext);
}
