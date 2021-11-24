import React, { Component } from 'react'
import PropTypes from 'prop-types'
import table2 from '../assets/tablesetting.jpg'

export class menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <div class="midsec">

                    <div>
                    <div className="rmid"><h3 className="catering">Our Menu</h3></div>
                    <div className="contets">
                    <div className = "mhead">
                    Bread Basket
                    </div>
                    <div className="mitem" >Assortment of fresh baked fruit breads and muffins 5.50</div>
                    </div>

                    <div className = "mhead">Honey Almond Granola with Fruits
                    </div>
                    <div className="mitem" >Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
                        </div>
                        
                        <div className = "mhead">Belgian Waffle
                    </div>
                    <div className="mitem" >Vanilla flavored batter with malted flour 7.50</div>
                        
                        <div className = "mhead">Scrambled eggs
                    </div>
                    <div className="mitem" >Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
                        </div>
</div>
                <img className="mImage" src= {table2}/>

                </div>
            </div>

        )
    }
}

export default menu
