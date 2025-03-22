


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const LOGIN_URL = "https://reqres.in/api/login";  // Fake API for login
// const USERS_URL = "https://reqres.in/api/users";  // Fake API for users

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: "", job: "" });
//   const [authToken, setAuthToken] = useState(localStorage.getItem("token") || "");
//   const [loginData, setLoginData] = useState({ email: "eve.holt@reqres.in", password: "cityslicka" });
//   const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

//   // ✅ Fake API Login (POST request)
//   const login = async () => {
//     try {
//       const response = await axios.post(LOGIN_URL, loginData);
//       localStorage.setItem("token", response.data.token);
//       setAuthToken(response.data.token);
//       setIsAuthenticated(true);
//       alert("Login Successful!");
//     } catch (error) {
//       alert("Login Failed! Check your email and password.");
//       console.error("Login Error:", error);
//     }
//   };

//   // ✅ Fetch Users (GET request)
//   const fetchUsers = async () => {
//     if (!authToken) return;
//     try {
//       const response = await axios.get(USERS_URL, {
//         headers: { Authorization: `Bearer ${authToken}` },
//       });
//       setUsers(response.data.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // ✅ Add User (POST request)
//   const addUser = async () => {
//     if (!newUser.name || !newUser.job) {
//       alert("Please enter name and job");
//       return;
//     }

//     try {
//       const response = await axios.post(USERS_URL, newUser, {
//         headers: { Authorization: `Bearer ${authToken}` },
//       });
//       setUsers([...users, { ...newUser, id: response.data.id }]);
//       setNewUser({ name: "", job: "" });
//       alert("User added successfully");
//     } catch (error) {
//       console.error("Error adding user:", error);
//     }
//   };

//   // ✅ Delete User (DELETE request)
//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     try {
//       await axios.delete(`${USERS_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${authToken}` },
//       });
//       setUsers(users.filter((user) => user.id !== id));
//       alert("User deleted successfully");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // ✅ Logout Function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setAuthToken("");
//     setIsAuthenticated(false);
//     setUsers([]);
//   };

//   // ✅ Load users after login
//   useEffect(() => {
//     if (isAuthenticated) fetchUsers();
//   }, [isAuthenticated]);

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
//       {!isAuthenticated ? (
//         <div>
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={loginData.email}
//             onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={loginData.password}
//             onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//           />
//           <button onClick={login} style={{ margin: "10px" }}>Login</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={logout} style={{ marginBottom: "20px" }}>Logout</button>
//           <h1>Manage Users</h1>

//           {/* Add User */}
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={newUser.name}
//               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Job"
//               value={newUser.job}
//               onChange={(e) => setNewUser({ ...newUser, job: e.target.value })}
//             />
//             <button onClick={addUser} style={{ margin: "10px" }}>Add User</button>
//           </div>

//           {/* User List */}
//           <ul>
//             {users.map((user) => (
//               <li key={user.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <span>{user.first_name || user.name} - {user.job || "N/A"}</span>
//                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



import Posts from "./Posts";

function App() {
  return (
    <div>
      <h1>Social Media Analytics</h1>
      <Posts />
    </div>
  );
}

export default App;
