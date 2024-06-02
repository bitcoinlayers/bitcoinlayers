import { Column } from "./genericTable";

export const infrastructureColumns: Column[] = [
    { header: "Name", accessor: "title" },
    { header: "Bitcoin Security", accessor: "bitcoinSecurity" },
    { header: "Type", accessor: "infrastructureType" },
    { header: "Purpose", accessor: "purpose" },
    { header: "Associated Layers", accessor: "associatedLayers" },
];
