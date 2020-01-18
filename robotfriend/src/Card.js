import React from 'react';
import reactDom from 'react-dom';
import './Card.css';



const Card = ({name,email,id}) =>{
   
    return(
        <div id="cardComponent">
        <div className=' mw5 center bg-light-pink br3 pa3 pa4-ns mv3 ba b--black-10 grow shadow-5'>
            <img alt =" robotPhoto"src={`https://robohash.org/${id}`} className='br-100 h4 w4 dib ba b--black-05 pa2'/>
            <div>
    <h2 className="f3 mb2">{name}</h2>
                <p className="f5 fw4 gray mt0">{email}</p>
            </div>
        </div>
        </div>
    );
}
export default Card;