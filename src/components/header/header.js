import React from 'react';
import ReactDOM from 'react-dom';

import './header.css';

const Header = () => {
    return (
      <div className="header-item" >
        <div className="header-item-1"> 
        <div className="poisk" >|Izdeu |Искать</div>
        <div className="tel">
          <span>tel 87079929094</span>
        </div>
        <div className="email">
          <span>e-mail: 390504@mail.ru </span>
        </div>
        </div>
        <div className="header-item-2"> 
        <div className="yur">Jastar</div>
        <div className="gaz">Agenttigi</div>
        </div>
        <div className="row">
            <div className="row1">basky bet/главная</div>
            <div className="row2">gazet/jurnal</div>
            <div className="row3">aidarlar/рубрики</div>
            <div className="row4">видеогалерея</div>
            <div className="row5">bailanys/контакты</div>
            <div className="row6">Прайс</div>
        </div>
        <div className="header-elen">
          <div className="etkizer"> 
          <button className="btn" >elen etizer|актуально</button>
        </div>
        <div className="form">
        Адам баласы қандай да бір болған жағдайдың өзі үшін жақсы әлде жаман екенін біле алмайды.
         </div>
          
        </div>
        
        </div>
      
    )
  }
  
  export default Header;
  