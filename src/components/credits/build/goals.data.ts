export type CreditGoal = {
  id: string;
  title: string;
  description: string;
};

export const creditGoals: CreditGoal[] = [
  { id: 'educacion', title: 'Educación', description: 'Prepararme para nuevas oportunidades' },
  { id: 'emprendimiento', title: 'Emprendimiento', description: 'Dar el primer paso con mi negocio' },
  { id: 'meta-personal', title: 'Meta personal', description: 'Planificar una compra importante' },
  { id: 'otra', title: 'Otra', description: 'Cuéntanos tu meta' },
];
