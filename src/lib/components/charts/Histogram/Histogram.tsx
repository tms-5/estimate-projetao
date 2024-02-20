import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 0, bottom: 40, left: 20 };
const BAR_PADDING = 0.6;

type HistogramProps = {
  width: number;
  height: number;
  data: number[];
  textTitle?: string;
  textValue?: string;
  subTextTitle?: string;
  subTextValue?: string;
};

export const Histogram = ({ width, height, data }: HistogramProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const uniqueValues = Array.from(new Set(data)).sort((a, b) => a - b);

  const frequency: { [key: number]: number } = data.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  const xScale = useMemo(() => {
    return d3
      .scalePoint()
      .domain(uniqueValues.toString().split(','))
      .range([0, boundsWidth])
      .padding(BAR_PADDING);
  }, [uniqueValues, boundsWidth]);

  console.log('uniqueValues', uniqueValues);
  console.log('uniqueValues string', uniqueValues.toString().split(','));

  const test = Number(uniqueValues.toString().split(',')[0]);
  console.log('test', test);

  const maxY = Math.max(...Object.values(frequency));
  const yScale = useMemo(() => {
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, maxY]);
  }, [maxY, boundsHeight]);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", `translate(0, ${boundsHeight})`)
      .call(xAxisGenerator);

    const yAxisGenerator = d3
      .axisLeft(yScale)
      .tickFormat(d3.format(".0f"))
      .tickValues(Object.values(frequency).map(Number));
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight, frequency]);

  const barWidth = width / uniqueValues.length - 15;

  const allRects = uniqueValues.map((value, i) => {
    const xAxis = xScale(String(value));
    const x = Number(xAxis) - (barWidth / 2);

    const height = boundsHeight - yScale(frequency[value]);
    return (
      <rect
        key={i}
        fill="#0898b5"
        x={x}
        width={barWidth}
        y={yScale(frequency[value])}
        height={height}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allRects}
      </g>
      <g
        width={boundsWidth}
        height={boundsHeight}
        ref={axesRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      />
    </svg>
  );
};
