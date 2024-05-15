// hotel.js
function getHotels(hotels) {
  if (Object.keys(hotels).length === 0) {
    return "Aucun hôtel disponible";
  }
  return hotels;
}

module.exports = getHotels;
