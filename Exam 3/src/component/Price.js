import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';



class Hariini extends Component {

  state = {
    dollarAusBuy: "",
    dollarAusSell:"" ,   
    euroBuy:"" ,        
    euroSell: "",    
    ponsBuy:"" ,        
    ponsSell: "",    
    yenBuy:"" ,        
    yenSell:"" ,  
    dollarAmrikBuy:"" ,
    dollarAmrikSell: "",  
  }

  componentDidMount(){
    axios.get('https://blockchain.info/ticker')
    .then((ambilData) => {     
      this.setState({
        dollarAusBuy: ambilData.data.AUD.buy.toFixed(2),
        dollarAusSell: ambilData.data.AUD.sell.toFixed(2),   
        euroBuy: ambilData.data.EUR.buy.toFixed(2),        
        eurojual: ambilData.data.EUR.sell.toFixed(2),    
        ponsBuy: ambilData.data.GBP.buy.toFixed(2),        
        ponsSell: ambilData.data.GBP.sell.toFixed(2),    
        yenBuy: ambilData.data.JPY.buy.toFixed(2),        
        yenSell: ambilData.data.JPY.sell.toFixed(2),  
        dollarAmrikBuy: ambilData.data.USD.buy.toFixed(2),
        dollarAmrikSell: ambilData.data.USD.sell.toFixed(2),                  
      })  
    })
  }
    
    
    render() {
     return (
        <div>

          <Navbar/>

          <div className="container">
            <h3 className="text-center"> Harga Bitcoin Hari Ini </h3>        
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Mata Uang </th>
                  <th> Harga Beli Bitcoin </th>
                  <th> Harga Jual Bitcoin </th>             
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dollar Australia</td>
                  <td>{this.state.dollarAusBuy}</td>
                  <td>{this.state.dollarAusSell}</td>     
                </tr>
                <tr>
                  <td>Euro Eropa</td>
                  <td>{this.state.euroBuy}</td>
                  <td>{this.state.eurojual}</td>
                </tr>
                <tr>
                  <td>Poundsterling Inggris</td>
                  <td>{this.state.ponsBuy}</td>
                  <td>{this.state.ponsSell}</td> 
                </tr>
                <tr>
                  <td>Yen Jepang</td>
                  <td>{this.state.yenBuy}</td>
                  <td>{this.state.yenSell}</td>                       
                </tr>
                <tr>
                  <td>Dollar Amerika</td>
                  <td>{this.state.dollarAmrikBuy}</td>
                  <td>{this.state.dollarAmrikSell}</td>                      
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        );
       }
     }
    

export default Hariini;
