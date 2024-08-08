import { InvestmentOptions } from "../interfaces/investmentOptionsInterface";
import { renderInvestmentChart } from "../components/investmentChart";
import "../../styles/investments.css";

const createInvestmentsModule = () => {
  const investments = document.createElement("div");
  investments.className = "investments";
  const investmentsHeader = document.createElement("h3");
  investmentsHeader.textContent = "Assets";
  const assetSelector = document.createElement("select");
  assetSelector.className = "investments-asset-selector";

  const options: InvestmentOptions = {
    "S&P 500": ["TIME_SERIES_DAILY", "^GSPC", "SPY-USD"],
    Bitcoin: ["DIGITAL_CURRENCY_DAILY", "BTC", "BTC-USD"],
    Ethereum: ["DIGITAL_CURRENCY_DAILY", "ETH", "ETH-USD"],
    Gold: ["FX_DAILY", "XAU", "GLD-USD"],
    "Crude Oil": ["COMMODITY_EXCHANGE", "WTI", "USO-USD"],
  };

  for (const key of Object.keys(options)) {
    const asset = document.createElement("option");
    asset.textContent = key;
    asset.value = key;
    assetSelector.appendChild(asset);
  }

  investments.appendChild(investmentsHeader);
  investments.appendChild(assetSelector);
  const investmentsBody = document.createElement("div");
  investmentsBody.className = "investments-body";
  const predictorSection = document.createElement("div");
  predictorSection.className = "investments-body-predictor-section";
  const predictorSectionHeader = document.createElement("h4");
  predictorSectionHeader.textContent = "Prediction";

  predictorSection.append(predictorSectionHeader);

  const chartSection = document.createElement("div");
  chartSection.className = "investments-body-chart-section";
  const chartSectionHeader = document.createElement("h4");
  chartSectionHeader.textContent = "Chart";
  chartSection.append(chartSectionHeader);

  assetSelector.addEventListener("change", async (e: Event) => {
    chartSection.replaceChildren();
    chartSectionHeader.textContent = "Chart";
    chartSection.append(chartSectionHeader);
    const chart = document.createElement("canvas");
    const [func, symbol] =
      options[assetSelector.value as keyof InvestmentOptions];
    const dataset = await apiCall(func, symbol);
    const dates = Object.keys(dataset);
    const values: number[] = [];
    dates.forEach((date) => {
      values.push(parseInt(dataset[date]["4. close"]));
    });
    const newchart = renderInvestmentChart(chart, dates, values);
    chartSection.appendChild(chart);
  });

  investmentsBody.append(predictorSection, chartSection);
  investments.append(investmentsBody);
  return investments;
};

const displayPrediction = async (symbol: string) => {
  try {
    const request = await fetch(`http://localhost:8000/predict/${symbol}`);
    const response = await request.json();
    return response;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const apiCall = async (func: string, symbol: string) => {
  try {
    const request = await fetch(
      `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&market=USD&apikey=${process.env.KEY}`
    );
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { createInvestmentsModule };
