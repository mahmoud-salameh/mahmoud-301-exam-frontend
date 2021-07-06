import React, { Component } from 'react'
import { Card ,Button} from 'react-bootstrap'
export class FavData extends Component {
    render() {
        return (
            <div>
                   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${this.props.strDrinkThumb}`} />
  <Card.Body>
    <Card.Title>{this.props.strDrink}</Card.Title>
   
    <Button variant="primary" onClick={this.props.deleteFav(this.props.index)}>Delete From Favorite</Button>
    <Button variant="primary" onClick={this.props.showUpdate(this.props.index)}>Show Form</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default FavData
