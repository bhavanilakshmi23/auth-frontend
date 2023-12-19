import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const LeadManagement = () => {
  const initialUsers = [
    { id: 1, name: 'Suvetha', email: 'Suvetha@gmail.com', phone: '9856784256', Status: 'Confirmed' },
    { id: 2, name: 'Kirithi', email: 'Kirithi@gmail.com', phone: '9889564456', Status: 'Qualified' },
  ];

 const options = ['New', 'Lost', 'Contacted', 'Canceled','Qualified','Confirmed']; 

  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', Status: '' });

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUser(userToEdit);
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUser.id ? editingUser : user
      )
    );
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  const handleInputChange = (e, isEditing = false) => {
    const targetUser = isEditing ? editingUser : newUser;
    const updatedUser = {
      ...targetUser,
      [e.target.name]: e.target.value,
    };

    if (isEditing) {
      setEditingUser(updatedUser);
    } else {
      setNewUser(updatedUser);
    }
  };

  const handleAdd = () => {
    const newUserWithId = {
      ...newUser,
      id: users.length + 1,
    };

    setUsers([...users, newUserWithId]);
    setNewUser({ name: '', email: '', phone: '', Status: '' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
     <Link to="/home" className="btn btn-warning w-auto  fs-5 p-2 fw-normal my-2 mx-5 text-center">Back</Link>
    <div className='d-flex flex-column bg-whitesmoke align-items-center m-50 p-20'>
     <h2 className='fst-italic'>LeadManagement</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editingUser.name}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    name="email"
                    value={editingUser.email}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    name="phone"
                    value={editingUser.phone}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <select
                    name="Status"
                    value={editingUser.Status}
                    onChange={(e) => handleInputChange(e, true)}
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  user.Status
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <>
                    <button onClick={handleSave} className=' btn btn-success'>Save</button>
                    <button onClick={handleCancel} className='btn btn-danger' >Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user.id)} className=' btn btn-success p-8 m-1'>Edit</button>
                    <button onClick={() => handleDelete(user.id)} className='btn btn-danger p-8 m-1'>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <div className='d-flex flex-column  my-7 p-10 w-50 h-75 bg-light '>
      <h2 className='text-center fst-italic'>Add New User</h2>
      <div className='mx-auto p-10 w-75'>
        <label className='mx-3 my-2'>Name:</label>
        <input type="text" name="name" value={newUser.name} onChange={(e) => handleInputChange(e)} />
      </div>
      <div className='mx-auto p-10 w-75'>
        <label className='mx-3 my-2'>Email:</label>
        <input type="text" name="email" value={newUser.email} onChange={(e) => handleInputChange(e)} />
      </div>
      <div className='mx-auto p-10 w-75'>
        <label className='mx-3 my-2'>Phone:</label>
        <input type="text" name="phone" value={newUser.phone} onChange={(e) => handleInputChange(e)} />
      </div>
      <div className='mx-auto p-10 w-75'>
        <label className='mx-3 my-2'>Status:</label>
        <select name="Status" value={newUser.Status} onChange={(e) => handleInputChange(e)}>
          <option value="">Select option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAdd} className='btn btn-primary p-1 w-75 mx-auto'>Add User</button>
      </div>
      </div>
      </>
  );
};

export default LeadManagement;




