// hotel.test.js
const getHotels = require('./hotel');

describe('getHotels', () => {
  it('should return the list of hotels when hotels are available', () => {
    const hotels = {
      hotel1: "aaaaaaaaaaa",
      hotel2: "bbbbbbbbb",
      hotel3: "ccccccccccc"
    };
    expect(getHotels(hotels)).toEqual(hotels);
  });

  it('should return a message when no hotels are available', () => {
    expect(getHotels({})).toEqual("Aucun hôtel disponible");
  });
});
