import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  language: { type: String, required: true },
  userInformation: {
    nomPrenom: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    ville: { type: String, required: true },
    addresse: { type: String, required: true },
  },
  espace: { type: String, required: true },
  color: { type: String, required: true },
  customizedColor: { type: String, required: true },
  style: { type: String, required: true },
  format: { type: String, required: true },
  hauteur: { type: Number, required: true },
  largeur: { type: Number, required: true },
  formatGeneratedByAi: { type: String, required: true },
  cadre: { type: String, required: true },
});


export default  mongoose.models.formDataSchema || mongoose.model("formDataSchema", formDataSchema);