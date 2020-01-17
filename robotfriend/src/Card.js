import React from 'react';
import reactDom from 'react-dom';
import Yorkie from './Yorkie.jpg';


const Card = () =>{
    return(
        <div className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <img alt =" robotPhoto"src={'${Yorkie}'} className='br-100 h4 w4 dib ba b--black-05 pa2'/>
            <div>
                <h2 className="f3 mb2">Jane Doe</h2>
                <p className="f5 fw4 gray mt0">jane.doe@gmail.com</p>
            </div>
        </div>
    );
}
export default Card;