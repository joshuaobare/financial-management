import { InvestmentOptions } from "../interfaces/investmentOptionsInterface";
import { renderInvestmentChart } from "../components/investmentChart";
const createInvestmentsModule = () => {
  const investments = document.createElement("div");
  const investmentsHeader = document.createElement("h3");
  investmentsHeader.textContent = "Assets";
  const assets = document.createElement("select");
  const options: InvestmentOptions = {
    "S&P 500": ["TIME_SERIES_DAILY", "^GSPC"],
    Bitcoin: ["DIGITAL_CURRENCY_DAILY", "BTC"],
    Ethereum: ["DIGITAL_CURRENCY_DAILY", "ETH"],
    Gold: ["FX_DAILY", "XAU"],
    "Crude Oil": ["COMMODITY_EXCHANGE", "WTI"],
  };

  for (const key of Object.keys(options)) {
    const asset = document.createElement("option");
    asset.textContent = key;
    asset.value = key;
    assets.appendChild(asset);
  }

  investments.appendChild(investmentsHeader);
  investments.appendChild(assets);
  const chartSection = document.createElement("div");

  //renderInvestmentChart(chart)

  assets.addEventListener("change", async (e: Event) => {
    chartSection.replaceChildren();
    const chart = document.createElement("canvas");
    const [func, symbol] = options[assets.value as keyof InvestmentOptions];
    const dataset = await apiCall(func, symbol);
    const dates = Object.keys(dataset);
    const values: number[] = [];
    dates.forEach((date) => {
      values.push(parseInt(dataset[date]["4. close"]));
    });
    console.log(Object.keys(dataset));
    console.log(values);
    const newchart = renderInvestmentChart(chart, dates, values);
    chartSection.appendChild(chart);
  });
  investments.appendChild(chartSection);
  return investments;
};

const apiCall = async (func: string, symbol: string) => {
  try {
    const request = await fetch(
      `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&market=USD&apikey=${process.env.KEY2}`
    );
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { createInvestmentsModule };
