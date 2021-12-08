import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import configUtils from "../configUtils.js";

export default class graphs extends React.Component {
  
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={configUtils}
       
      />
    );
  }
}
