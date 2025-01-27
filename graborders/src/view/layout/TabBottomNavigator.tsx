import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";
function TabBottomNavigator() {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  const tabs = [
    {
      icon: "fas fa-home",
      path: "/",
      name: "Home",
    },

    {
      icon: "far fa-star",
      path: "/Order",
      name: "Orders",
    },

    {
      icon: "fas fa-chart-simple",
      path: "/invitation",
      name: "Market",
    },


    {
      icon: "fas fa-user",
      path: "/profile",
      name: "Profile",
    },
  ];



  return (
    <div className="tabbottomNavigator">
      {tabs.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{ color: "grey", textDecoration: "none" }}
        >
          {item.path === "/grap" ? (
            <div className="grap__column">
              <div className="grap__cirlce">
                <img src={item.icon} style={{ width: 40, height: 40 }} />
              </div>
              <div className="rating__text">
                <p className={`text__link ${isActive(item.path) && "active"}`}>
                  Rate
                </p>
              </div>
            </div>
          ) : (
            <div className="singleTab">
              <i
      
                style={{ width: 20, height: 20 }}
                className={`${item.icon} ${isActive(item.path) && "active"}`}
              />
              <p className={`text__link ${isActive(item.path) && "active"}`}>
                {item.name}
              </p>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default TabBottomNavigator;
