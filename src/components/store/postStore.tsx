import { action, makeAutoObservable, runInAction } from "mobx"

export interface Post {
  id: number
  title: string
  body: string
  views: number
  reactions: {
    likes: number
    dislikes: number
  }
}

class PostStore {
  posts: Post[] = []
  isLoading: boolean = true

  constructor() {
    makeAutoObservable(this, {
      fetchPosts: action,
    })
  }

  fetchPosts = async (userId: number) => {
    this.isLoading = true
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}/posts`)
      const data = await response.json()
      runInAction(() => {
        this.posts = data.posts
      })
    } catch (error) {
      console.error("Failed to fetch posts:", error)
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }
}

const postStore = new PostStore()
export default postStore
