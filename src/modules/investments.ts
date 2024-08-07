import { InvestmentOptions } from "../interfaces/investmentOptionsInterface";
import { renderInvestmentChart } from "../components/investmentChart";
const createInvestmentsModule = () => {
  const investments = document.createElement("div");
  const investmentsHeader = document.createElement("h3");
  investmentsHeader.textContent = "Assets";
  const assets = document.createElement("select");
  const options: InvestmentOptions = {
    "S&P 500": ["TIME_SERIES_DAILY", "SPY"],
    Bitcoin: ["DIGITAL_CURRENCY_DAILY", "BTC"],
    Ethereum: ["DIGITAL_CURRENCY_DAILY", "ETH"],
    Gold: ["TIME_SERIES_DAILY", "GLD"],
    "Crude Oil": ["TIME_SERIES_DAILY", "USO"],
  };

  for (const key of Object.keys(options)) {
    const asset = document.createElement("option");
    asset.textContent = key;
    asset.value = key;
    assets.appendChild(asset);
  }

  investments.appendChild(investmentsHeader);
  investments.appendChild(assets);

  assets.addEventListener("change", (e: Event) => {
    const [func, symbol] = options[assets.value as keyof InvestmentOptions];
    apiCall(func, symbol);
  });

  return investments;
};

const apiCall = async (func: string, symbol: string) => {
  try {
    const request = await fetch(
      `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&market=USD&apikey=${process.env.KEY}`
    );
    const response = await request.json();
    console.log(response["Time Series (Digital Currency Daily)"]);
  } catch (error) {
    console.error(error);
  }
};

export { createInvestmentsModule };
