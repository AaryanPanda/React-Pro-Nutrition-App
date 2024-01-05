/* eslint-disable react/prop-types */
import  { Component } from 'react'
import List from '../List/List'
import "./FoodBox.css"

export default class FoodBox extends Component {
  
  constructor(props){

    super(props)

    this.state={
        count:0,
        totalAmount:0
    }

  }
  

  handleCount = (e) =>{
    this.setState({count:e})
  }

  handleTotal = () =>{
    this.setState({totalAmount:this.state.count*this.props.food.cal})
  }

  handleReset = ()=>{
    this.setState({count:0,totalAmount:0})
  }
  
  
    render() {
    return (
      <div id='foodbox'>
        
        <img src={this.props.food.img}/>
        <div id='food-details' > 
            <p>{this.props.food.name}</p>
            <span>Calories: {this.props.food.cal}</span>
        </div>       
        

        <div id='row'>
            <input type='number' min={0} value={this.state.count} placeholder='Enter Count' onChange={(e)=> this.handleCount(e.target.value)}/>
            <button onClick={this.handleTotal}>+</button>
        </div>

        <List count={this.state.count} name={this.props.food.name} cal={this.props.food.cal} totalAmount={this.state.totalAmount} handleReset={this.handleReset}/>

      </div>
    )
  }
}