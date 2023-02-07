import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Hero } from "../components/Hero";
import { getHeroByeId } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroByeId(id), [id]);
  return (
    <>
      {hero === undefined ? (
        <Navigate to="/marvel" />
      ) : (
        <Hero hero={hero} id={id} />
      )}
    </>
  );
};
