// 0-constants.test.js
import { taskFirst, getLast, taskNext } from './0-constants';

describe('0-constants tests', () => {
  it('taskFirst returns the correct string', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when i can.');
  });

  it('getLast returns the correct string', () => {
    expect.assertions(1);
    expect(getLast()).toBe(' is okay');
  });

  it('taskNext returns the correct concatenated string', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
