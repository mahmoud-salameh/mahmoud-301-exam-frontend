import React, { Component } from 'react'
import { Card ,Button} from 'react-bootstrap'
export class Drinks extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${this.props.strDrinkThumb}`} />
  <Card.Body>
    <Card.Title>{this.props.strDrink}</Card.Title>
   
    <Button variant="primary" onClick={this.props.addToFav(this.props.index)}>Add To Favorite</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default Drinks
