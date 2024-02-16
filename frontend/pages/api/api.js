
import axios from 'axios';

const url = "http://localhost:3000/api"


export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
}

export async function login(username, password) {
  const res = await axios.post(`${url}/login`, {
    username: username,
    password: password
  });
  return res.data;
}

export async function signup(form) {
  const res = await axios.post(`${url}/users`, form);
  return res.data;
}


export async function fetchSingleEvent(id){
  const res = await axios.get(
      `${url}/events/${id}`
  );
  
  return res.data;
};

export async function fetchUser(id){
  const res = await axios.get(
      `${url}/users/${id}`
  );
  
  return res.data;
}


export async function registerEvent(event_id, user_id, teamMembers){
  const res = await axios.post(`${url}/eventRegistrations`,
      {
          event: {
            id: event_id
          },
          user: {
            id: user_id
          },
          teamMembers: teamMembers
      },
  
  );


  
  return res.data;
}




export async function postEvent(form){
  const res = await axios.post(`${url}/events`, form,);
  return res.data;
}


export async function deleteEventRegistration(id){
  const res = await axios.delete(`${url}/eventRegistrations/${id}`);
  return res.data;
}


export async function markAttendance(id,feedback) {
  console.log(id,feedback);
  const data = {
    feedback: feedback,
    isAttended: true,
  };

  axios.patch(`/eventRegistrations/${id}`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};