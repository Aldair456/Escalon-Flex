export type CreditStep = {
  id: string;
  number: number;
  title: string;
  description: string;
};

export const creditSteps: CreditStep[] = [
  { id: 'meta', number: 1, title: 'Elige tu meta', description: 'Para qué quieres construir tu historial.' },
  { id: 'cuotas', number: 2, title: 'Paga cuotas pequeñas', description: 'Desde Yape, con el plan que elijas.' },
  { id: 'nivel', number: 3, title: 'Sube de nivel', description: 'Cada pago puntual refleja tu constancia.' },
];
