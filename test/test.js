import getDescription from '../src/js/script';

test('test for Bowman', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = '😠 Л(1) ⚔40 🛡10 ❤50';
  expect(received).toBe(expected);
});

test('test for Swordsman', () => {
  const obj = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 11,
    attack: 20,
    defence: 40,
  };

  const received = getDescription(obj);
  const expected = '😡 М(11) ⚔20 🛡40 ❤100';
  expect(received).toBe(expected);
});

test('test for Magician', () => {
  const obj = {
    name: 'Маг',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 20,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = '🧐 М(1) ⚔20 🛡10 ❤50';
  expect(received).toBe(expected);
});

test('test for Daemon', () => {
  const obj = {
    name: 'Демон',
    type: 'Daemon',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = '👿 Д(1) ⚔40 🛡10 ❤50';
  expect(received).toBe(expected);
});

test('test for Undead', () => {
  const obj = {
    name: 'Нежить',
    type: 'Undead',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = '💀 Н(1) ⚔40 🛡10 ❤50';
  expect(received).toBe(expected);
});

test('test for Zombie', () => {
  const obj = {
    name: 'Зомби',
    type: 'Zombie',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = '🧟 З(1) ⚔40 🛡10 ❤50';
  expect(received).toBe(expected);
});

test('test for Human', () => {
  const obj = {
    name: 'Человек',
    type: 'Human',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = getDescription(obj);
  const expected = ' Ч(1) ⚔40 🛡10 ❤50';
  expect(received).toBe(expected);
});
