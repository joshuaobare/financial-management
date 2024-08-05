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

  return investments;
};

export { createInvestmentsModule };
