import { useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";
import { GrAdd } from "react-icons/gr";
import { Context as AgeContext } from "@/contexts/age";
import { Context as GenderContext, Gender } from "@/contexts/gender";

const IncreaseIntelligence = styled.button`
  background-color: brown;
  color: white;
`;

const moneyTimer = 5000;
const snoreTimer = 3000;

export default function Component() {
  const [intelligence, intelligenceSet] = useState(-1);
  const [money, moneySet] = useState(-1000);
  const [playSnore] = useSound("snore.mp3");
  const [playCash] = useSound("cash.mp3");

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
      moneySet((value) => (value += 500));
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
          <IncreaseIntelligence>
            <h1>
              Increase intelligence <GrAdd />
            </h1>
          </IncreaseIntelligence>
        </div>

        <h2>Money: {money}</h2>
        <h2>Intelligence: {intelligence}</h2>
        <AgeContext.Consumer>
          {([age]) => <h2>Age: {age}</h2>}
        </AgeContext.Consumer>
        <GenderContext.Consumer>
          {([gender]) => <h2>Gender: {Gender[gender]}</h2>}
        </GenderContext.Consumer>
      </div>
    </div>
  );
}
