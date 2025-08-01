export declare enum CustodyTitle {
    BitcoinNative = "Bitcoin Native",
    Federated = "Federated",
    Custodial = "Custodial"
}
export declare enum CustodyText {
    BitcoinNaitve = "placeholder",
    Federated = "placeholder",
    Custodial = "placeholder"
}
export interface CustodyMechanism {
    label: string;
    description: string;
    networks: string[];
}
export interface CustodyProps {
    [key: string]: CustodyMechanism;
}
export declare const custodyProps: CustodyProps;
export default custodyProps;
//# sourceMappingURL=bitcoin-custody-props.d.ts.map