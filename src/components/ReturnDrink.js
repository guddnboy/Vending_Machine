import React from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";
import bearImg from "../img/drinks/beer.png";
import bluehawai from "../img/drinks/bluehawai.png";
import bubbletea from "../img/drinks/bubbletea.png";
import coke from "../img/drinks/coke.png";
import fanta from "../img/drinks/fanta.png";
import lemonade from "../img/drinks/lemonade.png";
import orangejuice from "../img/drinks/orangejuice.png";
import vita500 from "../img/drinks/vita500.png";

const ReturnDrink = ({
    insert,
    insertMoney,
    returnMoney,
    getMyDrinks,
    myDrinks,
}) => {
    const drinkImages = {
        맥주: bearImg,
        블루하와이: bluehawai,
        버블티: bubbletea,
        콜라: coke,
        환타: fanta,
        레몬에이드: lemonade,
        오렌지주스: orangejuice,
        비타500: vita500,
    };

    return (
        <div>
            <div className="money-display">
                <div className="insert-money">
                    <div className="display-insert">{insertMoney}</div>
                    <div className="insert-return">
                        <button onClick={insert}>
                            <img
                                src={insert_coin}
                                alt="insert"
                                width="45px"
                                height="45px"
                            />
                        </button>
                        <div
                            className="return-button"
                            onClick={returnMoney}></div>
                    </div>
                </div>
                <div className="present-money"></div>
            </div>
            <div className="drink-out-container">
                <div className="drink-out">
                    <button onClick={getMyDrinks}></button>
                </div>
                <div>
                    {myDrinks.map((drink, name) => (
                        <img
                            key={name}
                            src={drinkImages[drink.name]}
                            alt={drink.name}
                            width="45px"
                            height="45px"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReturnDrink;
