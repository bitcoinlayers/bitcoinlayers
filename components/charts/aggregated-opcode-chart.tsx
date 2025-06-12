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
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TrendingUpIcon, UsersIcon, BarChart3Icon } from "lucide-react";

type AggregatedOpcodeChartProps = {
  defaultOpcode?: string;
  title?: string;
  description?: string;
  chartHeight?: string;
};

const scoreTypes = [
  { key: "Prefer", color: "#16a34a", label: "Strongly Support", icon: "🟢" },
  { key: "Acceptable", color: "#65a30d", label: "Acceptable", icon: "🟡" },
  { key: "Wanting", color: "#ea580c", label: "Needs Work", icon: "🟠" },
  { key: "Weak", color: "#dc2626", label: "Weak Support", icon: "🔴" },
  { key: "Evaluating", color: "#0891b2", label: "Under Review", icon: "🔵" },
  { key: "No", color: "#7c2d12", label: "Oppose", icon: "⚫" },
  { key: "Deficient", color: "#64748b", label: "Insufficient", icon: "⚪" },
];

const slugToOpcode: Record<string, string> = {
  opcat: "OP_CAT",
  opctv: "OP_CTV",
  opccv: "OP_CCV",
  opcsfs: "OP_CSFS",
  oppaircommit: "OP_PAIRCOMMIT",
  opinternalkey: "OP_INTERNALKEY",
  opvault: "OP_VAULT",
  optxhash: "OP_TXHASH",
  sighash_apo: "SIGHASH_APO",
};

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

  // Custom tick component for text truncation
const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const maxLength = 7; // Maximum characters before truncation
    const text = payload.value;
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text 
          x={0} 
          y={0} 
          dy={16} 
          textAnchor="middle" 
          fill="#6b7280" 
          fontSize="11"
          style={{ fontWeight: '500' }}
        >
          {truncatedText}
        </text>
      </g>
    );
  };

  // Custom tooltip component for better UX
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const isPreferView = typeof label === 'string' && label.startsWith('OP_');
    
    if (isPreferView) {
      // Prefer-only view tooltip
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{label}</p>
          <p className="text-green-600 dark:text-green-400">
            <span className="inline-block w-3 h-3 bg-green-500 rounded mr-2"></span>
            Strong Support: {data.value} developers
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Click on individual opcodes above to see detailed sentiment breakdown
          </p>
        </div>
      );
    } else {
      // Detailed sentiment view tooltip
      const sentimentType = scoreTypes.find(s => s.key === label);
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
            <span className="mr-2">{sentimentType?.icon}</span>
            {sentimentType?.label || label}
          </p>
          <p style={{ color: sentimentType?.color }}>
            {data.value} developer{data.value !== 1 ? 's' : ''}
          </p>
        </div>
      );
    }
  }
  return null;
};

// Stats component for summary metrics
const StatsBar = ({ selectedOpcode, opcodeData }: { selectedOpcode: string, opcodeData: any }) => {
  if (selectedOpcode === "ALL_PREFER") {
    const totalResponses = Object.values(opcodeData).flat().reduce((sum: number, item: any) => sum + item.count, 0);
    const totalOpcodes = Object.keys(opcodeData).length;
    
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Opcodes</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{totalOpcodes}</p>
            </div>
            <BarChart3Icon className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Developer Responses</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">{totalResponses}</p>
            </div>
            <UsersIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Top Choice</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">OP_CAT</p>
            </div>
            <TrendingUpIcon className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>
    );
  }
  
  const currentData = opcodeData[selectedOpcode];
  if (!currentData) return null;
  
  const totalVotes = currentData.reduce((sum: number, item: any) => sum + item.count, 0);
  const preferCount = currentData.find((item: any) => item.score === "Prefer")?.count || 0;
  const supportPercentage = Math.round((preferCount / totalVotes) * 100);
  
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Responses</p>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{totalVotes}</p>
          </div>
          <UsersIcon className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-600 dark:text-green-400">Strong Support</p>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{preferCount}</p>
          </div>
          <TrendingUpIcon className="h-8 w-8 text-green-500" />
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Support Rate</p>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{supportPercentage}%</p>
          </div>
          <BarChart3Icon className="h-8 w-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
};

// Legend component for sentiment view
const SentimentLegend = () => (
  <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Developer Sentiment Legend</h4>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
      {scoreTypes.slice(0, 4).map((type) => (
        <div key={type.key} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded" 
            style={{ backgroundColor: type.color }}
          ></div>
          <span className="text-gray-700 dark:text-gray-300">{type.label}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs mt-2">
      {scoreTypes.slice(4).map((type) => (
        <div key={type.key} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded" 
            style={{ backgroundColor: type.color }}
          ></div>
          <span className="text-gray-700 dark:text-gray-300">{type.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function OpcodeSupportChart({
  defaultOpcode = "ALL_PREFER",
  title,
  description,
  chartHeight = "h-96",
}: AggregatedOpcodeChartProps) {
  const normalizedSlug = defaultOpcode.replace(/_/g, "").toLowerCase();
  const initialOpcode = slugToOpcode[normalizedSlug] || defaultOpcode.toUpperCase();
  const [selectedOpcode, setSelectedOpcode] = useState<string>(initialOpcode);
  const isPreferOnlyView = selectedOpcode === "ALL_PREFER";
  const currentData = !isPreferOnlyView ? opcodeData[selectedOpcode] : undefined;

  const sortedData = !isPreferOnlyView && currentData
    ? scoreTypes.map(({ key }) => {
        return currentData.find((d) => d.score === key) || { score: key, count: 0 };
      })
    : [];

  const preferOnlyData = Object.entries(opcodeData)
    .map(([opcode, scores]) => {
      const preferCount = scores.find((s) => s.score === "Prefer")?.count || 0;
      return { opcode, count: preferCount };
    })
    .sort((a, b) => b.count - a.count); // Sort by preference count descending

  // Debug logging
  if (isPreferOnlyView) {
    console.log('DEBUG: preferOnlyData length:', preferOnlyData.length);
    console.log('DEBUG: preferOnlyData:', preferOnlyData);
  }

  return (
    <Card className="bg-background shadow-lg border-0 ring-1 ring-gray-200/50 dark:ring-gray-800/50" id="op-support-chart">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              {isPreferOnlyView
                ? 'Bitcoin Opcode Developer Preferences'
                : `${selectedOpcode} Detailed Sentiment Analysis`}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {isPreferOnlyView
                ? 'Community support levels based on developer survey responses from the Covenants Wiki'
                : `Comprehensive sentiment breakdown for the ${selectedOpcode} proposal`}
            </CardDescription>
          </div>
          
          <div className="flex items-center space-x-3">
            <Select value={selectedOpcode} onValueChange={(value) => setSelectedOpcode(value)}>
              <SelectTrigger className="w-[200px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                <SelectValue placeholder="Select opcode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL_PREFER" className="font-medium">@🔍 All Opcodes Overview</SelectItem>
                {Object.keys(opcodeData)
                  .sort((a, b) => {
                    const aPrefer = opcodeData[a]?.find(s => s.score === "Prefer")?.count || 0;
                    const bPrefer = opcodeData[b]?.find(s => s.score === "Prefer")?.count || 0;
                    return bPrefer - aPrefer;
                  })
                  .map((opcode) => (
                    <SelectItem key={opcode} value={opcode}>
                      {opcode}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <StatsBar selectedOpcode={selectedOpcode} opcodeData={opcodeData} />
        
        <div className="bg-white dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto">
          <ChartContainer config={{}} className={cn("w-full min-w-[800px]", chartHeight)}>
            <ResponsiveContainer width="100%" height="100%" minWidth={800}>
              {isPreferOnlyView ? (
                <BarChart
                  data={preferOnlyData}
                  margin={{ top: 20, right: 40, left: 40, bottom: 50 }}
                  width={800}
                  barCategoryGap="15%"
                >
                  <XAxis
                    dataKey="opcode"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={12}
                    height={50}
                    fontSize={12}
                    tick={<CustomXAxisTick />}
                    stroke="#d1d5db"
                  />
                  <YAxis
                    domain={[0, 'dataMax + 5']}
                    tickLine={false}
                    axisLine={true}
                    tickMargin={12}
                    fontSize={12}
                    tick={{ fill: '#6b7280' }}
                    stroke="#d1d5db"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="count"
                    radius={[6, 6, 0, 0]}
                    fill="#16a34a"
                  >
                    {preferOnlyData.map((entry, index) => {
                      const count = entry.count;
                      let fill = "#dc2626"; // red for low support
                      
                      if (count > 20) fill = "#16a34a";       // Strong green
                      else if (count > 15) fill = "#22c55e";  // Green
                      else if (count > 10) fill = "#65a30d";  // Yellow-green
                      else if (count > 5)  fill = "#eab308";  // Yellow
                      else if (count > 0)  fill = "#ea580c";  // Orange
                      
                      return <Cell key={`cell-${entry.opcode}`} fill={fill} />;
                    })}
                  </Bar>
                </BarChart>
              ) : (
                <BarChart
                  data={sortedData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
                >
                  <XAxis
                    dataKey="score"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={12}
                    fontSize={12}
                    tick={{ fill: '#6b7280' }}
                    stroke="#d1d5db"
                  />
                  <YAxis
                    domain={[0, 'dataMax + 3']}
                    tickLine={false}
                    axisLine={true}
                    tickMargin={12}
                    fontSize={12}
                    tick={{ fill: '#6b7280' }}
                    stroke="#d1d5db"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="count"
                    radius={[6, 6, 0, 0]}
                  >
                    {sortedData.map((entry, index) => {
                      const color = scoreTypes.find((s) => s.key === entry.score)?.color || "#64748b";
                      return <Cell key={`cell-${entry.score}`} fill={color} />;
                    })}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Data sourced from the Bitcoin Covenants Wiki developer survey
          </div>
          <a
            href="https://github.com/bitcoinlayers/bitcoinlayers"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the covenants wiki
            <span className="ml-1">→</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}