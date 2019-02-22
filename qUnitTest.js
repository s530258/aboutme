function squareAndAdd(x, y) {
    return (x * x) + (y * y)
  }
 
test('isEven()', function() {
    equal(squareAndAdd(5, 5), 50, "Answer should be 50")
    equal(squareAndAdd(2, 1), 5, "Answer should be 5")
    equal(squareAndAdd(3, 4), 50, "Answer should be 25")
    equal(squareAndAdd(1, 1), 50, "Answer should be 2")
    equal(squareAndAdd(2, 2), 50, "Answer should be 8")
})