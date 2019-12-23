import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderNightItem({fcampsite}) {
return (
    <Card>
        <Link to={`/night/${fcampsite.id}`}>
            <CardImg width="100%" src={fcampsite.image} alt={fcampsite.name} />
            <CardImgOverlay>
                <CardTitle>{fcampsite.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
    );
}

function Night(props) {

    const night = props.fcampsites.map(fcampsite => {
        return (
            <div key={fcampsite.id} className="col-md-4 m-4">
                <RenderNightItem fcampsite={fcampsite} />
            </div>
        );
    });
        
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Movie Nights</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Movie Nights</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {night}
            </div>
        </div>
    );
}


export default Night;