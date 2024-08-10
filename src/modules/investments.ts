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
    "S&P 500": [
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=^GSPC&outputsize=full&apikey=",
      "SPY-USD",
    ],
    Bitcoin: [
      "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=",
      "BTC-USD",
    ],
    Ethereum: [
      "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=",
      "ETH-USD",
    ],
    Gold: [
      "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_symbol=XAU&to_symbol=USD&outputsize=full&apikey=",
      "GLD-USD",
    ],
    "Crude Oil": [
      "https://www.alphavantage.co/query?function=WTI&interval=daily&apikey=",
      "USO-USD",
    ],
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
    const chartCont = document.createElement("div");
    chartCont.className = "investments-chart-cont";
    const chart = document.createElement("canvas");
    chartCont.appendChild(chart);
    const [func, symbol] =
      options[assetSelector.value as keyof InvestmentOptions];
    //const dataset = await apiCall(func, symbol);
    // const dates = Object.keys(dataset);
    // const values: number[] = [];
    // dates.forEach((date) => {
    //   values.push(parseInt(dataset[date]["4. close"]));
    // });
    const predictionData = await fetchPrediction(symbol);
    const dataLen = predictionData.data.dates.length;
    const predictionDates = predictionData.data.dates.slice(
      dataLen - 365,
      dataLen
    );
    const predictionDataset = predictionData.data.data.slice(
      dataLen - 365,
      dataLen
    );
    const newchart = renderInvestmentChart(
      chart,
      predictionDates,
      predictionDataset,
      assetSelector.value
    );
    predictorSectionBody.replaceChildren();
    predictorSectionBody.append(displayPrediction(predictionData));

    chartSection.appendChild(chartCont);
  });
  predictorSection.append(predictorSectionBody);
  investmentsBody.append(predictorSection, chartSection);
  investments.append(investmentsBody);
  return investments;
};

const displayPrediction = (predictionData: any) => {
  const prediction = document.createElement("div");

  for (const key of Object.keys(predictionData)) {
    if (key.toString() === "data") continue;

    const predictionItem = document.createElement("div");
    predictionItem.className = "investments-prediction-item";
    const predictionItemTitle = document.createElement("div");
    predictionItemTitle.className = "investments-prediction-item-title";
    predictionItemTitle.textContent = `${formatPredictionKey(key)}`;
    const predictionItemValue = document.createElement("div");
    predictionItemValue.className = "investments-prediction-item-title-value";

    if (key.toString() === "accuracy") {
      predictionItemValue.textContent = `${Math.round(
        100 - predictionData[key]
      )}%`;
    } else if (key.toString() === "date") {
      let date = new Date(predictionData[key]).toString().split(" ");
      date = date.slice(0, 4);
      predictionItemValue.textContent = `${date.join(" ")}`;
    } else if (key.toString() === "verdict") {
      const predictionVal = predictionData[key];
      predictionItemValue.textContent = `${predictionVal}`;
      predictionItemValue.style.color =
        predictionVal === "SELL" ? "red" : "green";
    } else {
      predictionItemValue.textContent = `USD. ${Math.round(
        predictionData[key]
      )}`;
    }

    predictionItem.append(predictionItemTitle, predictionItemValue);

    prediction.appendChild(predictionItem);

    if (key.toString() === "alert") {
      const alert = document.createElement("div");
      alert.append("Model Unavailable");
      predictionItem.replaceChildren();
      prediction.append(alert);
    }
  }

  return prediction;
};

const fetchPrediction = async (symbol: string) => {
  try {
    const request = await fetch(
      `http://192.168.1.29:7000/predict/symbol=${symbol}/`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const apiCall = async (func: string, symbol: string) => {
  try {
    const request = await fetch(`${func}${process.env.KEY}`);
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
