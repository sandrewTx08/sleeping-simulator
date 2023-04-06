import { useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";
import { GrAdd } from "react-icons/gr";

const AddIntelligence = styled.button`
  background-color: brown;
  color: white;
`;

export default function Component() {
  const [intelligence, intelligenceSet] = useState(-1);
  const [money, moneySet] = useState(-1000);
  const [playSnore] = useSound("snore.mp3");
  const [playCash] = useSound("cash.mp3");
  const moneyTimer = 5000;
  const snoreTimer = 3000;

  useEffect(() => {
    setInterval(() => {
      playCash();
    }, moneyTimer);
  }, [playCash]);

  useEffect(() => {
    setInterval(() => {
      playSnore();
    }, snoreTimer);
  }, [playSnore]);

  useEffect(() => {
    setInterval(() => {
      moneySet((money) => (money += 500));
    }, moneyTimer);
  }, []);

  return (
    <div>
      <div>
        <div
          onClick={() => {
            intelligenceSet((value) => ++value);
          }}
        >
          <AddIntelligence>
            <h1>
              Add intelligence <GrAdd />
            </h1>
          </AddIntelligence>
        </div>

        <h2>Money: {money}</h2>
        <h2>Intelligence: {intelligence}</h2>
      </div>
    </div>
  );
}
