export const initialStore = () => {
  return {
    characters: [],
    vehicles: [],
    planets: [],
    favs: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "update_characters":

      return {
        ...store,
        characters: action.payload
      };

    case "update_planets":

      return {
        ...store,
        planets: action.payload
      };

    case "update_vehicles":

      return {
        ...store,
        vehicles: action.payload
      };

    case "add_favs":

      return {
        ...store,
        favs: store.favs.concat(action.payload)
      };

    case "delete_favs":

      return {
        ...store,
        favs: store.favs.filter((item, index) => item.name !== action.payload)
      };


    default:
      throw Error('Unknown action.');
  }
}
