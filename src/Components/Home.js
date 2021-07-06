import axios from 'axios'
import React, { Component } from 'react'
import Drinks from './Drinks'

export class Home extends Component {
   constructor (props) {
       super(props)
       this.state = { DrinksData:[]} 
   }

  
   componentDidMount() {
    const server = 'http://localhost:8080/getData';
    axios.get(server).then(data => {
       
        this.setState({
        
            DrinksData: data.data
        })    
    }).catch(error  =>{
        console.log(error)
        
    })
    
}

addFav = (index) => {
    const items = {strDrink:this.state.DrinksData[index].strDrink, 
        strDrinkThumb: this.state.DrinksData[index].strDrinkThumb
    }
console.log(items)

const server = 'http://localhost:8080/addData'

axios.post(server ,items)

}
    render() {  
        return (
            <div>
              
                {/* {console.log(this.state)} */}
                {this.state.DrinksData.length > 0 &&
                this.state.DrinksData.map((drink, index) => {
                    return(
                        
                        <Drinks
                        strDrink = {drink.strDrink}
                        strDrinkThumb = {drink.strDrinkThumb}
                        index={index}
                        addToFav= {this.addFav}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Home
