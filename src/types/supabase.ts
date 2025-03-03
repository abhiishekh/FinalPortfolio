export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          images: string[]
          tech_stack: string[]
          live_url: string
          source_code_url: string
          priority: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          images: string[]
          tech_stack: string[]
          live_url: string
          source_code_url: string
          priority: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          images?: string[]
          tech_stack?: string[]
          live_url: string
          source_code_url: string
          priority?: number
        }
      }
    }
  }
}