export const HeroCharacters = ({ alter_ego, characters }) => {
  return <>{alter_ego !== characters ? <p>{characters}</p> : null}</>;
};
