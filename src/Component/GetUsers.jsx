import { useContext } from "react";
import UserContext from "../UserProvider/UserProvider";
import { CardApp } from "./Card";

export const GetUsers = () => {
  const { serch, searchUser, results } = useContext(UserContext);

  return (
    <>
      <div className="containerSeach">
        <input
          value={serch}
          onChange={searchUser}
          type="text"
          placeholder="Seach by Name, Company, Skill, City"
          className="search"
        />
      </div>

      <div className="body">
        {results.map((item) => (
          <CardApp item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
