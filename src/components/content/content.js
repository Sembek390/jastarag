import React from 'react';
import ReactDOM from 'react-dom';

import './content.css';

const Content = () => {
    return (
        <div className="content-item">
            <div>
            <div className="novosti"> Janalyktar</div>
            <div className="janalik">
            <div>
                <img src='/img/suret1.jpg' className="img-thumbnail" />
            </div>
            <div className="text-novos1">
                <p>
                Елордада тағы да мешіт салынбақшы.
             Биіктігі 130 метр, 4 бағаналы болады екен. 
             Құрылысы 2021 жылы аяқталады деп жоспарлануда.
              Жалпы мұсылман болып бетіңді Қағбаға бұрып,
               жығылып 5 уақыт намаз оқыған дұрыс қой.
                </p>
                </div>    
            </div>
            <div className="janalik">
            <div>
                <img src='/img/suret.jpg' className="img-thumbnail" />
            </div>
            <div className="text-novos1">
                <p>
                Лайнер, выполнявший регулярный рейс по маршруту Алматы – Нур-Султан, 
                при взлете не смог набрать высоту, вышел из-под контроля,
                 пробил бетонное ограждение аэродрома и врезался в двухэтажное строение.
                  </p>
                </div>    
            </div>
            <div className="janalik">
            <div>
                <img src='/img/suret2.jpg' className="img-thumbnail" />
            </div>
            <div className="text-novos1">
                <p>
                Президент Казахстана Касым-Жомарт Токаев подписал Закон
                 "О внесении изменений и дополнений в некоторые законодательные акты РК
                  по вопросам совершенствования законодательства"
                </p>
                </div>    
            </div>
            </div>
        </div>
    )
}

export default Content; 