export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
  token: string
  role: string
}

export enum UserRole {
  ROLE_USER = 'user',
  ROLE_ADMIN = 'admin'
}