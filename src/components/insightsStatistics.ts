import { Transaction } from "../interfaces/transactionInterfact";
import FinanceCalculator from "../helpers/FinanceCalculator";
import { Budget } from "../interfaces/budgetInterface";

const insightsStatisticsSection = (
  monthlyTransactionData: Transaction[],
  monthlyBudgetData: Budget[],
  prevMonthlyTransactionData: Transaction[]
) => {
  console.log(monthlyTransactionData);
  const monthlyTransactionCalculator = new FinanceCalculator(
    monthlyTransactionData
  );
  const prevMonthlyTransactionCalculator = new FinanceCalculator(
    prevMonthlyTransactionData
  );
  const monthlySpend = monthlyTransactionCalculator.totalMonthlySpend();
  const monthlyIncome =
    monthlyTransactionCalculator.financeCategoryCalculator("Income");
  const prevMonthlySpend = prevMonthlyTransactionCalculator.totalMonthlySpend();
  const prevMonthlyIncome =
    prevMonthlyTransactionCalculator.financeCategoryCalculator("Income");
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const lastMonthDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastMonthDay.getDate();

  const component = document.createElement("div");
  component.className = "insights-bottom";
  const componentHeader = document.createElement("h2");
  componentHeader.textContent = "STATISTICS";
  console.log(monthlyTransactionCalculator.maxValueCategory());

  const incomeVsSpendingCard = incomeVsSpending(monthlyIncome, monthlySpend);

  const spendingCategoriesCard = spendingCategories(
    monthlySpend,
    monthlyTransactionCalculator
  );

  const expenseTrendsCard = expenseTrends(monthlySpend, prevMonthlySpend);

  const budgetPerformanceCard = budgetPerformance(
    monthlyBudgetData,
    monthlyTransactionData
  );

  const cashFlowAnalysisCard = cashFlowAnalysis(monthlySpend, monthlyIncome);

  const spendingForecastCard = spendingForecast(
    monthlySpend,
    daysInMonth,
    currentDay
  );

  component.append(
    componentHeader,
    incomeVsSpendingCard,
    spendingCategoriesCard,
    expenseTrendsCard,
    budgetPerformanceCard,
    cashFlowAnalysisCard,
    spendingForecastCard
  );
  return component;
};

const incomeVsSpending = (monthlyIncome: number, monthlySpend: number) => {
  const incomeVsSpendingCard = document.createElement("div");

  const incomeVsSpendingCardHeader = document.createElement("div");
  const incomeVsSpendingCardBody = document.createElement("div");

  if (monthlyIncome !== 0) {
    incomeVsSpendingCardBody.textContent = `You have spent ${Math.round(
      (monthlySpend / monthlyIncome) * 100
    )}% of your income so far this month`;
  } else {
    incomeVsSpendingCardBody.textContent = `Unable to display stats: Please input spending data to see insights.`;
  }

  incomeVsSpendingCard.append(
    incomeVsSpendingCardHeader,
    incomeVsSpendingCardBody
  );

  return incomeVsSpendingCard;
};

const spendingCategories = (
  monthlySpend: number,
  monthlyTransactionCalculator: FinanceCalculator
) => {
  const spendingCategoriesCard = document.createElement("div");
  const spendingCategoriesCardHeader = document.createElement("div");
  const spendingCategoriesCardBody = document.createElement("div");

  if (monthlySpend !== 0) {
    const { maxValue, maxCategory } =
      monthlyTransactionCalculator.maxValueCategory();
    console.log(maxCategory);
    spendingCategoriesCardBody.textContent = `Your top spending category is ${maxCategory}, accounting for ${Math.round(
      (maxValue / monthlySpend) * 100
    )}% of your total spending`;
  } else {
    spendingCategoriesCardBody.textContent = `Unable to display stats: Please input spending data to see insights.`;
  }

  spendingCategoriesCard.append(
    spendingCategoriesCardHeader,
    spendingCategoriesCardBody
  );

  return spendingCategoriesCard;
};

const expenseTrends = (monthlySpend: number, prevMonthlySpend: number) => {
  const expenseTrendsCard = document.createElement("div");
  const expenseTrendsCardHeader = document.createElement("div");
  const expenseTrendsCardBody = document.createElement("div");
  if (monthlySpend !== 0) {
    if (monthlySpend !== prevMonthlySpend) {
      expenseTrendsCardBody.textContent = `Your spending has ${
        prevMonthlySpend > monthlySpend ? "decreased" : "increased"
      } by ${
        prevMonthlySpend > monthlySpend
          ? Math.round(
              ((prevMonthlySpend - monthlySpend) / prevMonthlySpend) * 100
            )
          : Math.round(
              ((monthlySpend - prevMonthlySpend) / prevMonthlySpend) * 100
            )
      }% compared to last month`;
    } else {
      expenseTrendsCardBody.textContent = `Your spending this month is equal to last month`;
    }
  } else {
    expenseTrendsCardBody.textContent = `Unable to display stats: Please input spending data to see insights.`;
  }

  expenseTrendsCard.append(expenseTrendsCardHeader, expenseTrendsCardBody);

  return expenseTrendsCard;
};

const budgetPerformance = (
  budgetData: Budget[],
  transactionData: Transaction[]
) => {
  const financeCalculator = new FinanceCalculator(budgetData);
  const discrepancies =
    financeCalculator.categoriesNearBudgetLimit(transactionData);
  console.log(discrepancies);
  const underBudget = discrepancies.filter((item) => item[1] > 0);
  const overBudget = discrepancies.filter((item) => item[1] < 0);
  const budgetPerformanceCard = document.createElement("div");
  const budgetPerformanceCardHeader = document.createElement("div");
  const budgetPerformanceCardBody = document.createElement("div");

  const underBudgetSection = document.createElement("div");
  const underBudgetSectionHeader = document.createElement("div");
  const underBudgetSectionBody = document.createElement("div");
  underBudgetSectionHeader.textContent = "Under Budget";
  underBudget.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `You are KShs. ${item[1]} away from exceeding your budget in the ${item[0]} category`;
    underBudgetSectionBody.appendChild(div);
  });
  underBudgetSection.append(underBudgetSectionHeader, underBudgetSectionBody);
  const overBudgetSection = document.createElement("div");
  const overBudgetSectionHeader = document.createElement("div");
  const overBudgetSectionBody = document.createElement("div");
  overBudgetSectionHeader.textContent = "Over Budget";
  overBudget.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `You are KShs. ${item[1]} over budget in the ${item[0]} category`;
    overBudgetSectionBody.appendChild(div);
  });
  overBudgetSection.append(overBudgetSectionHeader, overBudgetSectionBody);
  budgetPerformanceCardBody.append(underBudgetSection, overBudgetSection);
  budgetPerformanceCard.append(
    budgetPerformanceCardHeader,
    budgetPerformanceCardBody
  );

  return budgetPerformanceCard;
};

const cashFlowAnalysis = (monthlySpend: number, monthlyIncome: number) => {
  const cashFlowAnalysisCard = document.createElement("div");
  const cashFlowAnalysisCardHeader = document.createElement("div");
  const cashFlowAnalysisCardBody = document.createElement("div");
  if (monthlySpend !== 0 && monthlyIncome !== 0) {
    if (monthlySpend !== monthlyIncome) {
      const netCashFlow = monthlyIncome - monthlySpend;
      cashFlowAnalysisCardBody.textContent = `Your net cash flow for this month is KShs. ${netCashFlow}, indicating a ${
        monthlyIncome > monthlySpend ? "surplus" : "deficit"
      }`;
    } else {
      cashFlowAnalysisCardBody.textContent = `Your net cash flow for this month is KShs. 0. You need to reel back your spending.`;
    }
  } else {
    cashFlowAnalysisCardBody.textContent = `Unable to display stats: Please input spending data to see insights.`;
  }
  cashFlowAnalysisCard.append(
    cashFlowAnalysisCardHeader,
    cashFlowAnalysisCardBody
  );

  return cashFlowAnalysisCard;
};

const spendingForecast = (
  monthlySpend: number,
  daysInMonth: number,
  currentDay: number
) => {
  const spendingForecastCard = document.createElement("div");
  const spendingForecastCardHeader = document.createElement("div");
  const spendingForecastCardBody = document.createElement("div");
  spendingForecastCardBody.textContent = `Based on your current spending rate, you are projected to spend KShs. ${
    (monthlySpend * daysInMonth) / currentDay
  } this month`;
  spendingForecastCard.append(
    spendingForecastCardHeader,
    spendingForecastCardBody
  );

  return spendingForecastCard;
};

export { insightsStatisticsSection };
