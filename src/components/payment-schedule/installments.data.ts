export type InstallmentStatus = 'paid' | 'next' | 'pending';

export type Installment = {
  id: string;
  number: number;
  date: string;
  status: InstallmentStatus;
};

export const installments: Installment[] = [
  { id: '1', number: 1, date: '05 Oct. 2026', status: 'paid' },
  { id: '2', number: 2, date: '05 Nov. 2026', status: 'paid' },
  { id: '3', number: 3, date: '05 Dic. 2026', status: 'paid' },
  { id: '4', number: 4, date: '05 Ene. 2027', status: 'next' },
  { id: '5', number: 5, date: '05 Feb. 2027', status: 'pending' },
  { id: '6', number: 6, date: '05 Mar. 2027', status: 'pending' },
];
