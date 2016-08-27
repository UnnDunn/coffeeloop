var allNumbers, bubbleSort, collectNumbers, i, len, numberGroups, numbersCollected, sortedNumbers, typeIsArray, value;

typeIsArray = Array.isArray || function(value) {
  return {}.toString.call(value) === '[object Array]';
};

numberGroups = {
  "group1": [3, 89],
  "group2": [34, 8, 2, 16, 453],
  "group3": [
    {
      "subgroup1": [453, 66, 22, 7]
    }, {
      "subgroup2": [56, 8]
    }
  ],
  "group4": 4532
};

allNumbers = [];

collectNumbers = function(numbers) {
  var i, key, len, value;
  switch (typeof numbers) {
    case "number":
      allNumbers.push(numbers);
      break;
    case "array":
      for (i = 0, len = numbers.length; i < len; i++) {
        value = numbers[i];
        collectNumbers(value);
      }
      break;
    case "object":
      for (key in numbers) {
        value = numbers[key];
        collectNumbers(value);
      }
  }
};

collectNumbers(numberGroups);

bubbleSort = function(numbers) {
  var i, key, len, sorted, value;
  if (!typeIsArray(numbers)) {
    return;
  }
  sorted = false;
  while (!sorted) {
    sorted = true;
    for (key = i = 0, len = numbers.length; i < len; key = ++i) {
      value = numbers[key];
      if (key >= numbers.length - 1) {
        continue;
      }
      if (value > numbers[key + 1]) {
        numbers[key] = numbers[key + 1];
        numbers[key + 1] = value;
        sorted = false;
      }
    }
  }
  return numbers;
};

sortedNumbers = bubbleSort(allNumbers);

numbersCollected = "";

for (i = 0, len = sortedNumbers.length; i < len; i++) {
  value = sortedNumbers[i];
  numbersCollected += value + ", ";
}

alert(numbersCollected);
