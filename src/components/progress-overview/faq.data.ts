export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export const faqEntries: FaqEntry[] = [
  {
    id: 'que-es',
    question: '¿Qué es Construye crédito?',
    answer:
      'Es un reto para que practiques pagos puntuales y empieces a generar historial, aunque nunca hayas tenido una tarjeta o préstamo.',
  },
  {
    id: 'dinero',
    question: '¿Mi dinero es mío? ¿Puedo retirarlo?',
    answer: 'Sí, es 100% tuyo y lo recibes completo al final. Si lo retiras antes, el reto se pausa.',
    defaultOpen: true,
  },
  {
    id: 'historial',
    question: '¿Cómo se construye un historial crediticio?',
    answer:
      'Pagando tus cuotas a tiempo. Cada pago puntual queda registrado y ayuda a construir tu reputación financiera.',
  },
  {
    id: 'sbs',
    question: '¿Esto aparece en la SBS?',
    answer: 'No. Como es tu propio ahorro, no se reporta a centrales de riesgo. Es solo para practicar.',
  },
  {
    id: 'atraso',
    question: '¿Qué pasa si me atraso?',
    answer: 'No pierdes tu dinero, pero tu nivel puede bajar y el reto se extiende un poco más.',
  },
  {
    id: 'termino',
    question: '¿Qué pasa cuando termino?',
    answer: 'Recibes todo tu ahorro de vuelta y quedas listo para postular a tu primer producto de crédito real.',
  },
];
