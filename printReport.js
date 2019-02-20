const { Farm } = require('./index')
const { Cow, Horse, Pig } = require('./animals')
const { Wheat, Sugarcane } = require('./crops')

const farm = new Farm('Happy Farm')
farm.addCrop(new Wheat(100))
farm.addCrop(new Sugarcane(100))
farm.addAnimal(new Cow(100))
farm.addAnimal(new Horse(10))
farm.addAnimal(new Pig(5))

farm.printReport()