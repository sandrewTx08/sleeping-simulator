import { Context } from "@/contexts/age";
import Menu from "@/components/Select/Menu";
import styled from "styled-components";
import { useState } from "react";

const Input = styled.input``;

export default function Component() {
  const [input, inputSet] = useState<number>();

  return (
    <Context.Consumer>
      {([state, dispatch]) => (
        <form
          onSubmit={() => {
            dispatch(input);
          }}
        >
          <Menu title="Type your age">
            <Input
              value={state}
              max={200}
              type="number"
              onChange={({ target: { value } }) => {
                inputSet(Number(value));
              }}
            />
          </Menu>

          <button>Continue</button>
        </form>
      )}
    </Context.Consumer>
  );
}
