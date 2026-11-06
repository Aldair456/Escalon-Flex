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
  { id: '6', months: 6, label: '6 meses', baseInstallment: 180.5, baseInterest: 83, tea: '45%', tcea: '49.2%' },
  { id: '9', months: 9, label: '9 meses', baseInstallment: 129.3, baseInterest: 163.72, tea: '45%', tcea: '48.5%' },
  { id: '12', months: 12, label: '12 meses', baseInstallment: 101.2, baseInterest: 214.4, tea: '45%', tcea: '47.9%' },
];
