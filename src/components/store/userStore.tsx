import { makeAutoObservable, runInAction } from "mobx"

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  company: {
    name: string
  }
}

class UserStore {
  users: User[] = []
  isLoading: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  fetchUsers = async () => {
    this.isLoading = true
    try {
      const response = await fetch("https://dummyjson.com/users")
      const data = await response.json()
      runInAction(() => {
        this.users = data.users
      })
    } catch (error) {
      console.error("Failed to fetch users:", error)
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }
}

const userStore = new UserStore()
export default userStore
