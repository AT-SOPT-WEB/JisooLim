import { useEffect, useState } from "react";
const RECENT_KEY = "recentSearches";

export default function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    setRecentSearches(stored);
  }, []);

  const addSearch = (username) => {
    let updated = recentSearches.filter((item) => item !== username);
    updated.push(username);
    if (updated.length > 3) updated = updated.slice(updated.length - 3);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };
  
  const deleteSearch = (username) => {
    const updated = recentSearches.filter((item) => item !== username);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };
  return { recentSearches, addSearch, deleteSearch };
}
