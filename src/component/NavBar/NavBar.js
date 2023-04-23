import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/taskerReducer";
import { updateTaskType } from "../../ducks/clientReducer";
import EmailModalContent from "../Emailmodal/EmailModalContent";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggle: false,
      toggleLinks: false,
      display: false
    };
  }

  componentDidMount() {
    axios.get("/auth/user-data").then(response => {
      this.props.setUser(response.data.user);
      console.log("user", response.data.user);
    });
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

  logout = () => {
    console.log("logout user", this.props.user);
    axios.post("/auth/logout").then(() => {
      this.setState({
        user: null
      });
      console.log("logging out");
      this.props.setUser(null);
      this.redirectToLandingPage();
    });
  };

  redirectToLandingPage() {
    window.location.pathname = "/";
  }

  toggler = () => {
    console.log("toggle", this.state.toggle);
    this.setState({
      toggle: !this.state.toggle
    });
  };

  linkToggler = () => {
    console.log("toggle", this.state.toggleLinks);
    this.setState({
      toggleLinks: !this.state.toggleLinks
    });
  };

  setTaskType = task => {
    this.props.updateTaskType(task);
    this.linkToggler();
  };
  showModal = () => {
    this.setState({
      display: true
    });
  };
  hideModal = () => {
    this.setState({
      display: false
    });
  };

  render() {
    const { user, taskType } = this.props;
    console.log("user after render", user);
    console.log("taskType", this.props.taskType);
    return (
      <nav>
        <div className="navBar">
          {/* logo container */}
          <div className="logo">
            <Link to="/">
              <img src="Images/logo.png" />
            </Link>
          </div>

          {/* all the links in the navBar */}
          <div className="nav-navigation-container">
            {/* modal */}
            {this.state.display ? (
              <EmailModalContent
                className="email-modal-nav"
                display={this.state.display}
                onHide={this.hideModal}
              />
            ) : null}
            <a
              className={this.props.user ? "modalButton" : "hide"}
              onClick={this.showModal}
            >
              Get ₹100!
            </a>
            <div className="nav-popover-container">
              <a className="services-link" onClick={this.linkToggler}>
                <span>Services</span>
              </a>
              <ul
                id="nav-popover"
                className={this.state.toggleLinks ? "nav-popover" : "hide"}
              >
                <div className="dropdown-links">
                  {/* <p className="dropdown-title">Task Services</p> */}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Baby Sitter",
                          task: "Care Taking"
                        })
                      }
                    >
                      Baby Sitter
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      Baby Sitter
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Care Taker",
                          task: "Care Taking"
                        })
                      }
                    >
                      Care Taker
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      to="/"
                      onClick={this.login}
                    >
                      Care Taker
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Cleaning Service",
                          task: "Cleaning"
                        })
                      }
                    >
                      Cleaning Service
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      to="/"
                      onClick={this.login}
                    >
                      Cleaning Service
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Cooking Service",
                          task: "cooking"
                        })
                      }
                    >
                      Cooking Service
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      onClick={this.login}
                      to="/"
                    >
                      Cooking Service
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Delivery Service",
                          task: "delivery"
                        })
                      }
                    >
                      Delivery Service
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      to="/"
                      onClick={this.login}
                    >
                      Delivery Service
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Festiv Special Cleaning",
                          task: "cleaning"
                        })
                      }
                    >
                      Festiv Special Cleaning
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      to="/"
                      onClick={this.login}
                    >
                      Festiv Special Cleaning
                    </Link>
                  )}
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Furniture Assembly",
                          task: "furniture"
                        })
                      }
                    >
                      Furniture Assembly
                    </Link>
                  ) : (
                    <Link
                      className="nav-popover-link"
                      to="/"
                      onClick={this.login}
                    >
                      Furniture Assembly
                    </Link>
                  )}

                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Physiotherapy",
                          task: "physiotherapy"
                        })
                      }
                    >
                      Home Physiotherapy
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      Home Physiotherapy
                    </Link>
                  )}      

                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Nutritionist",
                          task: "Nutrition"
                        })
                      }
                    >
                      Nutritionist
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      Nutritionist
                    </Link>
                  )}
                  
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Moving & Packing",
                          task: "moving"
                        })
                      }
                    >
                      Moving & Packing
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      Moving & Packing
                    </Link>
                  )}

                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "Yoga Trainer",
                          task: "yoga"
                        })
                      }
                    >
                      Yoga Trainer
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      Yoga Trainer
                    </Link>
                  )}
                  
                  {this.props.user ? (
                    <Link
                      to="/clientForm"
                      className="nav-popover-link"
                      onClick={() =>
                        this.setTaskType({
                          taskType: "24*7 Home Nurse Service",
                          task: "Care Taking"
                        })
                      }
                    >
                      24*7 Home Nurse Service
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="nav-popover-link"
                      onClick={this.login}
                    >
                      24*7 Home Nurse Service
                    </Link>
                  )}
                </div>
              </ul>
            </div>
            <Link className="nav-link" to="/how-it-works">
              How It Works
            </Link>
            {this.props.user ? (
              <Link className="nav-link" to="/tasker-profile">
                Become a Tasker
              </Link>
            ) : (
              ""
            )}
            <Link
              className={this.props.user ? "nav-link" : "hide"}
              to="/confirmedTasks"
            >
              <span>My Tasks</span>
            </Link>

            <div className="login-container">
              <Link to="/account/profile">
                <img src={user ? user.picture : ""} />
              </Link>
              <button className={user ? "hide" : "login"} onClick={this.login}>
                Log in
              </button>
              <button className={user ? "login" : "hide"} onClick={this.logout}>
                Log out
              </button>
            </div>

            {/* {user ? user.name : 'Please Log in!'} */}
          </div>

          <div className="menuButton-container">
            {/* <button onClick={this.toggler} class='fas fa-bars'></button> */}
            <button className="menuButton" onClick={this.toggler}>
              ☰
            </button>
            <ul
              id="menuBox"
              className={this.state.toggle ? "nav-popover" : "hide"}
            >
              <Link to="/">Home</Link>
              <Link to="/how-it-works">How it Works</Link>
              <a onClick={() => this.login()}>Register/Login</a>
              {/* <Link to="/tasker-profile">Become a Tasker</Link> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  console.log("reducer state", state);
  let { user } = state.tasker;
  const { taskType } = state.client;
  return {
    user,
    taskType
  };
}

export default connect(
  mapStateToProps,
  { setUser, updateTaskType }
)(NavBar);
