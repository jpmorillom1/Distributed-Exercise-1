import { useState } from 'react'
import './App.css'
import ActionButton from './components/ActionButton'
import CharacterCard from './components/CharacterCard'
import RequestHistoryList from './components/RequestHistoryList'
import { useCharacter } from './hooks/useCharacter'
import { useRequestHistory } from './hooks/useRequestHistory'

function App() {
  const [characterId, setCharacterId] = useState('1')
  const { character, loading: loadingCharacter, error: characterError, getCharacter } = useCharacter()
  const {
    history,
    loading: loadingHistory,
    error: historyError,
    reloadHistory,
  } = useRequestHistory()

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedId = Number(characterId)
    if (!Number.isInteger(parsedId) || parsedId <= 0) {
      return
    }

    getCharacter(parsedId)
  }

  const isInvalidId = !Number.isInteger(Number(characterId)) || Number(characterId) <= 0

  return (
    <main className="app-container">
      <header>
        <h1>Character Explorer</h1>
        <p>Consulta personajes y revisa el historial de transacciones del backend.</p>
      </header>

      <section className="card">
        <h2>Buscar personaje</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="characterId">ID del personaje</label>
          <input
            id="characterId"
            type="number"
            min="1"
            value={characterId}
            onChange={(event) => setCharacterId(event.target.value)}
            placeholder="Ej: 1"
          />
          <ActionButton type="submit" disabled={loadingCharacter || isInvalidId}>
            {loadingCharacter ? 'Consultando...' : 'Consultar personaje'}
          </ActionButton>
        </form>
        {characterError && <p className="error-text">{characterError}</p>}
      </section>

      <CharacterCard character={character} />

      <div className="history-header">
        <h2>Transacciones</h2>
        <ActionButton onClick={reloadHistory} disabled={loadingHistory}>
          {loadingHistory ? 'Actualizando...' : 'Recargar historial'}
        </ActionButton>
      </div>
      {historyError && <p className="error-text">{historyError}</p>}
      <RequestHistoryList history={history} />
    </main>
  )
}

export default App
