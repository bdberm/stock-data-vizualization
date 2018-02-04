import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LabelSeries} from 'react-vis';

const HistoryChart = ({history}) => (
  <XYPlot width={800} height = {500}>
    <XAxis tickFormat={(d) => history[d].label} tickLabelAngle={-45} />
    <YAxis />
    <HorizontalGridLines />
    <LineSeries data={
        history.map((day, index) => ({x: index, y: day.close}))
      } />
  </XYPlot>
);

export default HistoryChart;
