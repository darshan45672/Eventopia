import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import markAttendance from '../../pages/api/api'
const FeedbackForm = ({ event, reg }) => {
  const [feedback, setFeedback] = useState('');
  const [attendanceCode, setAttendanceCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleAttendanceCodeChange = (e) => {
    setAttendanceCode(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (attendanceCode === event.attendanceCode) {
        const data = {
            feedback: feedback,
            isAttended: true,
          };
        
          axios.patch(`http://localhost:3000/api/eventRegistrations/${reg.id}`, data)
            .then((response) => {
                toast.success("Updated Successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            })
            .catch((error) => {
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
            });
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid attendance code');
    }
  };

  return (
    
        reg.isAttended ? (
        <div className="text-success">You have already marked your attendance</div>
        ) : (
            <Form>
            <FormGroup>
                <h1>{reg.isAttended}</h1>
              <Label for="feedback">Enter your feedback:</Label>
              <Input type="textarea" name="feedback" id="feedback" onChange={handleFeedbackChange} value={feedback} />
            </FormGroup>
            <FormGroup>
              <Label for="attendance-code">Enter attendance code:</Label>
              <Input type="text" name="attendance-code" id="attendance-code" onChange={handleAttendanceCodeChange} value={attendanceCode} />
            </FormGroup>
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        )
  );
};

export default FeedbackForm;