import { useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

const AddInteligence = styled.button``;

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
      playCash();
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
          <AddInteligence>Add intelligence {intelligence}</AddInteligence>
        </div>

        <div>{money}</div>
      </div>
    </div>
  );
}
