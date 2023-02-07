import { heroes } from "../data/heroes";

export const getHeroByeId = (id) => {
  return heroes.find((heroes) => heroes.id === id);
};
