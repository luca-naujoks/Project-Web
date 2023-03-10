"use client"
import React, { useState } from "react";


function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardHolder, setCardHolder] = useState("FULL NAME");
  const [expiryDate, setExpiryDate] = useState("MM/YY");
  const [cvv, setCvv] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center py-12">
      </div>

      <div
        id="card"
        className="relative w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500 transition: 0.6s;transform-style: preserve-3d"
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-gray-900 to-gray-700 transition-all duration-100 delay-200 z-20 transform: rotateY(0deg)">
          <div className="flex justify-between items-center">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
              alt="Smart card"
              className="w-12"
            />

            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
              alt="Visa image"
              className="w-12"
            />
          </div>

          <div className="">
            <label for="" className="hidden">
              Card Number
            </label>
            <input
              type="text"
              id=""
              value={cardNumber}
              readonly
              className="outline-none w-full bg-transparent text-center text-2xl"
            />
          </div>

          <div className="w-full flex flex-row justify-between">
            <div className="w-full flex flex-col">
              <label for="">Card holder</label>
              <input
                type="text"
                id=""
                value={cardHolder}
                readonly
                className="outline-none bg-transparent"
              />
            </div>

            <div className="w-1/4 flex flex-col">
              <label for="">Expires</label>
              <input
                type="text"
                id=""
                value={expiryDate}
                readonly
                className="outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr from-gray-900 to-gray-700 transition-all z-10 transform: rotateY(180deg)">
          <div className="w-full h-12 bg-black"></div>

          <div className="px-6 flex flex-col gap-6 justify-center">
            <div className="flex flex-col items-end">
              <label for="">CVV</label>
              <input
                type="text"
                id=""
                value={cvv}
                readonly
                className="outline-none rounded text-black w-full h-8 text-right background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)"
              />
            </div>

            <div className="flex justify-start items-center">
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                alt=""
                className="w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardForm;
