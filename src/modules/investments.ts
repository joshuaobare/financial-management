const createInvestmentsModule = () => {
  const investments = document.createElement("div");
  const assets = document.createElement("select");
  const options = [
    { "S&P 500": ["TIME_SERIES_DAILY", "SPY"] },
    { Bitcoin: ["DIGITAL_CURRENCY_DAILY", "BTC"] },
    { Ethereum: ["DIGITAL_CURRENCY_DAILY", "ETH"] },
    { Gold: ["TIME_SERIES_DAILY", "GLD"] },
    { "Crude Oil": ["TIME_SERIES_DAILY", "USO"] },
  ];

  options.forEach((option) => {
    const asset = document.createElement("option");
    asset.textContent = `${Object.keys(option)[0]}`;
    asset.value = `${Object.keys(option)[0]}`;
    console.log(Object.keys(option));
    assets.appendChild(asset);
  });
  investments.appendChild(assets);
  apiCall();

  return investments;
};

const apiCall = async () => {
  try {
    const request = await fetch(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${process.env.KEY}`
    );
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export { createInvestmentsModule };
