import React from 'react';
import '../App.css';
import {IMAGES} from './shared/images';
import { Card, CardImg, CardBody,CardText, CardTitle} from 'reactstrap';

const images = IMAGES;

class Specialization extends React.Component  {
render(){

    return (
    <div className="row row-content" >
        <div className="col-3 col-sm-3 m-auto p-4 ">
            <Card className="bg-secondary" >
                <CardImg  variant="top" src={images.specialization1.image} />
                    <CardBody>
                        <CardTitle className="text-center">{images.specialization1.name}</CardTitle>
                        <CardText className="media-body align-self-center">
                        <p className="d-none d-md-block ">The process of developing the musculature of the body through specific types of diet and physical
                            exercise, such as weightlifting, especially for competitive exhibition.</p>
                        </CardText>
                    </CardBody>
            </Card>
        </div>
        <div className="col-3 col-sm-3 m-auto p-4">
            <Card className="bg-secondary">
                <CardImg  variant="top" src={images.specialization2.image} />
                    <CardBody>
                        <CardTitle className="text-center">{images.specialization1.name}</CardTitle>
                        <CardText className="media-body align-self-center">
                        <p className="d-none d-md-block ">The process of developing the musculature of the body through specific types of diet and physical
                            exercise, such as weightlifting, especially for competitive exhibition.</p>
                        </CardText>
                    </CardBody>
            </Card>
        </div>
        <div className="col-3 col-sm-3 m-auto p-4">
            <Card className="bg-secondary">
                <CardImg  variant="top" src={images.specialization3.image} />
                    <CardBody>
                        <CardTitle className="text-center">{images.specialization1.name}</CardTitle>
                        <CardText className="media-body align-self-center">
                        <p className="d-none d-md-block ">The process of developing the musculature of the body through specific types of diet and physical
                            exercise, such as weightlifting, especially for competitive exhibition.</p>
                        </CardText>
                    </CardBody>
            </Card>
        </div>
        <div className="col-3 col-sm-3 m-auto p-4">
            <Card className="bg-secondary">
                <CardImg  variant="top" src={images.specialization4.image} />
                    <CardBody>
                        <CardTitle className="text-center">{images.specialization1.name}</CardTitle>
                        <CardText className="media-body align-self-center">
                        <p className="d-none d-md-block ">The process of developing the musculature of the body through specific types of diet and physical
                            exercise, such as weightlifting, especially for competitive exhibition.</p>
                        </CardText>
                    </CardBody>
            </Card>
        </div>
     </div>
        
    );
 }
}

export default Specialization;