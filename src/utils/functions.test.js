import { blockBtnText } from './functions';

describe('blockBtnText function', () => {
  it('returns correct text for category 1', () => {
    const buttonText = blockBtnText('1');
    expect(buttonText).toBe('All products');
  });

  it('returns correct text for category 2', () => {
    const buttonText = blockBtnText('2');
    expect(buttonText).toBe('Discounted items');
  });

  it('returns correct text for category 3', () => {
    const buttonText = blockBtnText('3');
    expect(buttonText).toBe('Liked products');
  });

  it('returns null for unknown category', () => {
    const buttonText = blockBtnText('4');
    expect(buttonText).toBeNull();
  });
});
