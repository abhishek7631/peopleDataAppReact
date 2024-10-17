// src/pages/Overview.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import MemberCard from "../components/MemberCard";

function Overview() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://66fb96308583ac93b40c4e65.mockapi.io/api/menu")
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default Overview;
