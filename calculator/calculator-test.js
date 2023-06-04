
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100,
    years: 8,
    rate: 10
  }
  expect(calculateMonthlyPayment(values)).toEqual('1.52');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 24000,
    years: 12,
    rate: 7.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('253.25');
});
