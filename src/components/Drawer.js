function Drawer () {
    return(
        <div className="drawer">
            <div className="drawer-wrapper">
                <div className="drawer-cart">
                    <h3 className="drawer-cart-title">Корзина</h3>
                    <div className="drawer-cart-cards">
                        <div className="Cart drawer-cart-item">
                            <img src="./img/sneakers-card/sneakers-1.png" className="drawer-cart-item__img"/>
                            <div className="drawer-cart-item__txt">
                                <p className="drawer-cart-item__txt-ru">Мужские Кроссовки</p>
                                <p className="drawer-cart-item__txt-en">Nike Air Max 270</p>
                                <div className="drawer-cart-item__price">12 999 руб.</div>
                            </div>
                            <div className="drawer-cart-item__close">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.61539 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#B5B5B5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-cart-checkout">
                        <div className="drawer-cart-checkout__total">
                            <p>Итого: </p>
                            <span>21 498 руб. </span>
                        </div>
                        <div className="drawer-cart-checkout__tax">
                            <p>Налог 5%: </p>
                            <span>1074 руб. </span>
                        </div>
                        <button className="drawer-cart-checkout__button">Оформить заказ</button>
                    </div>
                </div>
                <div className="drawer-empty">
                    <h3 className="drawer-empty-title">Корзина</h3>
                    <div className="drawer-empty-wrapper">
                        <img src="./img/empty-cart.png" alt="empty-cart" className="drawer-empty-img"/>
                        <h3 className="drawer-empty-caption">Корзина пустая</h3>
                        <p className="drawer-empty-description">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="drawer-empty-checkout__button">Вернуться назад</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;