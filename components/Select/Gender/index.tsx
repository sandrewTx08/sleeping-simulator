import { Context, Type } from "@/contexts/gender";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import Menu from "@/components/Select/Menu";
import styled from "styled-components";

const GenderButton = styled.div`
  border: 1px solid black;
  padding: 1em;
  border-radius: 6em;
  text-align: center;
  font-size: x-large;
  width: 3em;
  height: 3em;

  svg {
    width: 2em;
    height: 2em;
  }
`;

export default function Component() {
  return (
    <Context.Consumer>
      {([_, dispatch]) => (
        <Menu title="Select your gender">
          <GenderButton
            onClick={() => {
              dispatch(Type.FEMALE);
            }}
          >
            <BsGenderFemale color="pink" />
            <div>Female</div>
          </GenderButton>

          <GenderButton
            onClick={() => {
              dispatch(Type.MALE);
            }}
          >
            <BsGenderMale color="blue" />
            <div>Male</div>
          </GenderButton>
        </Menu>
      )}
    </Context.Consumer>
  );
}
