import axios from 'axios';
import React, {Component} from 'react';
import '../index.css';

//Tracked Items
import Cards from '../Items/Cards'

export default class TrackedItems extends Component {
    constructor(){
        super()
        this.state = {productsArry: []}
    }

    handleProduct(){
        axios.get('https://price-tracker-kent.herokuapp.com/products').then( (res) => {
            this.setState({ productsArry: res.data })
        }).catch(err => console.log(err))
    }

    componentDidMount(){
        this.handleProduct()
    }
    render(){
        return(
        <section id='cardsContainer'>
            <div className='container-fluid'>
                <div className='row'>
            
                    {this.state.productsArry.map((obj) => (
                     <div className='col'>
                        <div className='card'>
                            <Cards obj = {obj} key = {obj.id}/>
                        </div>
                     </div> 
                
                    ))}
                
                </div>
             </div> 
        </section>
        )
    }
}