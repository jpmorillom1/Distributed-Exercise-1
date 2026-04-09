import { useState } from "react";
import { fetchCharacterById } from "../api";

export function useCharacter() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCharacter = async (id) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    } catch (err) {
      setCharacter(null);
      setError(err.message || "No se pudo obtener el personaje");
    } finally {
      setLoading(false);
    }
  };

  return {
    character,
    loading,
    error,
    getCharacter,
  };
}
