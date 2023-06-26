import React from "react";
import model1 from '../Images/VehicleeModels/audi s-line.png'
import model2 from '../Images/VehicleeModels/Toyoto-camry.png'
import model3 from '../Images/VehicleeModels/VW-Golf-6.png'
import model4 from '../Images/VehicleeModels/BMW-320.png'
import model5 from '../Images/VehicleeModels/Mercedes-Benz-GLK.png'
import model6 from '../Images/VehicleeModels/VW-Passant-CC.png'
import model7 from '../Images/VehicleeModels/Vw Atlas.png'
import model8 from '../Images/VehicleeModels/Audi Q5 Sportback.png'
import model9 from '../Images/VehicleeModels/Kia Sorento Phev.png'
// icons
import iconManual from '../Images/VehicleeModels/Logo/manual.svg'
import iconManua2 from '../Images/VehicleeModels/Logo/cae-ac-fan-fill.svg'
import iconManua3 from '../Images/VehicleeModels/Logo/car door.svg'
import iconManua4 from '../Images/VehicleeModels/Logo/car-fuel-pump.svg'



const VehicleModels =() => {
    return (
        <>
          <div className="vehicle-models">
            <div className="vehicle-models-heading">
                <h1>VEHICLE MODELS</h1>
            </div>
          </div>
            <div className="container1">

                <div className="vehicle-models-main">
                    <div className="vehicle-models-main-sub">
                        <div className="vehicle-models-cars">
                                {/* 1st grid start */}
                            <div className="vehicle-models-cars-1">
                                <img src={model1} alt="Audi S-line" />
                                <h2>AUDI A1 S-LINE</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 4,999</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            <div className="vehicle-models-cars-2">

                            <div className="vehicle-models-cars-1">
                                <img src={model2} alt="Audi S-line" />
                                <h2>TOYOTO  CAMRY</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 2,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            <div className="vehicle-models-cars-3">

                            <div className="vehicle-models-cars-1">
                                <img src={model3} alt="Audi S-line" />
                                <h2>VW Golf-6</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 2,999</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            {/* 1st grid end  */}

                                {/* 2nd grid start */}
                            <div className="vehicle-models-cars-1">
                                <img src={model4} alt="Audi S-line" />
                                <h2>BMW 320</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 6,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            <div className="vehicle-models-cars-2">

                            <div className="vehicle-models-cars-1">
                                <img src={model5} alt="Audi S-line" />
                                <h2>Mercedes-Benz GLK</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 5,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            <div className="vehicle-models-cars-3">

                            <div className="vehicle-models-cars-1">
                                <img src={model6} alt="Audi S-line" />
                                <h2>VW Golf-6</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 2,999</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            {/* 2nd grid end  */}
                                {/* 3rd grid start */}
                            <div className="vehicle-models-cars-1">
                                <img src={model7} alt="Audi S-line" />
                                <h2>Vw Atlas</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 3,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            <div className="vehicle-models-cars-2">

                            <div className="vehicle-models-cars-1">
                                <img src={model8} alt="Audi S-line" />
                                <h2>Audi Q5 Sportback</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 6,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            <div className="vehicle-models-cars-3">

                            <div className="vehicle-models-cars-1">
                                <img src={model9} alt="Audi S-line" />
                                <h2>Kia Sorento Phev</h2>
                                <div className="vehicle-models-sep">
                                    <div className="vehicle-models-sep-manual">
                                        <img src={iconManual} alt="" />
                                        <p>Manual</p>
                                    </div>
                                    <div className="vehicle-models-sep-door">
                                    <img src={iconManua3} alt="" />
                                        <p>3/4</p>
                                    </div>
                                    <div className="vehicle-models-sep-fuel">
                                    <img src={iconManua4} alt="" />
                                        <p>Petrol</p>
                                    </div>
                                    <div className="vehicle-models-sep-ac">
                                    <img src={iconManua2} alt="" />
                                        <p>AC</p>
                                    </div>
                                 </div>
                                 <h3>Per Day <span>₹ 4,499</span></h3>
                                 <div className="vehicle-buy-btn">
                                    <a href="/"><button>Book Now</button></a>
                                 </div>
                            </div>

                            </div>
                            {/* 3rd grid end  */}
                            
                        </div>


                    </div>
                </div>

            </div>
            <div className="touch-with">
          <div className="touch-with-sub">
            <h1>
              Book a car by getting in touch with us <span>+91 1234567890</span>
            </h1>
          </div>
        </div>
        </>
    )
}
export default VehicleModels;