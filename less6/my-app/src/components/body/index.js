import React from "react";

const Body = ({children}) => {

    return(
        <>
            <header className="background-white shadow-sm p-3 position-relative">
                <div className="container wrapper">
                    <div className="row">
                        <div className="col-md-2 col-6  d-flex align-items-center">
                            <a href="#">
                                <img src="./img/logo.svg" width="77" height="77" alt="logo"/>
                            </a>
                        </div>
                        <div className="col-md-7 col-12  d-flex align-items-center position-relative input">
                            <img className="position-absolute position-adress" src="./img/adress.svg" width="22" height="22" alt="adress"/>
                            <input className="border border-2 rounded input-header" type="text" list="cityList" placeholder="Вкажіть Ваше місто..."/>
                            <datalist id="cityList">
                                <option value="Київ" />
                                <option value="Харків" />
                                <option value="Одеса" />
                                <option value="Дніпро" />
                                <option value="Донецьк" />
                                <option value="Запоріжжя" />
                                <option value="Львів" />
                                <option value="Кривий Ріг" />
                                <option value="Миколаїв" />
                                <option value="Маріуполь" />
                                <option value="Луганськ" />
                                <option value="Вінниця" />
                                <option value="Макіївка" />
                                <option value="Херсон" />
                                <option value="Полтава" />
                                <option value="Чернігів" />
                                <option value="Черкаси" />
                                <option value="Житомир" />
                            </datalist>
                        </div>
                        <div className="col-md-3 col-6  d-flex align-items-center justify-content-end">
                            <button className="btn btn__header btn__header-orange shadow-sm" type="button">Увійти</button>
                            <button className="btn btn__header btn__header-green shadow-sm" type="button">Кошик</button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="background-white shadow-sm p-3">
                    <div className="container wrapper">
                        <h2 className="heading">Макдональдз</h2>
                    </div>
                </div>
                <div className="container wrapper">{children}</div>
            </main>
            <footer className="footer">
                <div className="container wrapper">
                    <div className="row">
                        <ul className="footer-manu col-12 col-md-6 list-unstyled d-flex my-4 py-2">
                            <li className="footer-list"><a className="text-decoration-none" href="#">Про нас</a></li>
                            <li className="footer-list"><a className="text-decoration-none" href="#">Контакти</a></li>
                            <li className="footer-list"><a className="text-decoration-none" href="#">Партнери</a></li>
                        </ul>
                        <ul className="footer-manu col-12 col-md-6 list-unstyled d-flex justify-content-end  my-4 py-2">
                            <li className="footer-social"><a href="#"><img src="./img/telegramm.svg" alt="telegramm" width="40" height="40"/></a></li>
                            <li className="footer-social"><a href="#"><img src="./img/facebook.svg" alt="facebook" width="40" height="40"/></a></li>
                            <li className="footer-social"><a href="#"><img src="./img/instagramm.svg" alt="instagramm" width="40" height="40"/></a></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Body;
