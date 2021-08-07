import React, { Component } from "react";
export default class PickCar extends Component {
  features = [
    {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/car/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
    {
      id: 2,
      title: "Modern Steel",
      type: "Metallic",
      img: "./images/car/icons/icon-steel.jpg",
      srcImg: "images-steel/images-steel-1/",
      color: "Steel",
      price: "20,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-steel/images-steel-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-steel/images-steel-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-steel/images-steel-3/",
        },
      ],
    },
    {
      id: 3,
      title: "Lunar Silver",
      type: "Metallic",
      img: "./images/car/icons/icon-silver.jpg",
      srcImg: "images-silver/images-silver-1/",
      color: "Silver",
      price: "21,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-silver/images-silver-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-silver/images-silver-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-silver/images-silver-3/",
        },
      ],
    },
    {
      id: 4,
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/car/icons/icon-red.jpg",
      srcImg: "images-red/images-red-1/",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/",
        },
      ],
    },
  ];
  wheels = [
    {
      idWheel: 1,
      img: "./images/car/icons/icon-wheel-1.jpg",
      title: "18-inch Alloy Wheels",
      price: "1,600",
    },
    {
      idWheel: 2,
      img: "./images/car/icons/icon-wheel-2.jpg",
      title: "18-inch 15-Spoke Black Alloy Wheels w/ Red Lip",
      price: "1,700",
    },
    {
      idWheel: 3,
      img: "./images/car/icons/icon-wheel-3.jpg",
      title: "18-inch 5-Spoke Black Alloy Wheels",
      price: "1,600",
    },
  ];
  state = {
    feature: 0,
    wheel: 0,
  };
  handleChangeColor = (index) => {
    this.setState({
      feature: index,
    });
  };
  handleChangeWheel = (index) => {
    this.setState({
      wheel: index,
    });
  };
  renderFeatures = () => {
    return this.features.map((feature, index) => {
      const { title, img } = feature;
      return (
        <li
          className="list-group-item"
          onClick={() => this.handleChangeColor(index)}
          key={index}
        >
          <div className="row">
            <div className="col-2">
              <img src={img} alt="" width="60px" />
            </div>
            <div className="col-10 d-flex align-items-center">{title}</div>
          </div>
        </li>
      );
    });
  };
  renderWheels = () => {
    return this.wheels.map((wheel, index) => {
      const { title, img } = wheel;
      return (
        <li
          className="list-group-item"
          onClick={() => this.handleChangeWheel(index)}
          key={index}
        >
          <div className="row">
            <div className="col-2">
              <img src={img} alt="" width="60px" />
            </div>
            <div className="col-10 d-flex align-items-center">{title}</div>
          </div>
        </li>
      );
    });
  };
  render() {
    const { feature } = this.state;
    const { wheel } = this.state;
    const srcImg = this.features[feature].wheels[wheel].srcImg;
    return (
      <div className="container-fuild">
        <div className="row">
          <div className="col-7">
            <img
              src={`./images/car/${srcImg}civic-1.jpg`}
              alt=""
              className="w-100"
            />
            {/* <div
              classname="cloudimage-360"
              data-folder={`./images/car/${srcImg}`}
              data-filename="civic-{index}.jpg"
              data-amount="8"
              data-spin-reverse
            />
            <div /> */}
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">Exterior Color</div>
              <ul className="list-group list-group-flush">
                {this.renderFeatures()}
              </ul>
            </div>
            <div className="card">
              <div className="card-header">Wheels</div>
              <ul className="list-group list-group-flush">
                {this.renderWheels()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
