export interface Forex {
    "id": 1;
    "Meta Data": MetaData;
    "Time Series FX (5min)": { [key: string]: TimeSeriesFX5Min };
}

export interface MetaData {
    "1. Information":    string;
    "2. From Symbol":    string;
    "3. To Symbol":      string;
    "4. Last Refreshed": Date;
    "5. Interval":       string;
    "6. Output Size":    string;
    "7. Time Zone":      string;
}

export interface TimeSeriesFX5Min {
    "1. open":  string;
    "2. high":  string;
    "3. low":   string;
    "4. close": string;
}
