import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { connect } from "react-redux";
import { updateTaskType } from "../../ducks/clientReducer";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  setTaskType = (task) => {
    this.props.updateTaskType(task);
  };

  login() {
    const redirectUri = encodeURIComponent(
      window.location.origin + "/auth/callback"
    );
    window.location = `https://dev-v4ozbt85ntpqqtge.us.auth0.com/authorize/?client_id=fgItV2I5TKOaWV40r9nttbzQrHvpEN1G&scope=openid%20profile%20email&redirect_uri=http://localhost:4000/auth/callback&response_type=code`;
  }

  render() {
    return (
      <header>
        <div className="header-main-text">
          <h1>
            The convenient & affordable way to get things done around the home
          </h1>
          <p>
            Choose from over 140,000 vetted Taskers for help without breaking
            the bank.
          </p>
        </div>
        <div className="header-links">
          <span>
            {this.props.user ? (
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType: "Festiv Special Cleaning",
                      task: "Cleaning",
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
            {this.props.user ? (
              <Link to="/clientForm">
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
            {this.props.user ? (
              <Link to="/clientForm">
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
            {this.props.user ? (
              <Link to="/clientForm">
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
            {this.props.user ? (
              <Link to="/clientForm">
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
            {this.props.user ? (
              <Link to="/clientForm">
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
            {this.props.user ? (
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType: "Nutritionist",
                      task: "Nutrition",
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

            {this.props.user ? (
              <Link to="/clientForm">
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

            {this.props.user ? (
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType: "Home Physiotherapy",
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

            {this.props.user ? (
              <Link to="/clientForm">
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

            {this.props.user ? (
              <Link to="/clientForm">
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

            {this.props.user ? (
              <Link to="/clientForm">
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
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.tasker;
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
  { updateTaskType }
)(Header);
