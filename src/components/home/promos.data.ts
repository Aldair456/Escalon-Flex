export type Promo =
  | {
      id: string;
      variant: 'feature';
      badge: string;
      eyebrow: string;
      heading: string;
      disclaimer: string;
    }
  | {
      id: string;
      variant: 'banner';
      badge: string;
      title: string;
      description: string;
      background: string;
    };

export const promos: Promo[] = [
  {
    id: 'construye-credito',
    variant: 'feature',
    badge: 'Construye crédito',
    eyebrow: '¿Sin historial crediticio?',
    heading: 'PRACTICA TU PRIMER CRÉDITO',
    disclaimer: '*Es tu ahorro. Sujeto a evaluación.',
  },
  {
    id: 'gas',
    variant: 'banner',
    badge: 'Pedir Gas',
    title: 'YAPEGAS',
    description: '¡Usa el cupón y ahorra S/ 5!',
    background: '#8B2FC9',
  },
  {
    id: 'cyber',
    variant: 'banner',
    badge: 'Cyber Yape',
    title: 'iPhone 15 128GB',
    description: 'Pagando con Crédito BCP',
    background: '#1F2937',
  },
];
