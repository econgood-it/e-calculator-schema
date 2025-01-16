import { isPositiveNumberNotZero } from "../src/shared.schemas";

describe( 'positiveNumberNotZero' , () => {
  it( 'should return true for positive numbers' , () => {
    expect( isPositiveNumberNotZero.parse( 23 )).toEqual( 23 );
    const result = isPositiveNumberNotZero.safeParse( 0 );
    expect( result.success ).toBeFalsy( );
    expect( !result.success && result.error.errors[0].message ).toEqual( 'Number should be positive and greater than zero' );
  } )
} );