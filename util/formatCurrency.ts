// src/util/formatCurrency.ts

export function formatCurrency(value: number): string {
    const absValue = Math.abs(value);
    let formattedValue;

    if (absValue < 1_000_000) {
        formattedValue =
            "$" +
            value.toLocaleString("en-US", {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }) +
            " USD";
    } else if (absValue < 1_000_000_000) {
        const millions = value / 1_000_000;

        formattedValue =
            "$" +
            millions.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "") +
            " million USD";
    } else {
        // 1 billion and above
        const billions = value / 1_000_000_000;

        formattedValue =
            "$" +
            billions.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "") +
            " billion USD";
    }

    return formattedValue;
}
