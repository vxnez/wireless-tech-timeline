/**
 * Modelo de dominio de la línea del tiempo.
 * Todo el contenido histórico vive en `src/data/wirelessMilestones.ts`
 * y debe cumplir estas interfaces (tipado estricto).
 */

export type CategoryId = 'mobile' | 'wifi' | 'iot' | 'radio'

/** Estado editorial del hito: consolidado, en despliegue o en investigación. */
export type MilestoneStatus = 'historical' | 'current' | 'emerging'

export interface Category {
  id: CategoryId
  /** Etiqueta larga usada en fichas y filtros. */
  label: string
  /** Etiqueta corta para espacios reducidos. */
  shortLabel: string
  /** Una línea de contexto sobre el dominio. */
  blurb: string
  /** Color de acento en formato hex (se inyecta como variable CSS). */
  accent: string
}

export interface Era {
  id: string
  label: string
  shortLabel: string
  /** Año inicial inclusivo. */
  start: number
  /** Año final inclusivo. */
  end: number
  description: string
}

export interface Milestone {
  id: string
  year: number
  title: string
  category: CategoryId
  /** Estándar, protocolo o desarrollo concreto. */
  standard: string
  /** Banda o rango del espectro electromagnético. */
  frequency: string
  /** Velocidad teórica o capacidad de referencia. */
  maxSpeed: string
  /** Resumen de una o dos frases para la tarjeta. */
  summary: string
  /** Explicación técnica ampliada para el panel de detalle. */
  technicalDetails: string
  /** Consecuencia industrial y cultural del hito. */
  impact: string
  tags: string[]
  status: MilestoneStatus
}

/** Agrupación calculada en tiempo de ejecución para el eje cronológico. */
export interface DecadeGroup {
  decade: number
  label: string
  milestones: Milestone[]
}

export interface EraGroup {
  era: Era
  decades: DecadeGroup[]
  count: number
}

export type CategoryFilter = CategoryId | 'all'
export type EraFilter = string | 'all'
export type SortOrder = 'asc' | 'desc'
