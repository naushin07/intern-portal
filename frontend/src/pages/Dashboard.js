import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/user").then((res) => setUser(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p><strong>Referral Code:</strong> {user.referralCode}</p>
        <p><strong>Total Donations:</strong> ₹{user.totalDonations}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">🎁 Rewards</h2>
        <ul className="list-disc pl-6">
          <li>Bronze – ₹500</li>
          <li>Silver – ₹1000</li>
          <li>Gold – ₹2000</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;