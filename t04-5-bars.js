const createBarChart = (data) => {
  // choose a narrow width for scaling
  const viewW = 500; // narrow on purpose (forces x scaling)
  const viewH = 1600; // tall logical space for many bars
  // Physical display size (what you see on the page)
  const displayW = 900; // try 480–800 as you prefer
  const displayH = 600; // try 360–500

  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`) // logical coords
    .attr("width", displayW) // actual rendered size
    .attr("height", displayH) // actual rendered size
    .style("border", "1px solid black");

  // X scale (numeric)
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])
    .range([0, viewW]);

  // Y scale (categorical)
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, viewH])
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // Group for each row (bar + label)
  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  // Add rectangles (bars) inside each group
  barAndLabel
    .append("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 100)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");

  // Add category text labels
  barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", 100)
    .attr("y", yScale.bandwidth() / 2 + 5) // center text vertically in band
    .attr("text-anchor", "end")
    .style("font-family", "sans-serif")
    .style("font-size", "13px");

  // Add count value labels at the end of each bar
  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => 100 + xScale(d.count) + 4)
    .attr("y", 12) // adjust as needed for vertical centering
    .style("font-family", "sans-serif")
    .style("font-size", "13px");
};