
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000,years: 3,rate: 10})).toEqual('322.67')
  // ...
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10000,years: 3,rate: 10}).length).toEqual(6)
  // ..
});

it("should be able to calculate unrealisticly high numbers", function (){
  expect(calculateMonthlyPayment({amount: 1000000,years: 100,rate: 500})).toEqual('416666.67')
})

/// etc
