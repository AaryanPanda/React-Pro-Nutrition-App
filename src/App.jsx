import {Component} from 'react'
import './App.css'
import FoodBox from './Components/FoodBox/FoodBox.jsx'
import FoodData from './Components/FoodData.js'
import Search from './Components/Search/Search.jsx'

class App extends Component{

constructor(props){

  super(props)

  this.state={
    search:""
  }

}

  handleSearch=(info)=>{
    this.setState({search:info})
  }

  render(){

    return(
      <>

      <Search handleSearch={this.handleSearch}/>

      {
      
      FoodData.filter((el)=>{
        if(this.state.search==""){
          return el
        }else if(el.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())){
          return el
        }
      })
      
       
        .map((el)=>{
        return <div key={el.id}>
        <FoodBox food={el} count={this.count}/>
        </div>
    
        })
      } 
      
      
      </>

  )
}

}

export default App