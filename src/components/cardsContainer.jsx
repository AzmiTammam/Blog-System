import React, { Component } from 'react'
import Cards from './cards';
import {Link} from 'react-router-dom'
export default class CardsContainer extends Component {

      render() {

            this.dataPosts = JSON.parse(localStorage.getItem("posts"));
            this.cards=this.dataPosts.map((item)=>     
            <Cards title={item.titlePost} img={item.imgPost} body={item.bodyPost}/>
            )
      
            return (
                  <div className="cardsContainer">
                       {this.cards} 
                       <Link to="/Admin" className="text-decoration-none" >Admin Panel</Link>
                  </div>
            )
      }
}
