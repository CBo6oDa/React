import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';

class Detail extends Component{
    
    constructor(props){
        super(props);
    }
    
    renderDish(dish) {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish.comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        }  
                        )}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        return(  
            <div className="container">
                <div className="row justify-content-center">
                        {this.renderDish(this.props.selectedDish)}
                        {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Detail;