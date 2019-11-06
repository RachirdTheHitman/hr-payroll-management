import React from "react";

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="https://www.computeralliance.com.au/InventoryImages_376/20319.jpg"
              alt="logo"
            />
            <div className="content">Payroll System</div>
          </h1>
          <h2>Manage payroll with ease!</h2>
          <div onClick={() => history.push('/Dashboard')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
