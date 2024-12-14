export const calculateCompoundInterest = (
  principal: number,
  monthlyRate: number,
  days: number,
  months: number,
  years: number
): {
  totalWithInterest: number;
  interestAmount: number;
  totalWithoutInterest: number;
} => {
  // Convert all time periods to months for monthly calculation
  const totalMonths = years * 12 + months + days / 30;
  const totalWithInterest = principal * Math.pow(1 + monthlyRate / 100, totalMonths);
  const interestAmount = totalWithInterest - principal;

  return {
    totalWithInterest,
    interestAmount,
    totalWithoutInterest: principal
  };
};