import React from "react";
import bearImg from "../img/drinks/beer.png";
import bluehawai from "../img/drinks/bluehawai.png";
import bubbletea from "../img/drinks/bubbletea.png";
import coke from "../img/drinks/coke.png";
import fanta from "../img/drinks/fanta.png";
import lemonade from "../img/drinks/lemonade.png";
import orangejuice from "../img/drinks/orangejuice.png";
import vita500 from "../img/drinks/vita500.png";
import "../css/drinks.css";
import "../css/VendingMachine.css";
import { useState } from "react";

const DrinkList = ({ insertMoney, setInsertMoney }) => {
    const drinks = [
        { img: bearImg, name: "맥주", price: 3000 },
        { img: bluehawai, name: "블루하와이", price: 2000 },
        { img: bubbletea, name: "버블티", price: 2500 },
        { img: coke, name: "콜라", price: 1500 },
        { img: fanta, name: "환타", price: 1500 },
        { img: lemonade, name: "레모네이드", price: 2000 },
        { img: orangejuice, name: "오렌지주스", price: 1800 },
        { img: vita500, name: "비타500", price: 1200 },
    ];

    const [selectedDrinks] = useState([]);

    function buyDrink(drink) {
        if (insertMoney >= drink.price) {
            setInsertMoney((insertMoney) => insertMoney - drink.price);
            console.log(drink);
            selectedDrinks.push(drink);
            console.log(selectedDrinks);
        } else {
            console.log(drink.price, insertMoney);
            alert("보유 금액이 부족합니다.");
        }
    }

    return (
        <div className="drink-list-container">
            <div className="drink-list">
                <div className="drink-list">
                    {drinks.map((drink, name) => (
                        <div className="drink-container" key={name}>
                            <button
                                className="drinks"
                                onClick={() => buyDrink(drink)}>
                                <img src={drink.img} alt={drink.name} />
                                <div className="drink-price">
                                    {drink.price}원
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrinkList;
