import React, { useContext, useState, useEffect } from "react";
import "./Nav.css";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Notifications from "../Notifications/Notifications";
import API from "../../utils/API";
import Media from 'react-media';

const Nav = (props) => {
  const { isAuthenticated, userData } = useContext(AuthContext);

  const [notifications, setNotifications] = useState([]);

  const linkHandler = props.notificationClickHandler ? props.notificationClickHandler : () => '';

  useEffect(() => {
    if (isAuthenticated) {
      API.getNotifications(userData.userName).then(response => {
        setNotifications(response.data.unReadNotifications)
      });
    }
  }, []);

  const markNoteAsRead = noteInfo => {
    API.markNotificationAsRead(noteInfo)
      .then(response => {
        setNotifications(response.data.newNotifications)
      })
  }

  const homeLink = () => {
    const currentLink = isAuthenticated ? `/user-profile/${userData.userName}` : "/";

    return (
      <div onClick={() => linkHandler(userData.userName)}>
      <Link to={currentLink} className="navbar-brand">
        <img
          src="https://i.ibb.co/wyZcs2t/icon.png"
          className="icon"
          alt="Grid Icon"
        />
      </Link>
     </div>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        {homeLink()}
        <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              null
            ) : (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    {isAuthenticated ? (
                      <Link to="/feed" className="nav-link">
                        Feed
              </Link>
                    ) : null}
                  </li>
                  <li className="nav-item">
                    {isAuthenticated ? (
                      <Link to="/clan" className="nav-link">
                        Clans
              </Link>
                    ) : null}
                  </li>
                  <li className="nav-item">
                    {isAuthenticated ? (
                      <Link to="/discover" className="nav-link">
                        Discover
              </Link>
                    ) : null}
                  </li>
                </ul>
              )
          }
        </Media>
        {/* Switch || to && to check to auth state for notifications */}
        {isAuthenticated && <Notifications notificationClickHandler={props.notificationClickHandler} notifications={notifications} markNoteAsRead={markNoteAsRead} className="mr-auto" />}
        <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              null
            ) : (
                <Link to="/profile">
                  {isAuthenticated && <ProfileIcon profileImg={userData.profileImg} large={true} />}
                </Link>
              )
          }
          </Media>
          <LogInOutBtn />
      </nav>
    </div>
      );
    };
    
    export default Nav;
