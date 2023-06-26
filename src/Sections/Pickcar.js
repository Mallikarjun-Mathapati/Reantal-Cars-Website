import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarsData";

const Pickcar = () => {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");


  const Handelbtn1 = ()=> {
    setActive("SecondCar");
    btnID("btn1");
  }
  const Handelbtn2 = ()=> {
    setActive("FirstCar");
    btnID("btn2");
  }
  const Handelbtn3 = ()=> {
    setActive("ThirdCar");
    btnID("btn3");
  }
  const Handelbtn4 = ()=> {
    setActive("FourthCar");
    btnID("btn4");
  }
  const Handelbtn5 = ()=> {
    setActive("FifthCar");
    btnID("btn5");
  }
  const Handelbtn6 = ()=> {
    setActive("SixthCar");
    btnID("btn6");
  }

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental <span>fleet</span></h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business <span>trip</span>
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={Handelbtn1}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={Handelbtn2}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={Handelbtn3}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={Handelbtn4}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={Handelbtn5}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={Handelbtn6}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pickcar;