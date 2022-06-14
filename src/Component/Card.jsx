import React, { useState } from "react";

export const CardApp = ({ item }) => {
  const getData = () => {
    let data = JSON.parse(localStorage.getItem("tag"));
    if (data) {
      return data;
    } else return [];
  };

  const [tag, setTag] = useState(getData);
  const [tag1, setTag1] = useState("");

  const addTag = (e) => {
    let id = tag.length + 1;
    e.preventDefault();
    setTag([...tag, { id, tag1 }]);
    setTag1("");
    localStorage.setItem("tag", JSON.stringify(tag));
  };

  window.addEventListener("DOMContentLoaded", () => {
    localStorage.clear();
  });

  const deleteTag = (id) => {
    setTag(tag.filter((item) => item.id !== id));
  };

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return (
    <div className="ContainerPrincipal" key={item.id}>
      <div className="contenedorCard">
        <div className="DivImage">
          <img src={item.pic} alt="pic" width="100px" className="image" />
        </div>

        <div className="lupa">
          {mostrarComponente ? (
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => setMostrarComponente(!mostrarComponente)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-magnifying-glass-plus"
              onClick={() => setMostrarComponente(!mostrarComponente)}
            ></i>
          )}
        </div>

        <div className="body1">
          <h2 className="names">
            {item.firstName.toUpperCase()} {item.lastName.toUpperCase()}
          </h2>

          <h4 className="email">Email: {item.email}</h4>

          <h4 className="city">City: {item.city}</h4>

          <h4 className="company">Company: {item.company}</h4>

          <h4 className="skill">Skill: {item.skill}</h4>

          <h4 className="averages">
            Averages: {item.grades.reduce((a, b) => a % b)}%
          </h4>
        </div>

        <div className="add">
          <form onSubmit={addTag}>
            <input
              value={tag1}
              onChange={(e) => setTag1(e.target.value)}
              className="inputAdd"
              type="text"
              placeholder="Add Tag"
              required
            ></input>
            <button className="button" type="submit">
              +
            </button>
          </form>
        </div>

        <hr />
        <div className="tag">
          {tag.map((item) => (
            <p key={item.id} onClick={() => deleteTag(item.id)} className="t">
              {item.tag1}
            </p>
          ))}
        </div>

        <div className={mostrarComponente ? "show-element" : null}>
          {mostrarComponente && (
            <>
              <hr />
              <div className="test">
                <h6>Test 1: {item.grades[0]}</h6>
                <h6>Test 2: {item.grades[1]}</h6>
                <h6>Test 3: {item.grades[2]}</h6>
                <h6>Test 5: {item.grades[4]}</h6>
                <h6>Test 6: {item.grades[5]}</h6>
                <h6>Test 7: {item.grades[6]}</h6>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
