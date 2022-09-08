import mongoose, { Schema, Document } from "mongoose";

export interface ICategory {
  name: string;
  subcategory: [{type: mongoose.Schema.Types.ObjectId, ref: "Subcategory"}]
}

export interface ICategoryModel extends ICategory, Document {}

const categorySchema: Schema = new Schema({
  name: String,
  subcategory: [{
    ref: "Subcategory",
    type: mongoose.SchemaTypes.ObjectId,
  }],
});

const Category = mongoose.model<ICategoryModel>("Category", categorySchema)

export default Category;