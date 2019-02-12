import * as constants from '../../../src/containers/initApp/initApp.constants';

describe('initApp.constants', () => {
  const staticTest = [
    {
      name: 'DEPENDENCY_DONE',
      value: '@INITAPP/DEPENDENCY_DONE'
    }
  ];

  it('should have 1 constant exported', () => {
    expect(Object.keys(constants).length).toBe(1);
  });

  it('should have 1 constat declared in the staticTest', () => {
    expect(Object.keys(constants).length).toEqual(staticTest.length);
  });

  staticTest.forEach((test) => {
    const { name, value } = test;

    it(`${name} should have value`, () => {
      expect(constants[name]).toBe(value);
    });
  });
});
