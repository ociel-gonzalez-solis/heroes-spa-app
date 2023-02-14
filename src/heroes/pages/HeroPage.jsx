import { Navigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getHeroByeId } from "../helpers";
import { Hero } from "../components/Hero";

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
