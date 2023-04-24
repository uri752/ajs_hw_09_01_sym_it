/* // TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

/* const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  } */

export default class Team {
  constructor(members) {
    this.members = members;
  }

  [Symbol.iterator]() {
    const limit = this.members.length;
    let counter = -1;
    const thisTeam = this;

    return {
      next() {
        counter += 1;
        if (counter < limit) {
          return {
            value: thisTeam.members[counter],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
