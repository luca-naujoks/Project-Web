"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import CreditCardForm from "../../../../../components/bobbycard"

export default function page() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = signIn();
    },
  });
  const [coin, setcoin] = useState("5");
  const [coinimg, setcoinimg] = useState("");
  const [coinimgalt, setcoinimgalt] = useState("5 Coins");
  const [holdcoins, setholdcoins] = useState(120);
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const coins_up = async () => {
    console.log("25 coins");
    setcoin("25");
    document.getElementById("small").classList.add("hidden")
    document.getElementById("big").classList.remove("hidden")
  };
  const coins_down = async () => {
    console.log("5 coins");
    setcoin("5");
    document.getElementById("big").classList.add("hidden")
    document.getElementById("small").classList.remove("hidden")
  };

  const flip = async () => {
    setFlipping(true);
    if (holdcoins < coin) {
      alert("Sorry You have not enough Coins to play");
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const flip = Math.random() < 0.5;
      setResult(flip ? "Win" : "Lose");

      setFlipping(false);
      console.log(result);
      if (result === "Win") {
        if (coin === "25") {
          setholdcoins(holdcoins + 25);
          console.log(+50)
        } else {
          setholdcoins(holdcoins + 5);
          console.log(+10)
        }
      } else {
        if (coin === "25") {
          setholdcoins(holdcoins - 25);
          console.log(-25)
        } else {
          setholdcoins(holdcoins - 5);
          console.log(-5)
        }
      }
    }
  };

  if (status === "loading") {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="m-3">
      
    </div>
  );
}
