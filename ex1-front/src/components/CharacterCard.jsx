function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

export default function CharacterCard({ character }) {
  if (!character) {
    return (
      <section className="card">
        <h2>Character</h2>
        <p className="muted">
          Search for a character ID to view its information.
        </p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>Character</h2>
      <dl className="key-value-grid">
        {Object.entries(character).map(([key, value]) => (
          <div key={key} className="key-value-row">
            <dt>{formatLabel(key)}</dt>
            <dd>{String(value)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
