import { useRouter } from 'next/router'

import EventRegistration from '../../../components/events/EventRegistration'

export default function EventRegistrationPage(){
    const router = useRouter()
    const { id } = router.query

    
    return(
        <div className="container">
           <EventRegistration eventId={id}/>
        </div>
    )
}