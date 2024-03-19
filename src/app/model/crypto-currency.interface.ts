export interface ICryptoCurrency {
    id: number | null;
    symbol: string;
    available_exchanges: string[];
    currency_base: string;
    currency_quote: string;
}