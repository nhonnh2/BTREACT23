import React, { Component } from "react";
import classes from "./StylingModule.module.css";
export default class PickGlasses extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "glasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "glasses/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "glasses/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "glasses/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "glasses/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "glasses/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "glasses/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "glasses/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "glasses/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glass: 0,
  };
  handleChangeGlass = (index) => {
    this.setState({
      glass: index,
    });
  };
  renderGlasses = () => {
    return this.dataGlasses.map((glass, index) => {
      const { id } = glass;
      return (
        <li
          className="list-group-item"
          onClick={() => this.handleChangeGlass(index)}
          key={index}
        >
          <div className="row">
            <div className="col-2">
              <img src={`./images/glasses/g${id}.jpg`} alt="" width="60px" />
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    const { glass } = this.state;
    const glassOb = this.dataGlasses[glass];
    return (
      <div className="container-fluid">
        <div className="col-10 mx-auto">
          <div className={`${classes.result}`}>
            <img src="./images/glasses/background.jpg" alt="" />
            <img
              src={`./images/glasses/model.jpg`}
              alt=""
              className={`w-30 ${classes.model}`}
            />
            <img
              src={`./images/${glassOb.url}`}
              alt=""
              className={`${classes.glass}`}
            />
          </div>
          <div className="col-5 mx-auto">
            <h1>{glassOb.name}</h1>
            <p>{glassOb.desc}</p>
          </div>
        </div>

        <div className={`row ${classes.listGlasses}`}>
          <div className="col-7 mx-auto mt-5">
            <ul className={`list-group ${classes.flexRow}`}>
              {this.renderGlasses()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
