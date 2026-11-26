import type { CSSProperties } from 'react'
import type {
  Category,
  CategoryFilter,
  CategoryId,
  Era,
  EraFilter,
  SortOrder,
} from '../types/timeline'
import './FilterBar.css'

interface FilterBarProps {
  categories: Category[]
  categoryCounts: Record<CategoryId, number>
  eras: Era[]
  eraCounts: Record<string, number>
  activeCategory: CategoryFilter
  activeEra: EraFilter
  sortOrder: SortOrder
  visibleCount: number
  totalCount: number
  isFiltered: boolean
  onCategoryChange: (category: CategoryFilter) => void
  onEraChange: (era: EraFilter) => void
  onSortToggle: () => void
  onReset: () => void
}

export function FilterBar({
  categories,
  categoryCounts,
  eras,
  eraCounts,
  activeCategory,
  activeEra,
  sortOrder,
  visibleCount,
  totalCount,
  isFiltered,
  onCategoryChange,
  onEraChange,
  onSortToggle,
  onReset,
}: FilterBarProps) {
  const totalCategories = categories.reduce((sum, category) => sum + categoryCounts[category.id], 0)

  return (
    <section className="filterbar" aria-label="Filtros de la línea del tiempo">
      <div className="filterbar__inner container">
        <div className="filterbar__row">
          <span className="filterbar__label mono-label">Dominio</span>

          <div className="chips" role="group" aria-label="Filtrar por dominio tecnológico">
            <button
              type="button"
              className={`chip${activeCategory === 'all' ? ' is-active' : ''}`}
              aria-pressed={activeCategory === 'all'}
              onClick={() => onCategoryChange('all')}
            >
              <span className="chip__label">Todos</span>
              <span className="chip__count">{totalCategories}</span>
            </button>

            {categories.map((category) => {
              const count = categoryCounts[category.id]
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`chip${isActive ? ' is-active' : ''}`}
                  style={{ '--chip-accent': category.accent } as CSSProperties}
                  aria-pressed={isActive}
                  disabled={count === 0 && !isActive}
                  onClick={() => onCategoryChange(isActive ? 'all' : category.id)}
                >
                  <span className="chip__dot" aria-hidden="true" />
                  <span className="chip__label">{category.shortLabel}</span>
                  <span className="chip__count">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="filterbar__tools">
            <button
              type="button"
              className="tool"
              onClick={onSortToggle}
              aria-label={
                sortOrder === 'asc'
                  ? 'Orden cronológico ascendente. Cambiar a descendente'
                  : 'Orden cronológico descendente. Cambiar a ascendente'
              }
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                {sortOrder === 'asc' ? (
                  <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
                ) : (
                  <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
                )}
              </svg>
              <span>{sortOrder === 'asc' ? '1864 → 2028' : '2028 → 1864'}</span>
            </button>

            {isFiltered && (
              <button type="button" className="tool tool--reset" onClick={onReset}>
                Limpiar
              </button>
            )}
          </div>
        </div>

        <div className="filterbar__row filterbar__row--eras">
          <span className="filterbar__label mono-label">Era</span>

          <div className="chips chips--eras" role="group" aria-label="Filtrar por era histórica">
            <button
              type="button"
              className={`chip chip--era${activeEra === 'all' ? ' is-active' : ''}`}
              aria-pressed={activeEra === 'all'}
              onClick={() => onEraChange('all')}
            >
              Todas
            </button>
            {eras.map((era) => {
              const count = eraCounts[era.id] ?? 0
              const isActive = activeEra === era.id
              return (
                <button
                  key={era.id}
                  type="button"
                  className={`chip chip--era${isActive ? ' is-active' : ''}`}
                  aria-pressed={isActive}
                  disabled={count === 0 && !isActive}
                  onClick={() => onEraChange(isActive ? 'all' : era.id)}
                >
                  {era.shortLabel}
                </button>
              )
            })}
          </div>

          <p className="filterbar__count" role="status" aria-live="polite">
            <strong>{visibleCount}</strong>
            <span aria-hidden="true"> / </span>
            <span className="sr-only">de</span>
            {totalCount} hitos
          </p>
        </div>
      </div>
    </section>
  )
}
