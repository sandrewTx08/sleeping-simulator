import { useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

const AddInteligence = styled.button``;

export default function Component() {
  const [intelligence, intelligenceSet] = useState(-1);
  const [money, moneySet] = useState(-1000);
  const [playSnore] = useSound("/snore.mp3");
  const [playCash] = useSound("/cash.mp3");

  useEffect(() => {
    setInterval(() => {
      playCash();
      moneySet((money) => money + 500);
    }, 5000);
  }, [playCash]);

  useEffect(() => {
    setInterval(() => {
      playSnore();
    }, 3000);
  }, [playSnore]);

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
