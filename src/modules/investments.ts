const createInvestmentsModule = () => {
  const investments = document.createElement("div");
  const assets = document.createElement("select");
  const options = ["S&P 500", "Bitcoin", "Ethereum", "Gold", "Crude Oil"];

  options.forEach((option) => {
    const asset = document.createElement("option");
    asset.textContent = option;
    asset.value = option;

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
