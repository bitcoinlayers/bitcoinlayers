"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { useState } from "react";

const scoreTypes = [
  { key: "Prefer", color: "#52c41a" },       // Lima 500 – strong green
  { key: "Acceptable", color: "#c0ffb6" },   // Lima 100 – soft green
  { key: "Wanting", color: "#f19007" },      // Clementine 500 – orange
  { key: "Weak", color: "#ffdc00" },         // Sun 500 – yellow
  { key: "Deficient", color: "#babfc7" },    // Storm Gray 300 – slate gray
  { key: "No", color: "#ff4d4f" },           // Coral Red 500 – red
  { key: "Evaluating", color: "#74a3cc" },   // Link Water 400 – soft blue
];


const opcodeData: Record<string, { score: string; count: number }[]> = {
  OP_CAT: [
    { score: "Prefer", count: 23 },
    { score: "Acceptable", count: 4 },
    { score: "Weak", count: 3 },
    { score: "Wanting", count: 4 },
    { score: "Evaluating", count: 5 },
    { score: "No", count: 1 },
    { score: "Deficient", count: 1 },
  ],
  OP_CTV: [
    { score: "Prefer", count: 20 },
    { score: "Acceptable", count: 2 },
    { score: "Weak", count: 2 },
    { score: "Wanting", count: 2 },
    { score: "Evaluating", count: 7 },
    { score: "No", count: 3 },
    { score: "Deficient", count: 2 },
  ],
  OP_PAIRCOMMIT: [
    { score: "Prefer", count: 4 },
    { score: "Acceptable", count: 1 },
    { score: "Weak", count: 1 },
    { score: "Wanting", count: 2 },
    { score: "Evaluating", count: 27 },
    { score: "No", count: 4 },
    { score: "Deficient", count: 2 },
  ],
  OP_CSFS: [
    { score: "Prefer", count: 13 },
    { score: "Acceptable", count: 9 },
    { score: "Weak", count: 3 },
    { score: "Wanting", count: 3 },
    { score: "Evaluating", count: 7 },
    { score: "No", count: 3 },
    { score: "Deficient", count: 0 },
  ],
  OP_CCV: [
    { score: "Prefer", count: 5 },
    { score: "Acceptable", count: 1 },
    { score: "Weak", count: 3 },
    { score: "Wanting", count: 3 },
    { score: "Evaluating", count: 24 },
    { score: "No", count: 0 },
    { score: "Deficient", count: 2 },
  ],
  OP_INTERNALKEY: [
    { score: "Prefer", count: 11 },
    { score: "Acceptable", count: 8 },
    { score: "Weak", count: 2 },
    { score: "Wanting", count: 5 },
    { score: "Evaluating", count: 11 },
    { score: "No", count: 1 },
    { score: "Deficient", count: 1 },
  ],
  OP_VAULT: [
    { score: "Prefer", count: 13 },
    { score: "Acceptable", count: 6 },
    { score: "Weak", count: 1 },
    { score: "Wanting", count: 8 },
    { score: "Evaluating", count: 7 },
    { score: "No", count: 2 },
    { score: "Deficient", count: 1 },
  ],
  OP_TXHASH: [
    { score: "Prefer", count: 11 },
    { score: "Acceptable", count: 5 },
    { score: "Weak", count: 5 },
    { score: "Wanting", count: 6 },
    { score: "Evaluating", count: 8 },
    { score: "No", count: 2 },
    { score: "Deficient", count: 3 },
  ],
  SIGHASH_APO: [
    { score: "Prefer", count: 8 },
    { score: "Acceptable", count: 3 },
    { score: "Weak", count: 5 },
    { score: "Wanting", count: 6 },
    { score: "Evaluating", count: 13 },
    { score: "No", count: 4 },
    { score: "Deficient", count: 1 },
  ],
};

export default function OpcodeSupportChart() {
  const [selectedOpcode, setSelectedOpcode] = useState<string>("OP_CAT");
  const isPreferOnlyView = selectedOpcode === "ALL_PREFER";
const currentData = !isPreferOnlyView ? opcodeData[selectedOpcode] : undefined;

const sortedData = !isPreferOnlyView && currentData
  ? scoreTypes.map(({ key }) => {
      return currentData.find((d) => d.score === key) || { score: key, count: 0 };
    })
  : [];

const preferOnlyData = Object.entries(opcodeData).map(([opcode, scores]) => {
  const preferCount = scores.find((s) => s.score === "Prefer")?.count || 0;
  return { opcode, count: preferCount };
});

  return (
    <Card className="bg-background space-y-4" id="op-support-chart">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
        <CardTitle className="flex font-semibold items-center gap-2">
  {selectedOpcode === "ALL_PREFER"
    ? 'Which opcodes developers prefer'
    : `${selectedOpcode} developer sentiment`}
</CardTitle>
<CardDescription className="text-xs flex flex-wrap">
  {selectedOpcode === "ALL_PREFER"
    ? 'Total "prefer" score for opcodes listed on the Covenants Wiki'
    : `Select developer sentiment for the ${selectedOpcode} proposal`}
</CardDescription>
        </div>
        <div className="px-6 flex items-center">
          <Select value={selectedOpcode} onValueChange={(value) => setSelectedOpcode(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select opcode" />
            </SelectTrigger>
            <SelectContent>
  <SelectItem value="ALL_PREFER">All Opcodes</SelectItem>
  {Object.keys(opcodeData).map((opcode) => (
    <SelectItem key={opcode} value={opcode}>
      {opcode}
    </SelectItem>
  ))}
</SelectContent>

          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className={cn("w-full watermark", "h-96")}>
        <ResponsiveContainer width="100%" height="100%">
  {isPreferOnlyView ? (
    <BarChart
    data={preferOnlyData}
    margin={{ top: 16, right: 16, left: 0, bottom: 32 }}
  >
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="opcode"
      tickLine={false}
      axisLine={false}
      tickMargin={8}
    />
    <YAxis
      domain={[0, 30]}
      ticks={[0, 5, 10, 15, 20, 25, 30]}
      tickLine={false}
      axisLine={false}
      tickMargin={8}
      width={60}
    />
    <Tooltip />
    <Bar
  dataKey="count"
  radius={[4, 4, 0, 0]}
  barSize={40}
>
  {preferOnlyData.map((entry, index) => {
    const count = entry.count;
    let fill = "#ff4d4f"; // default red

    if (count > 20) fill = "#39bf11";       // Lima 600
    else if (count > 15) fill = "#52c41a";  // Lima 500
    else if (count > 10) fill = "#74d239";  // Lima 400
    else if (count > 5)  fill = "#ffdc00";  // Sun 500
    else if (count > 0)  fill = "#f19007";  // Clementine 500

    return <Cell key={`cell-${index}`} fill={fill} />;
  })}
</Bar>

  </BarChart>
  ) : (
    <BarChart
      data={sortedData}
      margin={{ left: 0, right: 0, top: 16, bottom: 0 }}
    >
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="score"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
      />
      <YAxis
        domain={[0, 30]}
        ticks={[0, 5, 10, 15, 20, 25, 30]}
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        width={60}
      />
      <Tooltip />
      <Bar
        dataKey="count"
        radius={[4, 4, 0, 0]}
        barSize={40}
      >
        {sortedData.map((entry, index) => {
          const color = scoreTypes.find((s) => s.key === entry.score)?.color || "#999";
          return <Cell key={`cell-${index}`} fill={color} />;
        })}
      </Bar>
    </BarChart>
  )}
</ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex justify-end pr-2">
          <a
            href="https://github.com/bitcoinlayers/bitcoinlayers"
            className="text-sm font-medium hover:underline flex items-center text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
            <span className="ml-1">→</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
