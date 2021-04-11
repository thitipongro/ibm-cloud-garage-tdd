let isPalindrome = (phrase) => {
  if (phrase === '') throw new Error('empty strings are not palindrome');
  if (phrase.trim() === '') return false;
  return phrase === phrase.split('').reverse().join('')
};

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true);
  });
  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false);
  });
  it('false for dad mom', () => {
    expect(isPalindrome('dad mom')).toBe(false);
  });
  it('false for whitespace', () => {
    expect(isPalindrome('  ')).toBe(false);
  });
  it('error for empty string', () => {
    expect(() => {
      isPalindrome('');
    }).toThrowError('empty strings are not palindrome');
  });
  it.todo ('error for not a string');
});