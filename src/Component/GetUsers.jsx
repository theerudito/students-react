import { useContext, useEffect, useState } from "react";
import UserContext from "../UserProvider/UserProvider";
import { CardApp } from "./Card";

export const GetUsers = () => {
  const { serch, searchUser, results, tag } = useContext(UserContext);
  const [searchTag, setSearchTag] = useState("");

  const searchTagData = (e) => {
    const results = !searchTag
      ? tag
      : tag.filter((dato) =>
          dato.tag1.toLowerCase().includes(searchTag.toLocaleLowerCase())
        );
        console.log(results);
      return results;
  };

  useEffect(() => {
    searchTagData();
  }, []);

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

      <div className="containerSeach">
        <input
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          type="text"
          placeholder="Seach by Tag"
          className="search"
        />
      </div>

      <div className="body">
        {results.map((item) => (
          <CardApp item={item} key={item.id} dato={searchTagData} />
        ))}
      </div>
    </>
  );
};
