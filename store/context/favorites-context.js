import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      // Avoid adding duplicates
      if (!currentFavIds.includes(id)) {
        console.log("Adding favorite:", id);
        return [...currentFavIds, id];
      }
      return currentFavIds;
    });
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
