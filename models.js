//Remember to import in mongoose
const mongoose =require('mongoose')

//create the citizen schema here with the appropriate data types
const citizenSchema = new mongoose.Schema({
  name:String,
  dob:String,
  Fname:String,
  Mname:String,
  gender:String,
  Bg:String
})


//create the title schema here wit the right fields
const titleSchema = new mongoose.Schema({
  ownerName: String,
  landLocation:String,
  landSize:String,
  xCoordinate:String,
  yCoordinate:String,
  titleNumber:String
})
//convert the schemas into models from here
const citizenModel = mongoose.model('models', citizenSchema)

//export the models as modules from here.
module.exports = citizenModel
module.exports =  titleSchema
