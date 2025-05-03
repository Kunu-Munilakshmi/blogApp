import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthProvider';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (!authData?.token) return;

    axios
      .get(`${BASE_URL}/api/v1/users/profile/me`, {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then((res) => {
        setProfile(res.data.data);
        setForm({
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone || '',
        });
      })
      .catch((err) => console.error('Error fetching profile:', err));
  }, [authData?.token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `${BASE_URL}/api/v1/users/${profile._id}`, // Adjust if your update endpoint differs
        form,
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );
      setProfile(res.data.data); // Update profile after successful save
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update profile.');
    }
  };

  if (!profile) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="w-3/4 mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">My Profile</h2>

      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-4"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-4"
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Phone"
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 flex flex-col items-center text-2xl ">
          <p><span className="font-semibold text-gray-700">Name:</span> {profile.name}</p>
          <p><span className="font-semibold text-gray-700">Email:</span> {profile.email}</p>
          <p><span className="font-semibold text-gray-700">Phone:</span> {profile.phone || 'N/A'}</p>
          <p><span className="font-semibold text-gray-700">Role:</span> {profile.role}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
