import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import festivspecialcleaning from "./festivspecialcleaning.png";
import nutrition from "./delivery.png";
import yogatrainer from "./yogatrainer.png";
import physiotherapy from "./physiotherapy.png";
import babysitter from "./babysitter.png";
import caretakers from "./caretakers.png";
import cook from "./cook.png";
import homenurse from "./homenurse.png";
import cleaning from "./cleaning.png";
import furniture from "./furniture.png";
import movingpacking from "./movingpacking.png";
import delivery from "./delivery.png";
import { connect } from "react-redux";
import { updateTaskType } from "../../ducks/clientReducer";

class LandingPage_TaskCards extends Component {
  constructor() {
    super();
    this.state = {};
  }

  login() {
    const redirectUri = encodeURIComponent(
      window.location.origin + "/auth/callback"
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize/?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  setTaskType = (task) => {
    this.props.updateTaskType(task);
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <div className="TaskCards-component">
        <h1>Popular Tasks In Your Area</h1>
        <Slider {...settings}>
          <div className="card">
            <div>
              <img src={festivspecialcleaning} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Festiv Special Cleaning",
                        task: "cleaning",
                      })
                    }
                  >
                    Festiv Special Cleaning
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Festiv Special Cleaning</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={homenurse} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "24*7 Home Nurse Service",
                        task: "Care Taking",
                      })
                    }
                  >
                    24*7 Home Nurse Service
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>24*7 Nurse Service</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={caretakers} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Care Taker",
                        task: "Care Taking",
                      })
                    }
                  >
                    Care Taker
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Care Taker</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={babysitter} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Baby Sitter",
                        task: "Care Taking",
                      })
                    }
                  >
                    Baby Sitter
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Baby Sitter</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={cleaning} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Cleaning Service",
                        task: "cleaning",
                      })
                    }
                  >
                    Cleaning Service
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Cleaning Service</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={cook} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Cooking Service",
                        task: "cooking",
                      })
                    }
                  >
                    Cooking Service
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Cooking Service</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={nutrition} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Nutritionist",
                        task: "nutrition",
                      })
                    }
                  >
                    Nutritionist
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Nutritionist</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={yogatrainer} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Yoga Trainer",
                        task: "yoga",
                      })
                    }
                  >
                    Yoga Trainer
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Yoga Trainer</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={physiotherapy} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Physiotherapy",
                        task: "physiotherapy",
                      })
                    }
                  >
                    Home Physiotherapy
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Home Physiotherapy</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={delivery} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Delivery Service",
                        task: "delivery",
                      })
                    }
                  >
                    Delivery Service
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Delivery Service</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={movingpacking} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Moving & Packing",
                        task: "movingpacking",
                      })
                    }
                  >
                    Moving & Packing
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Moving & Packing</button>
                </Link>
              )}
            </div>
          </div>
          <div className="card">
            <div>
              <img src={furniture} alt="" />
            </div>
            <div className="card-button">
              {this.props.user ? (
                <Link path to="/clientForm">
                  <button
                    onClick={() =>
                      this.setTaskType({
                        taskType: "Furniture Assembly",
                        task: "furniture",
                      })
                    }
                  >
                    Furniture Assembly
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button onClick={this.login}>Furniture Assembly</button>
                </Link>
              )}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.tasker;
  return {
    user,
  };
};

const mapDispatchToProps = {
  updateTaskType: updateTaskType,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage_TaskCards);
