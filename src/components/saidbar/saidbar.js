import React from 'react';
import ReactDom from 'react-dom';
import { Grid, Image } from 'semantic-ui-react'
import './saidbar.css';


const Saidbar = () => {
return (
  <div id="saidbar-item">
    <div className="temadnya"> Kun mazmuny</div>
    <div className="tema">
      <div className="saidbar-tema"> 
        <img src='/img/meiram.jpg' id="img1" />
        <img src='/img/zagipa2.jpg' id="img2" />
      </div>
      <div id="text1">
          <div >  Ортада қалыптасқан барлық мәселелер бойынша келіссөздер жүріп, 
            ортақ шешімге келдік. Біріншіден, менің заңды түрде
             басшы ретінде әділет органдарында тіркелуіме бұрынғы
              басшылық ешқандай кедергі келтірмейтін болды.   
</div>
      </div>
    </div>
    
    </div>
)

}


export default Saidbar;

