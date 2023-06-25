function Header () {
    return(
        <header className="header">
            <div className="header-logo">
                <img src="./img/logo.png" alt="logo" className="header-logo__img"/>
                <div className="header-logo__txt">
                    <p className="header-logo__name">REACT SNEAKERS</p>
                    <p className="header-logo__subtitle">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="header-profile">
                <div className="header-profile__cart">
                    <img src="./img/cart.svg" alt="cart" className="header-profile__cart-img"/>
                    <span className="header-profile__cart-price">1205 руб.</span>
                </div>
                <img src="./img/favorite.svg" alt="favorite" className="header-profile__favorite"/>
                <img src="./img/avatar.svg" alt="avatar" className="header-profile__avatar"/>
            </div>
        </header>
    );
}

export default Header;