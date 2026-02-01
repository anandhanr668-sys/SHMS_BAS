import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import { Bed as BedIcon } from "lucide-react";

interface BedStatusChartProps {
  available: number;
  occupied: number;
  maintenance: number;
}

const BedStatusChart: React.FC<BedStatusChartProps> = ({
  available,
  occupied,
  maintenance,
}) => {
  const data = [
    { name: "Available", value: available, color: "#10b981" },
    { name: "Occupied", value: occupied, color: "#ef4444" },
    { name: "Maintenance", value: maintenance, color: "#f59e0b" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
    >
      <BedIcon className="absolute -right-10 -bottom-10 text-white opacity-5 rotate-12" size={240} />
      <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 italic relative z-10 flex items-center gap-4">
        <BedIcon className="text-blue-400" size={28} />
        Bed Status Overview
      </h2>
      <div className="relative z-10">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <p className="text-2xl font-black italic">{item.value}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BedStatusChart;
