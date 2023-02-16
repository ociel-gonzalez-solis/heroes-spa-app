import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks";
import { HeroItem } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const showSearch = q.length === 0;
  const showSearchError = q.length > 0 && heroes.length === 0;

  const { searchTxt, onInputChange, onSearchSubmit } = useForm({
    searchTxt: q,
  });

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchTxt"
              autoComplete="off"
              value={searchTxt}
              onChange={onInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeInRight"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search Hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeInRight"
            aria-label="alert-danger"
            style={{ display: showSearchError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroItem key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
