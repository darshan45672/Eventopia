import { Label,Input,Button,FormGroup  } from "reactstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect, useState } from "react";

import { postEvent } from "../../pages/api/api";

import { useAlert } from 'react-alert'

import {  useSession } from 'next-auth/react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AWSS3UploadAsh from 'aws-s3-upload-ash'
import { UploadResponse } from 'aws-s3-upload-ash/dist/types'

import { useS3Upload } from "next-s3-upload";


import { useQuery, gql, useMutation } from "@apollo/client";


const GET_CATEGORIES = gql`
query {
	categories{
    name
    id
  }
}
`;


const CreateEvent = (props) => {

    const alert = useAlert()
    const { data: session, status } = useSession()


    const { data, loading, error } = useQuery(GET_CATEGORIES);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [regEndDate, setRegEndDate] = useState(new Date());

    const [title, setTitle] = useState();
    const [venue, setVenue] = useState();
    const [description, setDescription] = useState();
    const [attendanceCode, setAttendanceCode] = useState("event123");
    const [eventType, setEventType] = useState("Individual");
    const [category, setCategory] = useState();


    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangeVenue = (e) => setVenue(e.target.value);
    const handleChangeDescription = (e) => setDescription(e.target.value);
    const handleAttendanceCodeChange = (e) => setAttendanceCode(e.target.value);
    const handleEventTypeChange = (e) => {
        console.log(e.target.value);
        setEventType(e.target.value)};
    const handleCategoryChange = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    };

    let [imageUrl, setImageUrl] = useState();
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    let handleFileChange = async file => {
        let { url } = await uploadToS3(file);
        setImageUrl(url);
      };
    


      const resetFields = () => {
        setTitle("");
        setVenue("");
        setDescription("");
        setImageUrl("");
        };


    const handleClick = () => {
        if (!title || !imageUrl || !venue || !startDate || !endDate || !description || !regEndDate || !eventType || !category) {
           
            console.log(title, imageUrl, venue, startDate, endDate, description, regEndDate, eventType, category);
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
        postEvent({
            title: title,
            img: imageUrl,
            venue: venue,
            startDate: startDate,
            endDate: endDate,
            registrationEndDate: regEndDate,
            description: description,
            eventType: eventType,
            attendanceCode: attendanceCode,
            category: {
                id: category
            },
            branch: {
                id: props.user.branch.id
              },
        }).then((res) => {

            props.onUpdate();
            toast.success("Event Created", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
                resetFields();

        }).catch((err) => {
            toast.error("Something went wrong", {
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
    }

    return (
        <div className="container">
        <ToastContainer />
        <div className="row">
            <div className="col-md-12">
                    <Label for="exampleEmail">
                    Event Title
                    </Label>
                    <Input
                    placeholder="Enter the Event title or name"
                    type="text"
                    value={title} onChange={handleChangeTitle}
                    />
                
                    <div className="row">
                         
                    <div className="col-md-12">
                    <FileInput onChange={handleFileChange} />

                        <button onClick={openFileDialog} className="btn-secondary mt-4 mb-2">Upload Event Image</button>

                        {imageUrl && <img src={imageUrl} className="img-fluid" />}
                    </div>
                    </div>


                    <div className="row">
                         
                         <div className="col-md-6">
                         <Label for="exampleEmail" className="mt-2">
                            Venue
                            </Label>
                            <Input
                            value={venue} onChange={handleChangeVenue}
                            placeholder="Enter the Venue"
                            type="text"
                            />
                         </div>
                         <div className="col-md-6">
                            <FormGroup>
                            <Label for="exampleSelect" >Category</Label>
                            <Input type="select" name="select" id="exampleSelect" value={category} onChange={handleCategoryChange}>
                            <option value="">Please select</option>
                               {
                                      data && data.categories.map((category) => {
                                        return (
                                            
                                          <option value={category.id}>{category.name}</option>
                                        )
                                      })
                               }
                            </Input>
                            </FormGroup>
                         </div>
                         <div className="col-md-6">
                            <FormGroup>
                            <Label for="simple-select">Event Type</Label>
                            <Input type="select" name="simple-select" id="simple-select" onChange={handleEventTypeChange}  value={eventType}>
                                <option value="Individual">Individual</option>
                                <option value="Team">Team</option>
                            </Input>
                            </FormGroup>
                         </div>
                         <div className="col-md-6">
                         <Label for="exampleEmail" className="mt-2">
                            Attendance Code
                            </Label>
                            <Input
                            value={attendanceCode} onChange={handleAttendanceCodeChange}
                            placeholder="Enter the Code"
                            type="text"
                            />
                         </div>
                    </div>

                 

                    <div className="row">
                        <div className="col-md-12">
                            <Label for="exampleEmail" className="mt-2">
                            Start Date
                            </Label>
                            <DatePicker selected={startDate} dateFormat='dd/MM/yyyy h:mm a'  showTimeSelect className="form-control" onChange={(date) => setStartDate(date)} />

                        </div>
                        <div className="col-md-12">
                        <Label for="exampleEmail" className="mt-2">
                        End Date
                        </Label>
                        <DatePicker selected={endDate}  dateFormat='dd/MM/yyyy h:mm a'  showTimeSelect className="form-control" onChange={(date) => setEndDate(date)} />

                        </div>
                        <div className="col-md-12">
                        <Label for="exampleEmail" className="mt-2">
                        Registration End Date
                        </Label>
                        <DatePicker selected={regEndDate}  dateFormat='dd/MM/yyyy h:mm a'  showTimeSelect className="form-control" onChange={(date) => setRegEndDate(date)} />

                        </div>
                    </div>
                
                     <Label for="exampleEmail" className="mt-2">
                    Description
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    value={description}
                    onChange={handleChangeDescription}
                    />

                <Button color="primary mt-3" onClick={() => handleClick()}>
                                Create Event
                </Button>
            </div>
        </div>
    </div>
    );
}

export default CreateEvent;