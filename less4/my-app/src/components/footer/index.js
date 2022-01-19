import React from 'react';
import ButtonRequest from './buttonRequest';
import './style.css';

const Footer = () => {

    return(
        <footer className='footer'>
            <div className='wrapper footer__content'>
                <div>
                  <h2 className='footer__heading'>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
                    <h3 className='footer__text'>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ</h3>  
                </div>
                <ButtonRequest name='mail' img='./img/mail.svg' text='ВАШ ЗАПРОС'/>
            </div>
        </footer>
    );
};

export default Footer;
