

import React from "react"


class Counter extends React.Component{

    Increment=()=>{
        this.setState({
          count:this.state.count+1
        })
      }

      Reset=()=>{
          this.setState({
              count:0
            })
      }

      Decrement=()=>{
          this.setState({
              count:this.state.count-1
            })
      }
      state={
        count:0
    }
    render(){

       
       
        return(

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
              
              <h1>{this.state.count}</h1>

              <div style={{display:"flex",flexDirection:"row",margin:"13px"}}>
              <button onClick={this.Increment} style={{border:"1px solid black",backgroundColor:"blue",margin:"12px"}}>Increment</button>
              <button onClick={this.Reset} style={{border:"1px solid black",backgroundColor:"green",margin:"12px"}}> Reset </button>
              <button onClick={this.Decrement} style={{border:"1px solid black",backgroundColor:"orange",margin:"12px"}}>Decrement</button>

              </div>
             
              

            </div>
        )
    }
}
export default Counter