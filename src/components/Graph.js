import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryArea, VictoryScatter, VictoryAxis } from 'victory';

function Graph(props) {
  let {xLabels, yLabels, domain, data, areaColor, lineColor} = props;
  return (
    <VictoryChart
      height={150} width={450}
      padding={{ top: 25, bottom: 25, left: 25, right: 25}}
    >
      <VictoryAxis
        tickCount={12}
        tickValues={xLabels}
        style={{
          tickLabels: { fontSize: 10, padding: 0 },
          ticks: { stroke: 'black', size: 2 }
        }}
      />
      <VictoryArea
        interpolation={'natural'}
        domain={domain}
        data={data}
        style={{
          data: { fill: areaColor, stroke: lineColor }
        }}
      />
      <VictoryScatter
        data={data}
        size={0}
        domain={domain}
        labels={yLabels}
        style={{
          data: { fill: lineColor },
          labels: { fontSize: 10, padding: 1, fill: lineColor }
        }}
      />
    </VictoryChart>
  );
}

Graph.propTypes = {
  xLabels: PropTypes.array.isRequired,
  yLabels: PropTypes.array.isRequired,
  domain: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  areaColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
}

export default Graph;
