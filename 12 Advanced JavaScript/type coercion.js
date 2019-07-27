// Coerced
1 == '1';
// not coerced
1 === '1';

if (1) {
    console.log(5);
}

-
0 === +0 // true
Object.is(-0, +0);

NaN === NaN; // false
Object.is(NaN, NaN);