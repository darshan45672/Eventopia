import Image from "next/image";

import { useQuery, gql } from "@apollo/client";


import { Row, Col, Container, Card, CardBody,Spinner, CardHeader,CardText,CardTitle,Button } from "reactstrap";
import { Badge } from 'reactstrap';

import Link from "next/dist/client/link";


const BRANCHES_QUERY = gql`
{
  branches{
    id
    name
    img
    associationName
    events{
      title
      startDate
      endDate
      venue
      id
     
    }
  }
}
`;


const Branch = () => {

    const { data, loading, error } = useQuery(BRANCHES_QUERY);

    if (loading) return (
        <Row className="justify-content-center">
        <Col md="7" className="text-center mt-4">
        <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
  
    );
    if (error) return <pre>{error.message}</pre>


    return (
  
        <div className="spacer">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h2 className="title">Branches in our college</h2>
                {/* <h6 className="subtitle">
                  student can participet in any event and join or book the events according to there shedule join soon as possible
                </h6> */}
              </Col>
            </Row>
            <Row className="justify-content-left">
            {data.branches.map((branch) => (
          
  
             
                  <Col md="4" className="text-center">
                  
                        <Card
                       color="info"
                        className="my-2"
                        style={{
                            width: '18rem'
                        }}
                        >
                        <CardHeader className="text-white">
                        {branch.events.length}  Event(s)
                        </CardHeader>
                        <CardBody >
                          
                        {branch.img ? <Image src={branch.img} alt="wrapkit" 
              height="160" width="140"/> : <Image src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"  height="160" width="140" alt="wrapkit" />}

                            <CardTitle tag="h5" className="text-white">
                            {branch.name}
                            </CardTitle>
                            <div class="mb-2">
                            {
                              branch.associationName ? <Badge color="primary" pill>{branch.associationName}</Badge> : null
                            }
                           </div>
                            <Link href={ `/branch/${branch.id}`} >
                            <Button color="primary">
                           View Events
                            </Button>
                            </Link>
                        </CardBody>
                        </Card>
                  </Col>
              
  
                                
             
              )
              
              )}
                </Row>
              
          </Container>
        </div>
   
    );
}


export default Branch;
