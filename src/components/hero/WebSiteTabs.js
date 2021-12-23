import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
const App = () => {
  const [value, setValue] = React.useState(0);

  var bgColors = { "Default": "#81b71a",
                    "tabBG": "#a7cb0b"
};

  return (
    <div>
    <div
      style={{
        color:'white'
      }}
    >
        <Tabs
          value={value}
          centered
          textColor='white'
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="HOME"/>
          <Tab label="ABOUT" />
          <Tab label="JOBS" />
          <Tab label="MY INNOVATIVE COLORS" />
          <Tab label="CLIENT LOGIN" />
          <Tab label="CONTACT" />
        </Tabs>
        {/* <h3>TAB NO: {value} clicked!</h3> */}
    </div>

      <div>
        <video autoPlay loop muted height={2000} width={2000}>
            <source src={"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"} type='video/mp4' />
        </video>
      <div/>
    </div>
    </div>
  );
};
  
export default App;