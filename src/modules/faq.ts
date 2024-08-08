const createFaqModule = () => {
  const faq = document.createElement("div");
  const questions = [
    "How can I maximize the benefits of using this app?",
    "How do I create a budget?",
    "Can I edit my budget once it’s created?",
    "How do I track my spending?",
    "What types of reports can I generate?",
    "How do I view insights about my finances?",
    "What can I do with the investments tab",
  ];
  const answers = [
    "Regularly update transactions, set clear budgets and goals, review insights consistently and adjust spending",
    'To create a budget, navigate to the Budget section, click on "Create New Budget,"' +
      "and enter your planned amounts for different categories like bills, savings, and personal expenses. Save the budget to start tracking your spending against it.",
    ,
    "Yes, you can edit your budget at any time. Go to the Budget section, click the budget item you want to edit, make the necessary changes, and save the updated budget.",
    ,
    "You can track your spending by adding transactions in the Transactions section. Enter details such as the date, amount, category, and a brief description of the expense.",
    ,
    "You can generate various reports such as monthly spending reports, income vs. expense reports, and budget vs. actual spending reports. These reports help you analyze your financial health.",
    ,
    "Insights are available in the Insights section. Here, you can find information on spending patterns, areas where you can save more, and recommendations for better financial management.",
    ,
    "View the ongoing trend and use a machine learning model to predict future trends",
  ];

  return faq;
};

export { createFaqModule };
