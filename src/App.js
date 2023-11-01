import React from 'react';
// importing our react class component 
import badr from './badr.jpg'

//photo import
import './style.css'
class App extends React.Component {
state = {  
  time : 0,
  show : false ,
    Person :
    
    
    {fullName : "Bguir Badreddine ",
     bio :"full Stack Developer",
     src: badr ,
     profession:"batal" }
    };

    // our component life cycle manipulation
     componentDidMount() {
      // using interval to repeat the increment to count timer
        setInterval(() =>{
          this.setState({time:this.state.time +1 })
      }, 1000);
       
    }
    // changing our show value function 
     HandleClick=({state}) => {

       this.state.show===false ? this.setState({show:true}):this.setState({show:false})
      }

      render()
  {
    return (
      <div style={{textAlign:"center"}}>
    
      <h1 id='tilte'>Am her  </h1>
      <button onClick={this.HandleClick} > show me </button>
       <h3 className='timer'>time spend :   {this.state.time} sec</h3>
        <div className="content">
       
       {/* our show condition if true button will show content 
       else content  will desapear*/}
        {
   this.state.show && (
     <div>
     <p><h1>{this.state.Person.fullName}</h1></p>
        <p>{this.state.Person.bio}</p>
        <p>{this.state.Person.profession}</p>
        <img src={this.state.Person.src} alt='myphoto' />
        </div>
      
    )}
      </div>
    </div>
    )   
}
}
export default App;
