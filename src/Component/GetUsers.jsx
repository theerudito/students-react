import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { GetApi } from "../Helpers/GetApiAxios";

import "../Styles/card.css";
import { CardApp } from "./Card";

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

export const GetUsers = () => {
  const [users, setUsers] = useState(inicialState);

  //console.log(users[0]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const updateUser = await GetApi();
    //console.log(updateUser);
    setUsers(updateUser);
  };

  return (
    <>
      {users.map((item) => (
        <CardApp item={item} />
      ))}
    </>
  );
};
