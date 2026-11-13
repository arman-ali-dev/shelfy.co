import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 18000 },
  { name: "Mar", revenue: 15000 },
  { name: "Apr", revenue: 25000 },
  { name: "May", revenue: 22000 },
  { name: "Jun", revenue: 30000 },
  { name: "Jul", revenue: 28000 },
  { name: "Aug", revenue: 35000 },
  { name: "Sep", revenue: 32000 },
  { name: "Oct", revenue: 42000 },
  { name: "Nov", revenue: 38000 },
  { name: "Dec", revenue: 50000 },
];

const RevenueChart = () => {
  return (
    <LineChart
      data={data}
      style={{
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "80vh",
        aspectRatio: 1.618,
        marginTop: 10,
      }}
      responsive
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="revenue"
        name="Revenue (₹)"
        stroke="#8884d8"
        strokeWidth={2}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};

export default RevenueChart;
