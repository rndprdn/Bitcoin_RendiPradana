import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    
    render() {
     return (
        <div>
          <center>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KFhvzigwmtyAUafx69Msh7ZLLNfFnIPKBoFqIZzE_N1NM7lB" style={{width:"541px", height:"100px", paddingTop:"20px"}}/>

            <nav className="navbar navbar-default" style={{marginTop: 30}}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{marginLeft: 450}}>
                  <ul className="nav navbar-nav">
                    <li role="presentation"><Link to="/">Bitcoin Hari Ini</Link></li>
                    <li role="presentation"><Link to="rpToBtc">Rupiah to Bitcoin</Link></li>
                    <li role="presentation"><Link to="btcToRp">Bitocin to Rupiah</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
           </center>
        </div>
        );
       }
     }
    

export default Navbar;
