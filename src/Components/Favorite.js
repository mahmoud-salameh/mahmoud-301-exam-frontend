import axios from 'axios';
import React, { Component } from 'react'
import FavData from './FavData';

export class Favorite extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
            favData:[],
            index:0,
            strDrink:'',
            strDrinkThumb:'',
            showForm:false,


        }
    }

    componentDidMount() {
        const server = 'http://localhost:8080/getFav';
        axios.get(server).then(data => {
            this.setState = {
                favData:data.data
            }
        }).catch(error =>{
            console.log(error)
        })
    }
    
    deleteFav = (index) => {
const server = 'http://localhost:8080/deleteFav';
const object = {id: this.state.favData[index]._id}
axios.delete(`${server}`, {params: object }).then(response => {
    this.state({
        favData: response.data
    })
}).catch()
    }


    showUpdate = (index) => {
        this.setState({
            showForm: true ,
            index: index,
            strDrink: this.state.favData[index].strDrink,
            strDrinkThumb: this.state.favData[index].strDrinkThumb,

        })


    }

    

  
    render() {
        return (
            <div>
                 {this.state.favData.length > 0 &&
                this.state.DrinksData.map((drink, index) => {
                    return(
                        
                        <FavData
                        strDrink = {drink.strDrink}
                        strDrinkThumb = {drink.strDrinkThumb}
                        index={index}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Favorite
