export type LoanTermOption = {
  id: string;
  months: number;
  label: string;
  baseInstallment: number;
  baseInterest: number;
  tea: string;
  tcea: string;
};

export const loanTermOptions: LoanTermOption[] = [
  { id: '1', months: 1, label: '1 mes', baseInstallment: 1055, baseInterest: 55, tea: '5.5%', tcea: '89.6%' },
  { id: '3', months: 3, label: '3 meses', baseInstallment: 382.33, baseInterest: 147, tea: '4.9%', tcea: '61.8%' },
  { id: '6', months: 6, label: '6 meses', baseInstallment: 211.67, baseInterest: 270, tea: '4.5%', tcea: '55.0%' },
];
