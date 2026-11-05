export type CreditLevel = {
  id: string;
  label: string;
  heightRatio: number;
  current?: boolean;
};

export const creditLevels: CreditLevel[] = [
  { id: 'inicial', label: 'Inicial', heightRatio: 0.35, current: true },
  { id: 'construccion', label: 'En construcción', heightRatio: 0.55 },
  { id: 'solido', label: 'Sólido', heightRatio: 0.75 },
  { id: 'listo', label: 'Listo para tu crédito', heightRatio: 1 },
];
