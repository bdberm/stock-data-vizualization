import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LabelSeries} from 'react-vis';

const HistoryChart = () => (
  <XYPlot width={800} height = {500}>
    <XAxis hideTicks />
    <YAxis />
    <HorizontalGridLines />
    <LineSeries data={[{x:new Date(2018,1,1), y:1}, {x:new Date(2018,1,2), y:3}]} />
  </XYPlot>
);

export default HistoryChart;
