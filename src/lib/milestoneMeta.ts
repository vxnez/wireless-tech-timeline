import type { MilestoneStatus } from '../types/timeline'

export const STATUS_LABEL: Record<MilestoneStatus, string> = {
  historical: 'Consolidado',
  current: 'En despliegue',
  emerging: 'En investigación',
}

export const STATUS_DESCRIPTION: Record<MilestoneStatus, string> = {
  historical: 'Tecnología desplegada y verificada a gran escala.',
  current: 'Estándar publicado con despliegue comercial en curso.',
  emerging: 'Objetivo de estandarización o investigación; aún sin producto masivo.',
}
