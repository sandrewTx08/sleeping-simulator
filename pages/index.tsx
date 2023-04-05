import { useContext } from "react";
import { Context as AgeContext } from "@/contexts/age";
import { Context as GenderContext } from "@/contexts/gender";
import AgeSelect from "@/components/Select/Age";
import GenderSelect from "@/components/Select/Gender";
import Game from "@/components/Game";

export default function Home() {
  const [age] = useContext(AgeContext);
  const [gender] = useContext(GenderContext);

  return !(typeof gender === "number") ? (
    <GenderSelect />
  ) : !(typeof age === "number") ? (
    <AgeSelect />
  ) : (
    <Game />
  );
}
