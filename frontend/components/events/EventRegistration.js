    
    import { useQuery, gql } from "@apollo/client";
    import Moment from "react-moment";
    
    import { useRouter } from 'next/router'



    import Skeleton from 'react-loading-skeleton'
    import 'react-loading-skeleton/dist/skeleton.css'

    
export default function EventRegistration({eventId}) {
    const EVENT_QUERY = gql`
    query ($where: EventWhereUniqueInput!) {
        event(where:$where) {
          id
          img
          title
            description
            startDate
              endDate
              venue
          eventRegistrations{
              user{
              id
              email
              firstName
              lastName
            }
            teamMembers 
            isAttended
            createdAt
          }
        }
      }      
    `;
    const router = useRouter()
    const { id } = router.query

    const { data, refetch, loading, error } = useQuery(EVENT_QUERY, {
        variables: {
            "where": {
              "id": router.query.id
            }
          },
          fetchPolicy: 'cache-and-network'
      });



    if (loading)
    return (

        <Skeleton count={10}/>


   
    );

    return (
      <div className="container mt-4">
         <h3>Event name: {data.event.title}</h3>
         <h3>Registrations: {data.event.eventRegistrations.length}</h3>
   
        <table class="table mt-2">
       
        <thead class="bg-info text-white">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Team Members</th>
            <th scope="col">Attendance</th>
            <th scope="col">Registered Date</th>
            </tr>
        </thead>
        <tbody>
            {data.event.eventRegistrations.map((eventRegistration, index) => (
                <tr key={eventRegistration.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{eventRegistration.user.firstName} {eventRegistration.user.lastName}</td>
                    <td>{eventRegistration.user.email}</td>
                    <td>
                                                        {eventRegistration.teamMembers}
                                                    </td>
                    <td>
                                                        {eventRegistration.isAttended ? "Attended" : "Not Attended"}
                                                    </td>
                    <td><Moment format="DD/MM/YYYY">{eventRegistration.createdAt}</Moment></td>
                </tr>
            ))}
             </tbody>
        </table>
        </div>
    )
}