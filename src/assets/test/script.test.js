import setUserName from '../script/script';

describe('Should have a factory for setting users', () => {
    test('User object should be defined', () => {
      expect(setUserName()).toBeDefined();
    });
    test('Should be able to create a user Object with a valid name', () => {
        const user = setUserName().User("Keli");

        expect(user.name).toBe('Keli');
    });

    test("user object should have score property ", () => {
        const user = setUserName().User("Keli");
        expect(user.score).toBe(0);
    });

});