import React, { Component } from 'react'
import PropTypes from 'prop-types'
import table from '../assets/tablesetting2.jpg'

export class mainMid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
            return (
                <div>
            <div class="midsec">
                <img className="midImage" src= {table}/>
                <div className="rmid"><h3 className="catering">About Catering</h3>

                <h2 className="tradition">Tradition since 1889</h2>
                <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute iruredolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    We only use seasonal ingredients.</p>
              
              <p> Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
                  sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>  
                  </div>
               </div>   
                  <hr></hr>
            </div>
        )
    }
}

export default mainMid
