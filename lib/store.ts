"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority: "low" | "medium" | "high"
  createdAt: string
}

export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface DashboardStats {
  totalTasks: number
  completedTasks: number
  totalNotes: number
  lastActive: string
}

interface DashboardStore {
  tasks: Task[]
  notes: Note[]
  stats: DashboardStats
  
  // Task actions
  addTask: (task: Omit<Task, "id" | "createdAt">) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void
  
  // Note actions
  addNote: (note: Omit<Note, "id" | "createdAt" | "updatedAt">) => void
  updateNote: (id: string, updates: Partial<Note>) => void
  deleteNote: (id: string) => void
  
  // Utility
  updateLastActive: () => void
}

const generateId = () => Math.random().toString(36).substring(2, 15)

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set, get) => ({
      tasks: [
        {
          id: "1",
          title: "Complete portfolio website",
          description: "Finish building the personal portfolio with all sections",
          status: "in-progress",
          priority: "high",
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Learn new framework",
          description: "Explore the latest features of Next.js 15",
          status: "todo",
          priority: "medium",
          createdAt: new Date().toISOString(),
        },
        {
          id: "3",
          title: "Update resume",
          description: "Add recent projects and skills to resume",
          status: "done",
          priority: "low",
          createdAt: new Date().toISOString(),
        },
      ],
      notes: [
        {
          id: "1",
          title: "Project Ideas",
          content: "1. Build a CLI tool\n2. Create a VS Code extension\n3. Develop a mobile app",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      stats: {
        totalTasks: 3,
        completedTasks: 1,
        totalNotes: 1,
        lastActive: new Date().toISOString(),
      },

      addTask: (task) =>
        set((state) => {
          const newTask: Task = {
            ...task,
            id: generateId(),
            createdAt: new Date().toISOString(),
          }
          return {
            tasks: [...state.tasks, newTask],
            stats: {
              ...state.stats,
              totalTasks: state.stats.totalTasks + 1,
              lastActive: new Date().toISOString(),
            },
          }
        }),

      updateTask: (id, updates) =>
        set((state) => {
          const tasks = state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          )
          const completedTasks = tasks.filter((t) => t.status === "done").length
          return {
            tasks,
            stats: {
              ...state.stats,
              completedTasks,
              lastActive: new Date().toISOString(),
            },
          }
        }),

      deleteTask: (id) =>
        set((state) => {
          const tasks = state.tasks.filter((task) => task.id !== id)
          const completedTasks = tasks.filter((t) => t.status === "done").length
          return {
            tasks,
            stats: {
              ...state.stats,
              totalTasks: tasks.length,
              completedTasks,
              lastActive: new Date().toISOString(),
            },
          }
        }),

      addNote: (note) =>
        set((state) => {
          const newNote: Note = {
            ...note,
            id: generateId(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
          return {
            notes: [...state.notes, newNote],
            stats: {
              ...state.stats,
              totalNotes: state.stats.totalNotes + 1,
              lastActive: new Date().toISOString(),
            },
          }
        }),

      updateNote: (id, updates) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, ...updates, updatedAt: new Date().toISOString() }
              : note
          ),
          stats: {
            ...state.stats,
            lastActive: new Date().toISOString(),
          },
        })),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
          stats: {
            ...state.stats,
            totalNotes: state.stats.totalNotes - 1,
            lastActive: new Date().toISOString(),
          },
        })),

      updateLastActive: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            lastActive: new Date().toISOString(),
          },
        })),
    }),
    {
      name: "dashboard-storage",
    }
  )
)
