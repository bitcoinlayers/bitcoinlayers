"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  OP_CCV: [
    { score: "Prefer", count: 5 },
    { score: "Acceptable", count: 1 },
    { score: "Weak", count: 3 },
    { score: "Wanting", count: 3 },
    { score: "Evaluating", count: 24 },
    { score: "No", count: 0 },
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
  OP_PAIRCOMMIT: [
    { score: "Prefer", count: 4 },
    { score: "Acceptable", count: 1 },
    { score: "Weak", count: 1 },
    { score: "Wanting", count: 2 },
    { score: "Evaluating", count: 27 },
    { score: "No", count: 4 },
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
  const [selectedOpcode, setSelectedOpcode] = useState<keyof typeof opcodeData>("OP_CAT");
  const currentData = opcodeData[selectedOpcode];

  return (
    <Card className="bg-background space-y-4" id="op-support-chart">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="flex font-semibold items-center gap-2">
            {selectedOpcode} Score Breakdown
          </CardTitle>
          <CardDescription className="text-xs flex flex-wrap">
            Developer sentiment for the {selectedOpcode} proposal
          </CardDescription>
        </div>
        <div className="flex items-center px-6 flex-wrap gap-1">
          {Object.keys(opcodeData).map((opcode) => (
            <Button
              key={opcode}
              variant={selectedOpcode === opcode ? "default" : "outline"}
              onClick={() => setSelectedOpcode(opcode as keyof typeof opcodeData)}
              className="text-[10px] px-2 py-1"
            >
              {opcode}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className={cn("w-full watermark", "h-96")}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData}
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
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={60}
              />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="hsl(var(--chart-btc))"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

