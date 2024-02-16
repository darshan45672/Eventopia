import React from 'react'

const bookForm = () => (
  <div className="container">
    <h2 className="title">Game Registration Form</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" name="branch" required />
      </div>
      <div className="form-group">
        <label htmlFor="usn">USN:</label>
        <input type="text" id="usn" name="usn" required />
      </div>
      <div className="form-group">
        <label htmlFor="members">Total Members:</label>
        <input type="number" id="members" name="members" min="1" required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
      </div>
      <button type="submit" className="btn">Register</button>
    </form>
    <style jsx>{`
      /* CSS for registration form */
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .title {
        font-size: 36px;
        text-align: center;
        margin-bottom: 20px;
      }

      form {
        display: flex;
        flex-direction: column;
      }

      .form-group {
        margin-bottom: 20px;
      }

      label {
        font-size: 18px;
        margin-bottom: 5px;
        display: block;
      }

      input[type="text"],
      input[type="number"],
      input[type="tel"],
      textarea {
        font-size: 16px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f5f5f5;
        width: 100%;
        margin-top: 5px;
      }

      input[type="text"]:focus,
      input[type="number"]:focus,
      input[type="tel"]:focus,
      textarea:focus {
        outline: none;
        border-color: #555;
        background-color: #fff;
      }

      .btn {
        font-size: 18px;
        padding: 10px;
        background-color: #555;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .btn:hover {
        background-color: #333;
      }
    `}</style>
  </div>
)

export default bookForm;
