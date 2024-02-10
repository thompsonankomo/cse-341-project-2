const contactSchema = new mongoose.Schema({
       firstName: String,
       lastName: String,
       email: String,
       Age: Number,
       Address:String,
       Hometown:String,
       Country:String,
   });

   module.exports = mongoose.model('Contacts', contactSchema);