import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState, } from "react";
import { GetApi } from "../Helpers/GetApiAxios";
import { IconShowDown } from "../Icons/Icons";
import "../Styles/card.css";

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
  const [mostrarComponente, setMostrarComponente] = useState(false);
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
    <Fragment>
      {users.map((item) => (
        <div className="container">
          <IconShowDown />


          {/*Con un estado adicional le dicen cuando mostrarse o no*/}
          <button onClick={() => setMostrarComponente(!mostrarComponente)}>
            {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
            {mostrarComponente ? `Ocultar` : `Mostrar`}
          </button>


          <div className="" id="card" key={item.id}>
            {/* <h4>{item.id}</h4> */}
            <img
              src={item.pic}
              alt="pic"
              width="100px"
              id="image"
              className=""
            />

            <h2 className="" id="names">
              {item.firstName.toUpperCase()} {item.lastName.toUpperCase()}
            </h2>

            <h4 className="" id="email">
              Email: {item.email}
            </h4>

            <h4 className="" id="city">
              City: {item.city}
            </h4>

            <h4 className="" id="company">
              Company: {item.company}
            </h4>

            <h4 className="" id="skill">
              Skill: {item.skill}
            </h4>

            <h4 className="" id="averages">
              Averages: {item.grades.reduce((a, b) => a % b)}%
            </h4>

            <input
              className="form-control"
              type="text"
              placeholder="Add Tag"
              id="input"
              onChange=""
            ></input>

            <button className="btn btn-primary" type="submit" id="button">
              +
            </button>
          </div>


          <div className={mostrarComponente ? "show-element" : null}>
            {mostrarComponente && (
              <div className="" id="test">
                <h6>Test 1: {item.grades[0]}</h6>
                <h6>Test 2: {item.grades[1]}</h6>
                <h6>Test 3: {item.grades[2]}</h6>
                <h6>Test 5: {item.grades[4]}</h6>
                <h6>Test 6: {item.grades[5]}</h6>
                <h6>Test 7: {item.grades[6]}</h6>
              </div>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

