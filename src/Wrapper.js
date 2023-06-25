import Card from "./components/Card.js";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";


function Wrapper() {
  return (
    <div className="Wrapper">

      <Header />

      <main className="container">

            <section className="hero">
                <div className="hero-wrapper">
                    <h1 className="hero-title"><span>Stan Smith</span>, <br></br>Forever!</h1>
                    <button className="hero-btn btn">Купить</button>
                </div>
                <img src="./img/hero-bg.png" alt="hero-bg" className="hero-bg"/>
                <img src="./img/hero-icon.png" alt="hero-icon" className="hero-icon"/>
            </section>

            <section className="catalog">

                <div className="catalog-head">
                    <h2 className="catalog-title">Все кроссовки</h2>
                    <div className="catalog-input-wrapper">
                        <input type="text" placeholder="Поиск..." className="catalog-input"/>
                    </div>
                </div>{/*catalog-head*/}

                <div className="catalog-cards">
                    <Card />
                    <Card />
                    <Card />
                </div>

            </section>
        </main>

        <Drawer />

    </div>/*Wrapper*/
  );
}

export default Wrapper;
