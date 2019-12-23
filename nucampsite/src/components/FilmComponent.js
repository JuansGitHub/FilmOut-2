import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFilmItem({campsite}) {
return (
    <Card>
        <Link to={`/film/${campsite.id}`}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
    );
}

function Film(props) {

    const film = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-4 m-0">
                <RenderFilmItem campsite={campsite} />
            </div>
        );
    });
        
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Film Club</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Film Club</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {film}
            </div>
        </div>
    );
}


export default Film;