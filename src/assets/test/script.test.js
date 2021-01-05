import setUserName from '../script/script';

describe('Should have a factory for setting users', () => {
  test('User object should be defined', () => {
    expect(setUserName()).toBeDefined();
  });
  test('Should be able to create a user Object with a valid name', () => {
    const user = setUserName().User('Keli');

    expect(user.name).toBe('Keli');
  });

  test('Should have a score array to store\' s scores.', () => {
    const user = setUserName().User('Keli');

    expect(typeof user.score).toBe('object');
  });

  test('user object should have score property ', () => {
    const user = setUserName().User('Keli');
    expect(user.score).toEqual([]);
  });
});