import { memo } from 'react'
import type { CSSProperties } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import type { Milestone } from '../types/timeline'
import { STATUS_LABEL } from '../lib/milestoneMeta'
import './MilestoneCard.css'

interface MilestoneCardProps {
  milestone: Milestone
  index: number
  accent: string
  categoryLabel: string
  onOpen: (id: string) => void
}

function MilestoneCardBase({
  milestone,
  index,
  accent,
  categoryLabel,
  onOpen,
}: MilestoneCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <m.article
      className="card"
      style={{ '--accent': accent } as CSSProperties}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px 0px -40px 0px' }}
      transition={{ duration: 0.5, delay: Math.min(index % 4, 3) * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="card__top">
        <span className="card__index">
          Hito {String(index + 1).padStart(2, '0')}
        </span>
        <span className="card__year">{milestone.year}</span>
        <span className="card__category">
          <span className="card__dot" aria-hidden="true" />
          {categoryLabel}
        </span>
        <span className={`card__status card__status--${milestone.status}`}>
          {STATUS_LABEL[milestone.status]}
        </span>
      </div>

      <h3 className="card__title">
        <button
          type="button"
          className="card__trigger"
          onClick={() => onOpen(milestone.id)}
          aria-haspopup="dialog"
        >
          {milestone.title}
          <span className="sr-only"> — abrir ficha técnica</span>
        </button>
      </h3>

      <p className="card__summary">{milestone.summary}</p>

      <dl className="card__specs">
        <div className="card__spec">
          <dt>Estándar</dt>
          <dd>{milestone.standard}</dd>
        </div>
        <div className="card__spec">
          <dt>Espectro</dt>
          <dd>{milestone.frequency}</dd>
        </div>
        <div className="card__spec">
          <dt>Velocidad</dt>
          <dd>{milestone.maxSpeed}</dd>
        </div>
      </dl>

      <div className="card__foot">
        <span className="card__cta" aria-hidden="true">
          Abrir ficha
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </span>
        <span className="card__tags">
          {milestone.tags.slice(0, 2).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </span>
      </div>
    </m.article>
  )
}

export const MilestoneCard = memo(MilestoneCardBase)
