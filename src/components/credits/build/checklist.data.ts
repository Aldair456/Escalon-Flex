export type ChecklistEntry = {
  id: string;
  label: string;
  done: boolean;
};

export const startingPointChecklist: ChecklistEntry[] = [
  { id: 'cuenta-activa', label: 'Cuenta Yape activa', done: true },
  { id: 'uso-frecuente', label: 'Uso frecuente de Yape', done: true },
  { id: 'plan-pagos', label: 'Completar tu primer plan de pagos', done: false },
];
