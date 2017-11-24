const app = "I don't do much."

var kittens = ['fred', 'alice', 'shelby']
function destructivelyAppendKitten (kitten) {
  kittens.push(kitten)
  return kittens
}
destructivelyAppendKitten(Bill)

function destructivelyPrependKitten (kitten) {
  kittens.unshift(kitten)
  return kittens
}
destructivelyPrependKitten(Bill)
