// imports Potion() constructor into test, making Potion a usable variable
// without this, new Potion() would thrown an error
const Potion = require('../lib/Potion');

// replaces constructor's implementation with our faked data
jest.mock('../lib/Potion.js');

console.log(new Potion());

const Player = require('../lib/Player');

// we want players to have a NAME and 3 number properties: HEALTH, STRENGTH, & AGILITY
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});
console.log(new Player());