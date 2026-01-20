import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "../styles/ConfirmationModal.css"; // Reusing modal styles if possible or define inline

const EditProfileModal = ({ isOpen, onClose, userInfo, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        username: localStorage.getItem("username") || "",
        firstName: localStorage.getItem("firstName") || "",
        lastName: localStorage.getItem("lastName") || "",
        email: localStorage.getItem("email") || "",
        phoneNumber: localStorage.getItem("phoneNumber") || "",
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call / Local update
    localStorage.setItem("username", formData.username);
    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("phoneNumber", formData.phoneNumber);

    onUpdate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '500px', width: '90%' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-header">
          <h3>Edit Profile</h3>
          <p>Update your personal information.</p>
        </div>
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
           <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div className="modal-actions" style={{ marginTop: '20px' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
