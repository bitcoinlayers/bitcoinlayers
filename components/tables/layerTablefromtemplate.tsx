"use client";

import { layerColumns } from "./layerColumns";
import GenericTable from "./genericTable";
import { Layer } from "@/components/layer/layerProps";

interface LayerTableProps {
  data: Layer[];
}

const LayerTable = ({ data }: LayerTableProps) => {
  return <GenericTable data={data} columns={layerColumns} />;
};

export default LayerTable;
