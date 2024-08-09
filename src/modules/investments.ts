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
  const predictorSectionBody = document.createElement("div");

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
    const [func, symbol, ticker] =
      options[assetSelector.value as keyof InvestmentOptions];
    // //const dataset = await apiCall(func, symbol);
    // const dates = Object.keys(dataset);
    // const values: number[] = [];
    // dates.forEach((date) => {
    //   values.push(parseInt(dataset[date]["4. close"]));
    // });
    // const newchart = renderInvestmentChart(chart, dates, values);
    const predictionData = await fetchPrediction(ticker);
    predictorSectionBody.replaceChildren();
    predictorSectionBody.append(displayPrediction(predictionData));

    chartSection.appendChild(chart);
  });
  predictorSection.append(predictorSectionBody);
  investmentsBody.append(predictorSection, chartSection);
  investments.append(investmentsBody);
  return investments;
};

const displayPrediction = (predictionData: any) => {
  const prediction = document.createElement("div");

  for (const key of Object.keys(predictionData)) {
    const predictionItem = document.createElement("div");
    const predictionItemTitle = document.createElement("div");
    predictionItemTitle.textContent = `${formatPredictionKey(key)}`;
    const predictionItemValue = document.createElement("div");

    if (key.toString() === "accuracy") {
      predictionItemValue.textContent = `${Math.round(
        100 - predictionData[key]
      )}%`;
    } else if (key.toString() === "date") {
      let date = new Date(predictionData[key]).toString().split(" ");
      date = date.slice(0, 4);
      predictionItemValue.textContent = `${date.join(" ")}`;
    } else {
      predictionItemValue.textContent = `USD. ${Math.round(
        predictionData[key]
      )}`;
    }
    predictionItem.append(predictionItemTitle, predictionItemValue);
    prediction.appendChild(predictionItem);
  }

  return prediction;
};

const fetchPrediction = async (symbol: string) => {
  try {
    const request = await fetch(
      `http://192.168.1.29:7000/predict/symbol=${symbol}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const response = await request.json();
    console.log(response);
    return response;
    return response;
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

const formatPredictionKey = (key: string) => {
  let words = key.split("_");

  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return words.join(" ");
};

export { createInvestmentsModule };
