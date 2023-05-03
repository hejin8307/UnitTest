const Calculator = require('../calculator.js');

// 관련된 함수를 묶어서 그룹으로 테스트
describe('calculator', () => {
  let cal;
  // 각 테스트 코드가 실행되기 전에 실행하고 싶을 경우 beforeEach 사용
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('subtracts', () => {
    cal.set(1);
    cal.subtract(2);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(1);
    cal.multiply(2);
    expect(cal.value).toBe(2);
  });

  describe('devides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
