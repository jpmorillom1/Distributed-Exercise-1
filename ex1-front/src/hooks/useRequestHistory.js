import { useEffect, useState } from "react";
import { fetchRequestHistory } from "../api";

export function useRequestHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHistory = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchRequestHistory();
      setHistory(Array.isArray(data) ? data : []);
    } catch (err) {
      setHistory([]);
      setError(err.message || "No se pudo obtener el historial");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return {
    history,
    loading,
    error,
    reloadHistory: loadHistory,
  };
}
