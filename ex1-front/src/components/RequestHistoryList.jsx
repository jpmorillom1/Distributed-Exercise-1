function toDisplayValue(value) {
  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

export default function RequestHistoryList({ history }) {
  return (
    <section className="card">
      <h2>History</h2>
      {history.length === 0 ? (
        <p className="muted">Theres not history to display.</p>
      ) : (
        <ul className="history-list">
          {history.map((item, index) => (
            <li key={item.id ?? index}>
              <div className="history-item-title">Transaction {index + 1}</div>
              <dl className="key-value-grid">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="key-value-row">
                    <dt>{key}</dt>
                    <dd>{toDisplayValue(value)}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
