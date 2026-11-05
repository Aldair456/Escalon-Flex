import { Ionicons } from '@expo/vector-icons';

export type QuickAction = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  route?: string;
};

export const quickActions: QuickAction[] = [
  { id: 'recargar', label: 'Recargar celular', icon: 'phone-portrait-outline', color: '#7C3AED' },
  { id: 'yapear-servicios', label: 'Yapear servicios', icon: 'water-outline', color: '#2563EB' },
  { id: 'promos', label: 'Promos', icon: 'pricetag-outline', color: '#F97316' },
  { id: 'codigo-aprobacion', label: 'Código de aprobación', icon: 'bag-check-outline', color: '#2563EB' },
  { id: 'creditos', label: 'Créditos', icon: 'cash-outline', color: '#16A34A', route: '/credits' },
  { id: 'tienda', label: 'Tienda', icon: 'storefront-outline', color: '#7C3AED' },
  { id: 'dolares', label: 'Dólares', icon: 'wallet-outline', color: '#16A34A' },
  { id: 'remesas', label: 'Remesas', icon: 'globe-outline', color: '#2563EB' },
  { id: 'seguros', label: 'Seguros y SOAT', icon: 'shield-checkmark-outline', color: '#7C3AED' },
  { id: 'bus', label: 'Viajar en bus', icon: 'bus-outline', color: '#F97316' },
  { id: 'entradas', label: 'Entradas', icon: 'ticket-outline', color: '#DB2777' },
  { id: 'ver-todo', label: 'Ver todo', icon: 'add-outline', color: '#6E2A86' },
];
