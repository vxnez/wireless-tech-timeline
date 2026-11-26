import { useEffect, useRef } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import './Header.css'

interface HeaderProps {
  query: string
  onQueryChange: (value: string) => void
  total: number
  visible: number
  yearFrom: number
  yearTo: number
  categoryCount: number
  eraCount: number
}

const formatNumber = (value: number) => new Intl.NumberFormat('es-ES').format(value)

export function Header({
  query,
  onQueryChange,
  total,
  visible,
  yearFrom,
  yearTo,
  categoryCount,
  eraCount,
}: HeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const reduceMotion = useReducedMotion()

  // Atajo "/" para enfocar la búsqueda, patrón habitual en archivos y docs.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return
      event.preventDefault()
      inputRef.current?.focus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const rise = (delay: number) =>
    reduceMotion
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] as const },
        }

  return (
    <header className="hero" id="top">
      <div className="topbar container">
        <a className="brand" href="#top" aria-label="Onda, archivo inalámbrico: volver arriba">
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="2.4" fill="currentColor" />
            <path d="M9.6 22.4a9 9 0 0 1 0-12.8" />
            <path d="M22.4 9.6a9 9 0 0 1 0 12.8" />
            <path d="M5.4 26.6a15 15 0 0 1 0-21.2" />
            <path d="M26.6 5.4a15 15 0 0 1 0 21.2" />
          </svg>
          <span className="brand__name">Onda</span>
          <span className="brand__slash" aria-hidden="true">
            /
          </span>
          <span className="brand__sub">Archivo inalámbrico</span>
        </a>

        <div className="topbar__meta">
          <span className="topbar__live">
            <span className="topbar__dot" aria-hidden="true" />
            Edición 2026
          </span>
          <span className="topbar__range">
            {yearFrom} — {yearTo}
          </span>
        </div>
      </div>

      <div className="hero__grid container">
        <div className="hero__copy">
          <m.p className="hero__kicker" {...rise(0)}>
            <span className="hero__rule" aria-hidden="true" />
            Línea del tiempo interactiva
            <span className="hero__kicker-sep" aria-hidden="true">
              ·
            </span>
            <span className="hero__kicker-num">{total} hitos</span>
          </m.p>

          <m.h1 className="hero__title" {...rise(0.06)}>
            Del chispazo a la
            <br />
            <em>malla invisible</em>.
          </m.h1>

          <m.p className="hero__lead" {...rise(0.12)}>
            De las ecuaciones de Maxwell al Wi-Fi 7, el 5G-Advanced y el 6G.
            Un recorrido cronológico por los estándares, el espectro y las
            decisiones de ingeniería que hicieron posible la comunicación sin cables.
          </m.p>

          <m.form
            className="search"
            role="search"
            onSubmit={(event) => event.preventDefault()}
            {...rise(0.18)}
          >
            <svg className="search__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <circle cx="8.6" cy="8.6" r="5.6" />
              <path d="m12.8 12.8 4.2 4.2" />
            </svg>
            <label className="sr-only" htmlFor="timeline-search">
              Buscar hitos por tecnología, estándar o año
            </label>
            <input
              ref={inputRef}
              id="timeline-search"
              className="search__input"
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault()
                  onQueryChange('')
                  event.currentTarget.blur()
                }
              }}
              placeholder="Buscar «Wi-Fi 7», «GSM», «1920»…"
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="search"
            />
            {query ? (
              <button
                type="button"
                className="search__clear"
                onClick={() => {
                  onQueryChange('')
                  inputRef.current?.focus()
                }}
                aria-label="Borrar búsqueda"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="m4 4 8 8M12 4l-8 8" />
                </svg>
              </button>
            ) : (
              <kbd className="search__kbd" aria-hidden="true">
                /
              </kbd>
            )}
          </m.form>

          <m.p className="hero__count" {...rise(0.24)}>
            <span className="hero__count-num">{formatNumber(visible)}</span> de{' '}
            {formatNumber(total)} hitos visibles
          </m.p>
        </div>

        <m.aside className="telemetry" aria-label="Resumen del archivo" {...rise(0.16)}>
          <div className="telemetry__head">
            <span className="mono-label">Telemetría del archivo</span>
            <span className="telemetry__led" aria-hidden="true" />
          </div>
          <dl className="telemetry__list">
            <div className="telemetry__row">
              <dt>Hitos catalogados</dt>
              <dd>{formatNumber(total)}</dd>
            </div>
            <div className="telemetry__row">
              <dt>Años cubiertos</dt>
              <dd>{formatNumber(yearTo - yearFrom)}</dd>
            </div>
            <div className="telemetry__row">
              <dt>Dominios técnicos</dt>
              <dd>{categoryCount}</dd>
            </div>
            <div className="telemetry__row">
              <dt>Eras históricas</dt>
              <dd>{eraCount}</dd>
            </div>
          </dl>
          <div className="telemetry__foot">
            <span>{yearFrom}</span>
            <span className="telemetry__track" aria-hidden="true">
              <span className="telemetry__track-dot" />
            </span>
            <span>{yearTo}</span>
          </div>
        </m.aside>
      </div>

      <div className="hero__ruler" aria-hidden="true" />
    </header>
  )
}
