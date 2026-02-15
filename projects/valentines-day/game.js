let input = [1, 2, 3, 4, 5, 6]
let floor = []
let output = []

let value = null

// Flow

while (input.length !== 0) {
  value = input.pop()
  floor[0] = value
  value = input.pop()
  value = value + floor[0]
  floor[0] = undefined
  output.push(value)
  
  value = null
}

console.log(output)

