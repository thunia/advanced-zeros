module.exports = function getZerosCount(number, base) {
  var primes = primeFactorsofNumber(base),
      zerosCount = Number.MAX_SAFE_INTEGER;

  for (var i = 0; i < primes.length; i++) {
    zerosCount = Math.min(zerosCount, Math.floor(findPowerOfFactor(number, primes[i].prime) / primes[i].power));
  }

  return zerosCount;

  function findPowerOfFactor(number, factor) {
    var count = 0,
        product = factor;
    while (product <= number) {       
      count += Math.floor(number / product);     
      product *= factor;
    }

    return count;
  }
  
  function primeFactorsofNumber(number) {
    var primeFactors = [];

    for (var i = 2; number != 1; i++) {
      if (number % i == 0) {
        var count = 0;

        while (number % i == 0) {
          number /= i;
          count++;
        }

        primeFactors.push({ 'prime': i, 'power': count });
      }
    }
    
    return primeFactors;
  }
}