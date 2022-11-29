import { Line, LineChart, YAxis } from "recharts";

const Charts = ({ sparkline }: any) => {
  const prices = sparkline.map((price: any) => ({ price }));

  const hasRisen = prices[0].price < prices[prices.length -1].price

  return (
    <>
      <LineChart
        width={150}
        height={30}
        data={prices}
        margin={{
          top: 5,
          right: 0,
          left: 10,
          bottom: 0,
        }}
      >
        <YAxis hide={true} domain={["dataMin", "dataMax"]} />

        <Line dot={false} dataKey="price" stroke={hasRisen ? '#32D25A' : '#FF0000'} />
      </LineChart>
    </>
  );
};

export default Charts;
