import mongoose from 'mongoose'

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, '_id'>

export type Comment = {
  name: string
  content?: string
  postId:  string
 
}
export type Article = {
  title: string
  image: string
  content: string
  _id?: string
  createdAt?: Date
  updatedAt?: Date
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 3, max: 50 },
    content: { type: String, required: true, min: 3, max: 500 },
    postId: { type: String, required: true },
  },
  { timestamps: true }
)

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, min: 3, max: 50 },
    image: { type: String, required: true, min: 3, max: 50 },
    content: { type: String, required: true, min: 3, max: 50 },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)

export const Comment =
  mongoose.models?.Comment || mongoose.model('Comment', commentSchema)

export const Article =
  mongoose.models?.Article || mongoose.model('Article', articleSchema)
