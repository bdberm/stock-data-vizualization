import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LabelSeries, Crosshair} from 'react-vis';

const HistoryChart = ({history, setVal, forgetVal, val}) => (
  <XYPlot width={800} height = {500}>
    <XAxis tickFormat={(d) => history[d].label} tickLabelAngle={-45} />
    <YAxis />
    <HorizontalGridLines />
    <LineSeries onNearestX={setVal} onSeriesMouseOut={forgetVal} data={
        history.map((day, index) => ({x: index, y: day.close}))
      } animation='noWobble' />
    {val ? <Crosshair value={val} />
            : null}
  </XYPlot>
);

export default HistoryChart;
