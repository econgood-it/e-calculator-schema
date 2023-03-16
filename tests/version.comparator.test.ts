// import { expect } from 'chai';
// import { compare, eq, gt, gte, lt, lte } from '../src/version.comparator';
//
// describe('version comparator comparison ', (): void => {
//   it('returns 0 if v1 == v2', (): void => {
//     let actual: number = compare('5.06', '5.06');
//     expect(actual).is.equal(0);
//     actual = compare('5.6', '5.06');
//     expect(actual).is.equal(0);
//   });
//
//   it('returns 1 if v1 > v2', (): void => {
//     let actual: number = compare('5.06', '5.04');
//     expect(actual).is.equal(1);
//     actual = compare('5.6', '5.04');
//     expect(actual).is.equal(1);
//   });
//
//   it('returns -1 if v1 < v2', (): void => {
//     let actual: number = compare('5.04', '5.06');
//     expect(actual).is.equal(-1);
//     actual = compare('5.4', '5.06');
//     expect(actual).is.equal(-1);
//   });
//
//   it('returns 1 if v1.length > v2.length ', (): void => {
//     const actual: number = compare('5.06.1', '5.06');
//     expect(actual).is.equal(1);
//   });
//
//   it('returns -1 if v1.length < v2.length ', (): void => {
//     const actual: number = compare('5.06', '5.06.1');
//     expect(actual).is.equal(-1);
//   });
// });
//
// describe('version comparator lte', (): void => {
//   it('returns true if v1 == v2', (): void => {
//     const actual = lte('5.06', '5.06');
//     expect(actual).true;
//   });
//
//   it('returns true if v1 < v2', (): void => {
//     const actual = lte('5.04', '5.06');
//     expect(actual).true;
//   });
//
//   it('returns false if v1 > v2', (): void => {
//     const actual = lte('5.06', '5.04');
//     expect(actual).false;
//   });
// });
//
// describe('version comparator gte', (): void => {
//   it('returns true if v1 == v2', (): void => {
//     const actual = gte('5.06', '5.06');
//     expect(actual).true;
//   });
//
//   it('returns true if v1 > v2', (): void => {
//     const actual = gte('5.06', '5.04');
//     expect(actual).true;
//   });
//
//   it('returns false if v1 < v2', (): void => {
//     const actual = gte('5.04', '5.06');
//     expect(actual).false;
//   });
//
//   it('returns false if v1.length < v2.length ', (): void => {
//     const actual = gte('5.04', '5.4.1');
//     expect(actual).false;
//   });
// });
//
// describe('version comparator gt', (): void => {
//   it('returns true if v1 > v2', (): void => {
//     const actual = gt('5.06', '5.04');
//     expect(actual).true;
//   });
//
//   it('returns true if v1.length > v2.length ', (): void => {
//     const actual = gt('5.4.1', '5.04');
//     expect(actual).true;
//   });
//
//   it('returns false if v1 == v2', (): void => {
//     const actual = gt('5.06', '5.06');
//     expect(actual).false;
//   });
//
//   it('returns false if v1 < v2', (): void => {
//     const actual = gt('5.04', '5.06');
//     expect(actual).false;
//   });
//
//   it('returns false if v1.length < v2.length ', (): void => {
//     const actual = gt('5.04', '5.4.1');
//     expect(actual).false;
//   });
// });
//
// describe('version comparator lt', (): void => {
//   it('returns true if v1 < v2', (): void => {
//     const actual = lt('5.04', '5.06');
//     expect(actual).true;
//   });
//
//   it('returns false if v1 > v2', (): void => {
//     const actual = lt('5.06', '5.04');
//     expect(actual).false;
//   });
//
//   it('returns false if v1 == v2', (): void => {
//     const actual = lt('5.06', '5.06');
//     expect(actual).false;
//   });
// });
//
// describe('version comparator eq', (): void => {
//   it('returns true if v1 == v2', (): void => {
//     const actual = eq('5.06', '5.06');
//     expect(actual).true;
//   });
//
//   it('returns false if v1 < v2', (): void => {
//     const actual = eq('5.04', '5.06');
//     expect(actual).false;
//   });
//
//   it('returns false if v1 > v2', (): void => {
//     const actual = eq('5.06', '5.04');
//     expect(actual).false;
//   });
// });
