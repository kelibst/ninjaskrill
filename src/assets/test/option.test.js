import gameOptions from '../script/config/options';

describe('Should have a configuration factory for general settings', () => {
  test('option factory should be defined', () => {
    expect(gameOptions).toBeDefined();
  });
  test('option factory should be an object', () => {
    expect(typeof gameOptions).toBe('object');
  });

  test('option factory should have platformspeed', () => {
    expect(gameOptions.platformSpeedRange).toBeDefined();
  });
  test('platformspeed property should be an array with values', () => {
    expect(typeof gameOptions.platformSpeedRange).toBe('object');
  });

  test('option factory should have a mountain speed property', () => {
    expect(gameOptions.mountainSpeed).toBeDefined();
  });
  test('mountainspeed property should be a number', () => {
    expect(typeof gameOptions.mountainSpeed).toBe('number');
  });

  test('option factory should have a spawnRange property', () => {
    expect(gameOptions.spawnRange).toBeDefined();
  });

  test('spawRange property should be an object with values', () => {
    expect(typeof gameOptions.spawnRange).toBe('object');
  });

  test('option factory should have a platformSizeRange property', () => {
    expect(gameOptions.platformSizeRange).toBeDefined();
  });
  test('platformSizeRange property should be an object with values', () => {
    expect(typeof gameOptions.platformSizeRange).toBe('object');
  });

  test('option factory should have a platformHeightRange property', () => {
    expect(gameOptions.platformHeightRange).toBeDefined();
  });
  test('platformHeightRange property should be an object with values', () => {
    expect(typeof gameOptions.platformHeightRange).toBe('object');
  });

  test('option factory should have a platformHeighScale property', () => {
    expect(gameOptions.platformHeighScale).toBeDefined();
  });
  test('platformHeighScale property should be an object with values', () => {
    expect(typeof gameOptions.platformHeighScale).toBe('number');
  });

  test('option factory should have a platformVerticalLimit property', () => {
    expect(gameOptions.platformVerticalLimit).toBeDefined();
  });
  test('platformVerticalLimit property should be an object with values', () => {
    expect(typeof gameOptions.platformVerticalLimit).toBe('object');
  });

  test('option factory should have a playerGravity property', () => {
    expect(gameOptions.playerGravity).toBeDefined();
  });
  test('playerGravity property should be an object with values', () => {
    expect(typeof gameOptions.playerGravity).toBe('number');
  });
});