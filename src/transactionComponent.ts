import { Transaction } from "./interfaces/transactionInterfact";

const createTransactionComponent = (
  title: string,
  transactionData: Transaction[]
) => {
  const transactionComponent = document.createElement("div");
  transactionComponent.className = "transaction-component";
  const header = document.createElement("header");
  header.className = "transaction-header";
  const headerLeft = document.createElement("div");
  headerLeft.textContent = title;
  headerLeft.className = "transaction-row-left transaction-header-left";
  const headerRight = document.createElement("div");
  headerRight.textContent = "Amount";
  headerRight.className = "transaction-row-right transaction-header-right";
  header.append(headerLeft, headerRight);

  return transactionComponent;
};

export { createTransactionComponent };
