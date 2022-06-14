import { useEffect } from "react";
import { createContext, useState } from "react";
import { GetApi } from "../Helpers/GetApiAxios";

const inicialState = [
  {
    id: Date.now(),
    firstName: "Jorge",
    lastName: "Loor",
    pic: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
    email: "erudito@gmail.com",
    city: "Ecuador",
    company: "Heaven",
    skill: "JavaScript",
    grades: ["78", "100", "92", "86", "89", "88", "91", "87"],
  },
];

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const getData = () => {
    let data = JSON.parse(localStorage.getItem("tag"));
    if (data) {
      return data;
    } else return [];
  };

  const [tag] = useState(getData);
  const [users, setUsers] = useState(inicialState);
  const [serch, setSearch] = useState("");

  const obtenerDatos = async () => {
    const updateUser = await GetApi();
    setUsers(updateUser);
  };

  const searchUser = (e) => {
    setSearch(e.target.value);
  };

  const results = !serch
    ? users
    : users.filter(
        (dato) =>
          dato.firstName.toLowerCase().includes(serch.toLocaleLowerCase()) ||
          dato.lastName.toLowerCase().includes(serch.toLocaleLowerCase()) ||
          dato.skill.toLowerCase().includes(serch.toLocaleLowerCase()) ||
          dato.company.toLowerCase().includes(serch.toLocaleLowerCase()) ||
          dato.city.toLowerCase().includes(serch.toLocaleLowerCase())
      );

  useEffect(() => {
    obtenerDatos();
  }, []);

  const data = {
    users,
    setUsers,
    serch,
    setSearch,

    searchUser,
    results,

    tag,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
export { UserProvider };
