import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

let arr = [
    {
        title: 'Nike Blazer Mid Suede',
        imgUrl: "./img/sneakers-card/sneakers-1.png",
        price: "12 999"
    },

    {
        title: 'Nike Air Max 270',
        imgUrl: "./img/sneakers-card/sneakers-2.png",
        price: "12 999"
    },

    {
        title: 'Nike Blazer Mid Suede',
        imgUrl: "./img/sneakers-card/sneakers-3.png",
        price: "8 499"
    },

    {
        title: 'Nike Blazer Mid Suede',
        imgUrl: "./img/sneakers-card/sneakers-4.png",
        price: "8 499"
    },

    {
        title: 'Nike Blazer Mid Suede',
        imgUrl: "./img/sneakers-card/sneakers-5.png",
        price: "8 499"
    },

    {
        title: 'Nike Blazer Mid Suede',
        imgUrl: "./img/sneakers-card/sneakers-6.png",
        price: "8 499"
    },
]

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
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            imgUrl={obj.imgUrl}
                            price={obj.price}
                        />
                    ))}
                </div>

            </section>
        </main>

        <Drawer />

    </div>/*Wrapper*/
  );
}

export default Wrapper;
