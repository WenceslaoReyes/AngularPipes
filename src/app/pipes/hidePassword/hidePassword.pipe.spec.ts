import { HidePasswordPipe } from './hidePassword.pipe';

describe('ContrasenaPipe', () => {
  it('create an instance', () => {
    const pipe = new HidePasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
