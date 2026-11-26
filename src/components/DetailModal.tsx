import { useEffect, useRef } from 'react'
import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react'
import { categoryById } from '../data/wirelessMilestones'
import { STATUS_DESCRIPTION, STATUS_LABEL } from '../lib/milestoneMeta'
import type { Milestone } from '../types/timeline'
import './DetailModal.css'

interface DetailModalProps {
  milestone: Milestone
  index: number
  total: number
  previous: Milestone | null
  next: Milestone | null
  onClose: () => void
  onNavigate: (id: string) => void
}

export function DetailModal({
  milestone,
  index,
  total,
  previous,
  next,
  onClose,
  onNavigate,
}: DetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const category = categoryById[milestone.category]

  // Abre el diálogo modal nativo (foco atrapado y fondo inerte) al montar.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const trigger = document.activeElement as HTMLElement | null
    if (!dialog.open) dialog.showModal()
    document.documentElement.classList.add('modal-open')

    // Algunos navegadores desplazan el diálogo al enfocar; fijamos la cabecera.
    const frame = requestAnimationFrame(() => {
      dialog.scrollTop = 0
    })

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('modal-open')
      if (dialog.open) dialog.close()
      trigger?.focus?.()
    }
  }, [])

  // Al navegar entre fichas, vuelve al inicio del panel.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.scrollTop = 0
    const frame = requestAnimationFrame(() => {
      dialog.scrollTop = 0
    })
    return () => cancelAnimationFrame(frame)
  }, [milestone.id])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft' && previous) {
      event.preventDefault()
      onNavigate(previous.id)
    }
    if (event.key === 'ArrowRight' && next) {
      event.preventDefault()
      onNavigate(next.id)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="detail"
      aria-labelledby="detail-title"
      aria-describedby="detail-summary"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      style={{ '--accent': category.accent } as CSSProperties}
    >
      <div className="detail__bar">
        <span className="mono-label">
          Ficha técnica
          <span className="detail__counter">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </span>
        <button type="button" className="detail__close" onClick={onClose}>
          <span>Cerrar</span>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="m4 4 8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>

      <div className="detail__content">
        <header className="detail__hero">
          <div className="detail__year" aria-hidden="true">
            {milestone.year}
          </div>
          <div className="detail__meta">
            <span className="detail__category">
              <span className="detail__dot" aria-hidden="true" />
              {category.label}
            </span>
            <span className={`detail__status detail__status--${milestone.status}`}>
              {STATUS_LABEL[milestone.status]}
            </span>
          </div>

          <h2 id="detail-title" className="detail__title">
            {milestone.title}
          </h2>
          <p id="detail-summary" className="detail__summary">
            {milestone.summary}
          </p>
        </header>

        <dl className="detail__specs">
          <div className="detail__spec">
            <dt>Estándar / protocolo</dt>
            <dd>{milestone.standard}</dd>
          </div>
          <div className="detail__spec">
            <dt>Frecuencia / espectro</dt>
            <dd>{milestone.frequency}</dd>
          </div>
          <div className="detail__spec">
            <dt>Velocidad teórica</dt>
            <dd>{milestone.maxSpeed}</dd>
          </div>
          <div className="detail__spec">
            <dt>Estado del hito</dt>
            <dd>
              {STATUS_LABEL[milestone.status]}
              <span className="detail__spec-note">{STATUS_DESCRIPTION[milestone.status]}</span>
            </dd>
          </div>
        </dl>

        <section className="detail__section" aria-labelledby="detail-technical">
          <h3 id="detail-technical" className="detail__section-title">
            <span aria-hidden="true">01</span>
            Detalle técnico
          </h3>
          <p>{milestone.technicalDetails}</p>
        </section>

        <section className="detail__section detail__section--impact" aria-labelledby="detail-impact">
          <h3 id="detail-impact" className="detail__section-title">
            <span aria-hidden="true">02</span>
            Impacto en la industria
          </h3>
          <p>{milestone.impact}</p>
        </section>

        <ul className="detail__tags" aria-label="Etiquetas">
          {milestone.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>

        <footer className="detail__nav">
          <button
            type="button"
            className="detail__nav-button"
            disabled={!previous}
            onClick={() => previous && onNavigate(previous.id)}
          >
            <span className="detail__nav-label">
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M13 8H2M6 4 2 8l4 4" />
              </svg>
              Anterior
            </span>
            <span className="detail__nav-title">
              {previous ? `${previous.year} · ${previous.title}` : 'Inicio del registro'}
            </span>
          </button>

          <button
            type="button"
            className="detail__nav-button detail__nav-button--next"
            disabled={!next}
            onClick={() => next && onNavigate(next.id)}
          >
            <span className="detail__nav-label">
              Siguiente
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3 8h11M10 4l4 4-4 4" />
              </svg>
            </span>
            <span className="detail__nav-title">
              {next ? `${next.year} · ${next.title}` : 'Fin del registro'}
            </span>
          </button>
        </footer>
      </div>
    </dialog>
  )
}
