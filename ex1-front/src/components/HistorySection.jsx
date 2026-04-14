import ActionButton from "./ActionButton";
import RequestHistoryList from "./RequestHistoryList";
import { useRequestHistory } from "../hooks/useRequestHistory";

export default function HistorySection() {
  const { history, loading, error, reloadHistory } = useRequestHistory();

  return (
    <>
      <div className="history-header">
        <h2>Transactions</h2>
        <ActionButton onClick={reloadHistory} disabled={loading}>
          {loading ? "Updating..." : "Reload history"}
        </ActionButton>
      </div>
      {error && <p className="error-text">{error}</p>}
      <RequestHistoryList history={history} />
    </>
  );
}
