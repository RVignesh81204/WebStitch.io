import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.endsWith("@admin.com") || v.endsWith("@admin.in");
      },
      message: (props) =>
        `${props.value} is not a valid admin email! Email must end with '@admin.com' or '@admin.in'.`,
    },
  },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
