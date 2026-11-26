import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { categories, categoryById } from '../data/wirelessMilestones'
import type { EraGroup, Milestone, SortOrder } from '../types/timeline'
import { MilestoneCard } from './MilestoneCard'
import './Timeline.css'

interface TimelineProps {
  groups: EraGroup[]
  allMilestones: Milestone[]
  visibleCount: number
  sortOrder: SortOrder
  onOpen: (id: string) => void
  onReset: () => void
}

interface DecadeStat {
  decade: number
  total: number
  visible: number
  dominantCategory: Milestone['category'] | null
}

export function Timeline({
  groups,
  allMilestones,
  visibleCount,
  sortOrder,
  onOpen,
  onReset,
}: TimelineProps) {
  const reduceMotion = useReducedMotion()
  const [activeDecade, setActiveDecade] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const firstYear = allMilestones[0]?.year ?? 1864
  const lastYear = allMilestones[allMilestones.length - 1]?.year ?? 2028

  const ordered = useMemo(
    () => groups.flatMap((group) => group.decades.flatMap((decade) => decade.milestones)),
    [groups],
  )

  const indexById = useMemo(() => {
    const map = new Map<string, number>()
    ordered.forEach((milestone, index) => map.set(milestone.id, index))
    return map
  }, [ordered])

  const decadeStats = useMemo<DecadeStat[]>(() => {
    if (allMilestones.length === 0) return []
    const first = Math.floor(allMilestones[0].year / 10) * 10
    const last = Math.floor(allMilestones[allMilestones.length - 1].year / 10) * 10
    const stats: DecadeStat[] = []

    for (let decade = first; decade <= last; decade += 10) {
      const items = allMilestones.filter(
        (milestone) => Math.floor(milestone.year / 10) * 10 === decade,
      )
      const counts = new Map<Milestone['category'], number>()
      items.forEach((item) => counts.set(item.category, (counts.get(item.category) ?? 0) + 1))
      let dominant: Milestone['category'] | null = null
      let max = 0
      counts.forEach((value, key) => {
        if (value > max) {
          max = value
          dominant = key
        }
      })
      stats.push({
        decade,
        total: items.length,
        visible: items.filter((item) => indexById.has(item.id)).length,
        dominantCategory: dominant,
      })
    }
    return stats
  }, [allMilestones, indexById])

  const maxDecadeCount = Math.max(1, ...decadeStats.map((stat) => stat.total))

  // Década activa según la posición de scroll.
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLElement>('[data-decade]'))
    if (anchors.length === 0) return

    observerRef.current?.disconnect()
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          const value = Number(visible[0].target.getAttribute('data-decade'))
          if (!Number.isNaN(value)) setActiveDecade(value)
        }
      },
      { rootMargin: '-170px 0px -62% 0px', threshold: [0, 0.2, 0.6, 1] },
    )

    anchors.forEach((anchor) => observer.observe(anchor))
    observerRef.current = observer

    return () => observer.disconnect()
  }, [groups])

  const scrollToDecade = (decade: number) => {
    const target = document.querySelector<HTMLElement>(`[data-decade="${decade}"]`)
    if (!target) return
    setActiveDecade(decade)
    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="timeline-section" aria-labelledby="timeline-heading">
      <div className="container">
        <div className="timeline-head">
          <div>
            <p className="mono-label">
              Eje cronológico · {firstYear} → {lastYear}
            </p>
            <h2 id="timeline-heading" className="timeline-head__title">
              {allMilestones.length} hitos, una sola onda
            </h2>
          </div>
          <div className="legend" aria-label="Leyenda de dominios">
            {categories.map((category) => (
              <span className="legend__item" key={category.id}>
                <span
                  className="legend__dot"
                  style={{ background: category.accent }}
                  aria-hidden="true"
                />
                {category.label}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Navegación rápida por décadas ---------- */}
        <nav className="scrubber" aria-label="Navegación rápida por décadas">
          <div className="scrubber__head">
            <span className="mono-label">Espectro cronológico</span>
            <span className="scrubber__hint">
              {activeDecade !== null ? `Década de ${activeDecade}` : 'Selecciona una década'}
              <span aria-hidden="true"> · </span>
              clic para saltar
            </span>
          </div>

          <div className="scrubber__scroll">
            <div className="scrubber__bars">
              {decadeStats.map((stat) => {
                const accent = stat.dominantCategory
                  ? categoryById[stat.dominantCategory].accent
                  : 'var(--line-strong)'
                const height = stat.total === 0 ? 6 : 18 + (stat.total / maxDecadeCount) * 82
                const isActive = activeDecade === stat.decade
                const isAvailable = stat.visible > 0
                return (
                  <button
                    key={stat.decade}
                    type="button"
                    className={`scrubber__bar${isActive ? ' is-active' : ''}${
                      isAvailable ? '' : ' is-empty'
                    }`}
                    style={
                      {
                        '--bar-accent': accent,
                        '--bar-height': `${height}%`,
                      } as CSSProperties
                    }
                    disabled={!isAvailable}
                    aria-label={`Ir a la década de ${stat.decade}: ${stat.visible} ${
                      stat.visible === 1 ? 'hito visible' : 'hitos visibles'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => scrollToDecade(stat.decade)}
                  >
                    <span className="scrubber__track" aria-hidden="true">
                      <span className="scrubber__col" />
                    </span>
                    <span className="scrubber__year" aria-hidden="true">
                      {stat.decade}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>

        {/* ---------- Estado vacío ---------- */}
        {visibleCount === 0 ? (
          <div className="timeline-empty" role="status">
            <p className="mono-label">Sin señal</p>
            <h3 className="timeline-empty__title">Ningún hito coincide con esa búsqueda.</h3>
            <p className="timeline-empty__text">
              Prueba con otro término —«GSM», «6 GHz», «satélite»— o restablece los filtros para
              volver a la cronología completa.
            </p>
            <button type="button" className="timeline-empty__button" onClick={onReset}>
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className={`timeline${sortOrder === 'desc' ? ' timeline--desc' : ''}`}>
            {groups.map((group, eraIndex) => (
              <section
                className="era"
                key={group.era.id}
                aria-labelledby={`era-${group.era.id}`}
              >
                <m.header
                  className="era__head"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <span className="era__num" aria-hidden="true">
                    {String(eraIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="era__heading">
                    <h2 id={`era-${group.era.id}`} className="era__title">
                      {group.era.label}
                    </h2>
                    <p className="era__range">
                      {group.era.start}—{group.era.end}
                      <span aria-hidden="true"> · </span>
                      {group.count} {group.count === 1 ? 'hito' : 'hitos'}
                    </p>
                  </div>
                  <p className="era__desc">{group.era.description}</p>
                </m.header>

                <div className="era__body">
                  {group.decades.map((decade) => (
                    <div className="decade" key={decade.decade}>
                      <div
                        className="decade__anchor"
                        data-decade={decade.decade}
                        id={`decade-${decade.decade}`}
                      >
                        <span className="decade__label">
                          Década de {decade.decade}
                          <span className="decade__count">
                            {decade.milestones.length}{' '}
                            {decade.milestones.length === 1 ? 'hito' : 'hitos'}
                          </span>
                        </span>
                        <span className="decade__line" aria-hidden="true" />
                      </div>

                      {decade.milestones.map((milestone) => {
                        const category = categoryById[milestone.category]
                        return (
                          <div className="row" key={milestone.id}>
                            <div className="row__rail" aria-hidden="true">
                              <span className="row__year">{milestone.year}</span>
                            </div>
                            <span
                              className="row__dot"
                              style={{ '--accent': category.accent } as CSSProperties}
                              aria-hidden="true"
                            />
                            <MilestoneCard
                              milestone={milestone}
                              index={indexById.get(milestone.id) ?? 0}
                              accent={category.accent}
                              categoryLabel={category.label}
                              onOpen={onOpen}
                            />
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <footer className="timeline-end">
              <span className="timeline-end__line" aria-hidden="true" />
              <p className="mono-label">Fin del registro · {lastYear}</p>
              <p className="timeline-end__text">
                Los hitos marcados como «en investigación» son objetivos publicados por sus grupos
                de estandarización, no productos disponibles.
              </p>
            </footer>
          </div>
        )}
      </div>
    </section>
  )
}
