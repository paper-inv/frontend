import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import accountServices from "../services/account/accountServices";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState();

  const query = useQuery(["fetchUserDetails"], accountServices.profile, {
    retry: 0,
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.log("context error", error);
    },
    onSuccess: (response) => {
      console.log(response);
      if (response.status === 200) {
        setUserDetails(response?.data);
      } else {
        console.log("Error occurred");
      }
    },
  });

  if (query.isLoading) return <LoadingOutlined style={{ fontSize: "50px" }} />;

  return (
    <UserContext.Provider value={{ userDetails: { name: "henry" } }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
