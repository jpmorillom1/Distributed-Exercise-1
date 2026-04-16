import { useState } from "react";
import ActionButton from "./ActionButton";
import CharacterCard from "./CharacterCard";
import { useCharacter } from "../hooks/useCharacter";

export default function SearchCharacterSection() {
  const [characterId, setCharacterId] = useState("1");
  const { character, loading, error, getCharacter } = useCharacter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedId = Number(characterId);
    if (!Number.isInteger(parsedId) || parsedId <= 0) {
      return;
    }

    getCharacter(parsedId);
  };

  const isInvalidId =
    !Number.isInteger(Number(characterId)) || Number(characterId) <= 0;

  return (
    <>
      <section className="card">
        <h2>Search character</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="characterId">Character ID</label>
          <input
            id="characterId"
            type="number"
            min="1"
            value={characterId}
            onChange={(event) => setCharacterId(event.target.value)}
            placeholder="Ej: 1"
          />
          <ActionButton type="submit" disabled={loading || isInvalidId}>
            {loading ? "Searching..." : "Search character"}
          </ActionButton>
        </form>
        {error && <p className="error-text">{error}</p>}
      </section>

      <CharacterCard character={character} />
    </>
  );
}
