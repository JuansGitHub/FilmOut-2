import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
function RenderCard({item}) {
    return (
        <Card body outline color="danger" text="white" style={{ width: '' }} style={{ height: '90%'}}>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.moviesites} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.membersites} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.eventsites} />
                </div>
            </div>
        </div>
    );
}

export default Home;  