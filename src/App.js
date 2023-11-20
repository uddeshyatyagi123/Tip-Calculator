import React, { Component  } from 'react'
// import PropTypes from 'prop-types'
import './App.css';

export default class App extends Component {
constructor(props){
  super(props)
  this.state={
     billAmount : [],
     custName:[],
     tipAmt:[0],

     currentBillAmount:"",
     currentCustName:'',
     currentTip:"0.20",

     
  }
}
handleClick(){
  var a=(this.state.currentBillAmount*this.state.currentTip)

  
  this.setState({...this.state , billAmount :[...this.state.billAmount,this.state.currentBillAmount],
    custName : [...this.state.custName,this.state.currentCustName],
     tipAmt :[...this.state.tipAmt,a]
  })
}
calculate(){
  this.setState({...this.state,finalTip:this.state.custName.length,
                finalCustomer:this.state.tipAmt.reduce((x,y) => x+y)})
}


render() {
  return (
    <>
      <div className="header">
       <h1>Tip Calculator</h1>
      </div>
      <div className="header" value="">
        <h3>Enter your bill Amount</h3>
        
          <input type="textarea"
           onChange={event=>this.setState({...this.State, currentBillAmount:event.target.value})}
          />
 
      </div>
      <div className="Center">
         
           <label htmlFor="Service">How was your Experience:</label>
           <select className="select" name="Service" id = "Service"
            onChange={e=>this.setState({...this.state,currentTip:e.target.value})}
           >
           <option value = "0.2">excellent</option>
           <option value = "0.15">moderate</option>
           <option value = "0.10">bad</option>
             </select>
        <input type="textarea" className="customer"
         onChange={e=>this.setState({...this.state,currentCustName:e.target.value})}
        />
           <button className="btn" onClick={()=>this.handleClick()}>Add customer</button>
       
      </div>
      <div className="customerlist">
      <div className="header2">
        <h3>Customer list</h3>
      </div>
      <div>
      <ul>
        {this.state.custName.map((item,Index) => <li key={Index} >{item} offering a tip of {this.state.tipAmt[Index+1]}</li>)}
        
      </ul>
      </div>
      </div>
      <div className="header">
      <button className="btn2" onClick={()=>this.calculate()}>Calculate customer and tips</button>
      </div>
      
      <table className="header3"  >
        <tr>
          <td>Total Customer</td>
          <td>Tip</td>
        </tr>
        <tr>
        <td>{this.state.finalTip}</td>
          <td>{this.state.finalCustomer}</td>
        </tr>
      </table>

      <div className="footer">
        @2023 TIP CALCULATOR
      </div>
      {/* <div>
        {console.log(this.state)}
      </div> */}
    </>
    )
  }
}



