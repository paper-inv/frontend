import "./Dashboard.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return (
    <div>
      <h3>Hello world </h3>
    </div>
  );
};

export default Dashboard;
