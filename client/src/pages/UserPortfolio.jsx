import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import Navbar from "../components/Navbar";

const cardStyle =
  "bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-sm";

  export const ServerUrl = import.meta.env.VITE_SERVER_URL

const UserPortfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(
          serverUrl +"/api/user/portfolio",
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.log("Portfolio Error:", err);
      }
    };

    fetchPortfolio();
  }, []);

  if (!data) {
    return <div className="p-6 text-lg">Loading Portfolio...</div>;
  }

  const chartData =
    data?.interviews?.map((i, index) => ({
      name: `#${index + 1}`,
      score: i.finalScore || 0
    })) || [];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* 🔹 Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Track your interview performance and progress
            </p>
          </div>

          {/* 🔹 Profile + Stats */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Profile */}
            <div className={`${cardStyle} md:col-span-2`}>
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Profile
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <p><span className="font-medium">Name:</span> {data.user?.name}</p>
                <p><span className="font-medium">Email:</span> {data.user?.email}</p>
                <p><span className="font-medium">Credits:</span> {data.user?.credits}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4">
              <div className={cardStyle}>
                <p className="text-xs text-gray-500">Total Interviews</p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.stats?.totalInterviews}
                </p>
              </div>

              <div className={cardStyle}>
                <p className="text-xs text-gray-500">Average Score</p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.stats?.avgScore}
                </p>
              </div>
            </div>
          </div>

          {/* 🔹 Chart */}
          <div className={cardStyle}>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Performance Trend
            </h2>

            {chartData.length === 0 ? (
              <p className="text-gray-500 text-sm">No data available</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#10b981"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* 🔹 Interview History */}
          <div className={cardStyle}>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Interview History
            </h2>

            {data.interviews?.length === 0 ? (
              <p className="text-gray-500 text-sm">No interviews yet</p>
            ) : (
              <div className="space-y-3">
                {data.interviews.map((i) => (
                  <div
                    key={i._id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        {i.role} ({i.mode})
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(i.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-600">
                        {i.finalScore || "—"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default UserPortfolio;