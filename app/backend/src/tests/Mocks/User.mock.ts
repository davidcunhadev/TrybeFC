import { Login } from "../../Interfaces/Login/Login"
import { IUser } from "../../Interfaces/User/IUser"

const user : IUser = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  role: 'admin'
}

const validBodyLogin : Login = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

const token = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3MDE2Mjk3ODYsImV4cCI6MTcwMTcxNjE4Nn0.RT9KwvLR27GOLO0LEkdZUAGSkjGQysabvnwKwSTcYBU"
}

export {
  user,
  token,
  validBodyLogin,
}