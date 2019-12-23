import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderFcampsite({fcampsite}){
            return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={fcampsite.image} alt={fcampsite.name} />
                    <CardBody>
                        <CardText>{fcampsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
    }
    
    function RenderFcomments({fcomments}) {
        if (fcomments) {
            return (
                <div className="col-md-5 m-1">
                <h4> Fcomments </h4>
                {fcomments.map(fcomment => {
                    return (
                    <div key={fcomment.id}>
                        <p>{fcomment.text}<br />
                    -- {fcomment.author},{" "} 
                    {new Intl.DateTimeFormat('en-US', { year: 
                        'numeric', month: 'short', day: '2-digit'}).format(new Date
                        (Date.parse(fcomment.date)))}</p>
                    </div>
                    );
                        })}
                    </div>
                    );        
                }
                return <div />
            }
            function FcampsiteInfo(props) {
                if (props.fcampsite) {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to="/night">Movie Night</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>{props.fcampsite.name}</BreadcrumbItem>
                                    </Breadcrumb>
                                    <h2>{props.fcampsite.name}</h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <RenderFcampsite fcampsite={props.fcampsite} />
                                <RenderFcomments fcomments={props.fcomments} />
                            </div>
                        </div>
                    );
                }
                return <div />;
            }


export default FcampsiteInfo;