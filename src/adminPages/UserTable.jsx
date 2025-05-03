import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthProvider';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (!authData?.token) return;

    axios
      .get(`${BASE_URL}/api/v1/users/allusers`, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => console.log('Error:', error.message));
  }, [authData?.token]);

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone Number</th>
              <th className="py-3 px-4 text-left">Address</th>

            </tr>
          </thead>
          <tbody className='border'>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone || 'N/A'}</td>
                <td className="py-3 px-4"><p>AchieversIT,Ayyappa Layout</p> <p>Marathahalli, Bangalore</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
