/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */

import Character from '../character';
import Team from '../app';

test('test Team', () => {
  const arrayHero = [
    new Character('Лучник', 'Bowman', 50, 1, 40, 10),
    new Character('Лучник', 'Bowman', 60, 2, 50, 20),
    new Character('Лучник', 'Bowman', 70, 3, 60, 30),
  ];

  const team = new Team(arrayHero);
  const result = [];
  for (const value of team) {
    result.push(value);
  }

  expect(result).toEqual(arrayHero);
});
