import { useCallback, useEffect, useMemo, useState } from 'react'
import { DetailModal } from './components/DetailModal'
import { FilterBar } from './components/FilterBar'
import { Header } from './components/Header'
import { Timeline } from './components/Timeline'
import { categories, eras, getEraForYear, milestones } from './data/wirelessMilestones'
import type {
  CategoryFilter,
  CategoryId,
  EraFilter,
  EraGroup,
  Milestone,
  SortOrder,
} from './types/timeline'
import './App.css'

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const FIRST_YEAR = milestones[0].year
const LAST_YEAR = milestones[milestones.length - 1].year

const EMPTY_CATEGORY_COUNTS: Record<CategoryId, number> = {
  mobile: 0,
  wifi: 0,
  iot: 0,
  radio: 0,
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      }}
      aria-label="Volver al inicio"
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
      </svg>
    </button>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const [activeEra, setActiveEra] = useState<EraFilter>('all')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // 1. Búsqueda instantánea sobre todos los campos relevantes.
  const searchScoped = useMemo(() => {
    const needle = normalize(query.trim())
    if (!needle) return milestones

    return milestones.filter((milestone) => {
      const haystack = normalize(
        [
          milestone.title,
          milestone.standard,
          milestone.frequency,
          milestone.maxSpeed,
          milestone.summary,
          String(milestone.year),
          categories.find((category) => category.id === milestone.category)?.label ?? '',
          ...milestone.tags,
        ].join(' '),
      )
      return haystack.includes(needle)
    })
  }, [query])

  // 2. Ámbitos parciales para calcular contadores coherentes.
  const eraScoped = useMemo(
    () =>
      activeEra === 'all'
        ? searchScoped
        : searchScoped.filter((milestone) => getEraForYear(milestone.year).id === activeEra),
    [searchScoped, activeEra],
  )

  const categoryScoped = useMemo(
    () =>
      activeCategory === 'all'
        ? searchScoped
        : searchScoped.filter((milestone) => milestone.category === activeCategory),
    [searchScoped, activeCategory],
  )

  const categoryCounts = useMemo(() => {
    const counts = { ...EMPTY_CATEGORY_COUNTS }
    eraScoped.forEach((milestone) => {
      counts[milestone.category] += 1
    })
    return counts
  }, [eraScoped])

  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    eras.forEach((era) => {
      counts[era.id] = 0
    })
    categoryScoped.forEach((milestone) => {
      counts[getEraForYear(milestone.year).id] += 1
    })
    return counts
  }, [categoryScoped])

  // 3. Lista final filtrada.
  const filtered = useMemo(
    () => eraScoped.filter((milestone) => activeCategory === 'all' || milestone.category === activeCategory),
    [eraScoped, activeCategory],
  )

  // 4. Agrupación por era y década, respetando el orden elegido.
  const groups = useMemo<EraGroup[]>(() => {
    const direction = sortOrder === 'asc' ? 1 : -1
    const sorted = [...filtered].sort((a, b) => (a.year - b.year) * direction)
    const eraList = sortOrder === 'asc' ? eras : [...eras].reverse()
    const result: EraGroup[] = []

    eraList.forEach((era) => {
      const items = sorted.filter((milestone) => getEraForYear(milestone.year).id === era.id)
      if (items.length === 0) return

      const decadeMap = new Map<number, Milestone[]>()
      items.forEach((milestone) => {
        const decade = Math.floor(milestone.year / 10) * 10
        const bucket = decadeMap.get(decade)
        if (bucket) bucket.push(milestone)
        else decadeMap.set(decade, [milestone])
      })

      const decades = Array.from(decadeMap.entries()).map(([decade, decadeMilestones]) => ({
        decade,
        label: `Década de ${decade}`,
        milestones: decadeMilestones,
      }))

      if (sortOrder === 'desc') decades.reverse()

      result.push({ era, decades, count: items.length })
    })

    return result
  }, [filtered, sortOrder])

  const orderedVisible = useMemo(
    () => groups.flatMap((group) => group.decades.flatMap((decade) => decade.milestones)),
    [groups],
  )

  const selected = useMemo(
    () => (selectedId ? milestones.find((milestone) => milestone.id === selectedId) ?? null : null),
    [selectedId],
  )

  const selectedIndex = selected ? orderedVisible.findIndex((item) => item.id === selected.id) : -1
  const previous = selectedIndex > 0 ? orderedVisible[selectedIndex - 1] : null
  const next =
    selectedIndex >= 0 && selectedIndex < orderedVisible.length - 1
      ? orderedVisible[selectedIndex + 1]
      : null

  const resetFilters = useCallback(() => {
    setQuery('')
    setActiveCategory('all')
    setActiveEra('all')
  }, [])

  const isFiltered = query.trim() !== '' || activeCategory !== 'all' || activeEra !== 'all'

  return (
    <div className="app">
      <a className="skip-link" href="#linea">
        Saltar a la línea del tiempo
      </a>

      <Header
        query={query}
        onQueryChange={setQuery}
        total={milestones.length}
        visible={filtered.length}
        yearFrom={FIRST_YEAR}
        yearTo={LAST_YEAR}
        categoryCount={categories.length}
        eraCount={eras.length}
      />

      <FilterBar
        categories={categories}
        categoryCounts={categoryCounts}
        eras={eras}
        eraCounts={eraCounts}
        activeCategory={activeCategory}
        activeEra={activeEra}
        sortOrder={sortOrder}
        visibleCount={filtered.length}
        totalCount={milestones.length}
        isFiltered={isFiltered}
        onCategoryChange={setActiveCategory}
        onEraChange={setActiveEra}
        onSortToggle={() => setSortOrder((order) => (order === 'asc' ? 'desc' : 'asc'))}
        onReset={resetFilters}
      />

      <main id="linea" className="app__main">
        <Timeline
          groups={groups}
          allMilestones={milestones}
          visibleCount={filtered.length}
          sortOrder={sortOrder}
          onOpen={setSelectedId}
          onReset={resetFilters}
        />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand">
            <p className="mono-label">Onda / Archivo inalámbrico</p>
            <p className="site-footer__statement">
              Una lectura cronológica de cómo el espectro electromagnético se convirtió en
              infraestructura civil.
            </p>
          </div>

          <div className="site-footer__block">
            <h2 className="mono-label">Metodología</h2>
            <p>
              Cada ficha registra el año de demostración o publicación del estándar, la banda de
              espectro y la velocidad teórica de referencia. Las cifras de pico no equivalen al
              rendimiento real: dependen del ancho de canal, del MIMO y de las condiciones del
              medio.
            </p>
          </div>

          <div className="site-footer__block">
            <h2 className="mono-label">Fuentes de referencia</h2>
            <ul className="site-footer__list">
              <li>IEEE 802.11 Working Group</li>
              <li>3GPP Releases 8–18</li>
              <li>ITU-R IMT-2030 (M.2160)</li>
              <li>Wi-Fi Alliance &amp; Bluetooth SIG</li>
              <li>Connectivity Standards Alliance</li>
            </ul>
          </div>

          <div className="site-footer__block">
            <h2 className="mono-label">Stack</h2>
            <ul className="site-footer__list">
              <li>React 19 + TypeScript</li>
              <li>Vite · build estático</li>
              <li>Framer Motion + CSS modular</li>
              <li>Despliegue en Vercel</li>
            </ul>
          </div>
        </div>

        <div className="container site-footer__base">
          <span>© 2026 · Proyecto educativo independiente</span>
          <span>{milestones.length} hitos · {LAST_YEAR - FIRST_YEAR} años de historia</span>
        </div>
      </footer>

      {selected && (
        <DetailModal
          milestone={selected}
          index={Math.max(0, selectedIndex)}
          total={orderedVisible.length}
          previous={previous}
          next={next}
          onClose={() => setSelectedId(null)}
          onNavigate={setSelectedId}
        />
      )}

      <BackToTop />
    </div>
  )
}
