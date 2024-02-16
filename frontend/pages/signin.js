import React from 'react';

const SignIn = () => (
  <div className="container">
    <div className="blur-bg"></div>
    <div className="content">
      <h2 className="title">Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Sign In</button>
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
      </form>
      <div className="signup">
        Don't have an account? <a href="/registration">Sign up</a>
      </div>
    </div>
    <style jsx>{`
      /* CSS for sign-in page */
      .container {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .blur-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/bg-image.jpg');
        background-size: cover;
        background-position: center;
        filter: blur(10px);
        z-index: -1;
      }

      .content {
        max-width: 1200px;
        width: 1000px;
        padding: 20px;
        background-color: #f8f8f8;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1;
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

      input[type="email"],
      input[type="password"] {
        font-size: 16px;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #ccc;
        background-color: transparent;
        width: 100%;
        margin-top: 5px;
        transition: border-color 0.2s;
      }

      input[type="email"]:focus,
      input[type="password"]:focus {
        outline: none;
        border-color: #555;
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
        margin-top: 20px;
      }

      .btn:hover {
        background-color: #333;
      }

      .forgot-password {
        margin-top: 10px;
        text-align: center;
        font-size: 14px;
      }

      .signup {
        margin-top: 30px;
        text-align: center;
        font-size: 18px;
      }

      .signup a {
        color: #555;
        text-decoration: none;
        transition: color 0.2s;
        }

        .signup a:hover {
            color: #333;
          }
        `}</style>
          </div>
        );
        export default SignIn;
