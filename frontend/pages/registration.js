import Link from "next/link";

import { Row, Col, Container, Card, CardBody,Spinner,Input } from "reactstrap";

import { useQuery, gql, useMutation } from "@apollo/client";

import {signup} from './api/api'

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PasswordStrengthBar from 'react-password-strength-bar';

import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';

import ReCAPTCHA from "react-google-recaptcha";
import { signIn, useSession } from 'next-auth/react'



const BRANCHES_QUERY = gql`
{
  branches{
     name
     id
   }
 }
`;


const CREATE_USER = gql`
mutation createUser($data: UserCreateInput!) {
  data: createUser(data: $data) {
    branch {
      id
      __typename
    }
    createdAt
    email
    eventRegistrations {
      id
      __typename
    }
    firstName
    gender
    id
    lastName
    profilePath
    roles
    updatedAt
    username
    usn
    __typename
  }
}
`;

const Registration = () => {

  const { data, loading, error } = useQuery(BRANCHES_QUERY);
  const [createUser, { createUserLoading, createUserError }] = useMutation(CREATE_USER);


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("")

  const [isCapctcha, setIsCaptchaValidated] = useState(false)

  function onChange(value) {
    if(value){
    setIsCaptchaValidated(true)
    }else{
      setIsCaptchaValidated(false)
    }
  }

  
  if (loading) return (
      <Row className="justify-content-center">
      <Col md="7" className="text-center mt-4">
      <Spinner animation="border" variant="primary" />
      </Col>
    </Row>

  );
  if (error) return <pre>{error.message}</pre>


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(username, password, firstName, lastName, email, usn, branch, passwordAgain,gender);

    if (!username || !password || !firstName || !lastName || !email || !usn || !branch || !passwordAgain || !gender) {
           
      toast.error("Enter all fields", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      return;
    }

    if(!isCapctcha){
      toast.error("Please verify captcha", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
        return;
    }

    try {
      const { data } = await createUser({
        variables: {
          data: {
                branch: {
                    id: branch
                },
                "firstName": firstName,
                "gender": [gender],
                "lastName": lastName,
                "password": password,
                "roles": [
                  "user"
                ],
                "username": username,
                "usn": usn,
                "email": email
          },
        },
      });


        toast.success("User Created Successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })

          const result = await signIn("credentials", {
            username: username,
            password: password,
            redirect: true,
            // callbackUrl: "http://localhost:3006/",
            callbackUrl: `${window.location.origin}/login`,
          }).then((res) => {
            console.log(res);
          }).catch((err) => {
            alert(err);
          });
    } catch (err) {
      toast.error("Something Wrong", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }

  }
 

  const handleUsnBlur = (event) => {
    const value = event.target.value;
    const regex = /^4MT(18|19|20|21|22|23)(CS|EC|ME|CV|IS)\d{3}$/; // regex for a social security number in the format xxx-xx-xxxx

    if (regex.test(value)) {
      toast.success("Hurray! USN is valid", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }else{
            toast.error("Enter valid USN format", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  }

  return (
    <div className='container mt-4'>
         <ToastContainer />
    <div className='row mt-4'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>
       
        <div className='card shadow p-4'>
            <form onSubmit={handleSubmit}>
            <h4 className="text-center">Register</h4>
    <div className="row">
        <div class="col-md-6 form-outline mb-4">
        <label class="form-label" for="form2Example1">Username</label>
        <Input type="text" id="form2Example1" class="form-control" onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div class="col-md-6 form-outline mb-4">
      <label class="form-label" for="form2Example1">First Name</label>
        <input required type="text" id="form2Example1" class="form-control" onChange={(e) => setFirstName(e.target.value)} />
      </div>
    </div>
    <div className="row">
        <div class="col-md-6 form-outline mb-4">
        <label class="form-label" for="form2Example1">Last Name</label>
        <input required  type="text" id="form2Example1" class="form-control" onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div class="col-md-6 form-outline mb-4">
      <label class="form-label" for="form2Example1">USN</label>
      <input required type="text" id="form2Example1" class="form-control" onChange={(e) => setUsn(e.target.value)} onBlur={handleUsnBlur}/>
      </div>
    </div>
    <div className="row">
        <div class="col-md-6 form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
        <input required  type="email" id="form2Example1" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
 
      </div>
      <div class="col-md-6 form-outline mb-4">
      <label class="form-label" for="form2Example1">Select Your Branch</label>
    
      <Input required type="select" name="select" id="exampleSelect" onChange={(e) => setBranch(e.target.value)}>
      <option value="">Please select</option>
          {
            data.branches.map((branch) => (
              <option value={branch.id}>{branch.name}</option>
            ))
          }
          </Input>
      </div>
    </div>
    <div className="row">
      <div class="col-md-6 form-outline mb-4">
      <label class="form-label" for="form2Example1">Select Gender</label>
    
      <Input required type="select" name="select" id="exampleSelect" onChange={(e) => setGender(e.target.value)}>
      <option value="">Please select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
          </Input>
      </div>
    </div>

    <div className="row">
        <div class="col-md-6 form-outline">
        <label class="form-label" for="form2Example2">Password</label>
        <input required type="password" id="form2Example2" class="form-control" onChange={(e) => setPassword(e.target.value)}/>
    
 
      </div>
      <div class="col-md-6 form-outline">
      <label class="form-label" for="form2Example2">Password Again: </label>
      <input required type="password" id="form2Example2" class="form-control" onChange={(e) => setPasswordAgain(e.target.value)}/>
   
      </div>
    </div>



  <div class="form-outline mb-4">
  {/* <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordAgain}
				onChange={(isValid) => {}}
			/> */}

<FlexiPasswordChecklist password={password} 
                        confirmPassword={passwordAgain} 
                        config={{ matchPasswords : true }} 
/>     

<PasswordStrengthBar password={password} />

  </div>

  <div class="form-outline mb-4">
  <ReCAPTCHA
    sitekey="6LcCklobAAAAAAyyyznjhj82LjkE0UzWC5IHw1xb"
    onChange={onChange}
  />,
  </div>




  <button type="submit" class="btn btn-info btn-block mb-4" >Create Account</button>
  {createUserError && <p>{createUserError.message}</p>}

  <div class="text-center">
  <Link href={`/login`}>
      <p>Already a member? <a href="#!">Login</a></p>
  </Link>


  </div>
          </form>
        </div>
          
      </div>
      <div className='col-md-2'></div>
      </div>
  </div>
  );
};

export default Registration;
