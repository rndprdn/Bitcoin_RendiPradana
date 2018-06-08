import React, { Component } from 'react';
import Price from './component/Price'
import rpToBtc from './component/rpToBtc'
import btcToRp from './component/btcToRp'

import { Route } from 'react-router-dom';


class App extends Component {
    
    render() {

     return (
        <div>

          <Route exact path="/" component={Price}/>
          <Route path="/rpToBtc" component={rpToBtc}/>
          <Route path="/btcToRp" component={btcToRp}/>

        </div>
        );
       }
     }
    

export default App;
