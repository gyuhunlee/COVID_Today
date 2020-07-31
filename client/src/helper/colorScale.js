import _ from 'underscore';

const colorScale = (data) => {
  const onlyScores = _.map(data, (item) => item.total);
  const minValue = Math.min.apply(null, onlyScores);
  const maxValue = Math.max.apply(null, onlyScores);
  const paletteScale = d3.scale.linear().domain([minValue, maxValue]).range(['#66ff1a', '#900']);

  let finalData = Object.assign({}, data);
  _.each(finalData, (item) => { item.fillColor = paletteScale(item.total); });

  return finalData;
};

export default colorScale;