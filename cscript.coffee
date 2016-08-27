typeIsArray = Array.isArray || ( value ) -> return {}.toString.call( value ) is '[object Array]'

numberGroups = 
  "group1": [3,89]
  "group2": [34,8,2,16,453]
  "group3": [
      "subgroup1": [453,66,22,7]
    ,
      "subgroup2": [56,8]
    ]
  "group4": 4532


allNumbers = []
collectNumbers = (numbers) ->
  switch typeof numbers
    when "number" then allNumbers.push numbers
    when "array"
      collectNumbers value for value in numbers
    when "object"
      collectNumbers value for key, value of numbers
  return

collectNumbers numberGroups

bubbleSort = (numbers) ->
  if not typeIsArray numbers then return
  sorted = false
  while not sorted
    sorted = true
    for value, key in numbers
      if key >= numbers.length - 2 then continue
      if value > numbers[key+1]
        numbers[key] = numbers[key+1]
        numbers[key+1] = value
        sorted = false
  return numbers

sortedNumbers = bubbleSort allNumbers
numbersCollected = ""

numbersCollected += "#{value}, " for value in sortedNumbers
alert numbersCollected