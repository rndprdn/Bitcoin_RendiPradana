import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class rpToBtc extends Component {

  state = {
    input:null,
    inputNum:null,
  }
    

  onInputChange = e =>{
    this.setState({ inputNum:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value/14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {

      const{inputNum} = this.state;

     return (

        <div>
          <Navbar/>
          <center>
            
            <br/>
            <h3>Konversi Rupiah ke Bitcoin </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
              
            <br/>
            <input value = {inputNum} type="number" onInput={this.onInputChange} style={{width:'400px'}}/>
            <br/>

            { this.state.inputNum ? <h4>Rp {inputNum} &nbsp; BTC {this.state.hasil}</h4> :
              <div>
                <br/> 
                <h4>Silakan input nominal Rupiah</h4> 
              </div>
            }

          </center>

        </div>
        );
       }
     }
    

export default rpToBtc;
