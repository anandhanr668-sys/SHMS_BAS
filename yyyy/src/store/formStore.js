import { create } from "zustand";
import { FormSchema } from "../types/forms";

/**
 * Form Store with TypeScript-like types
 * @type {import('zustand').StoreApi<{
 *   forms: FormSchema[],
 *   schemas: FormSchema[],
 *   currentSchema: FormSchema | null,
 *   addForm: (form: FormSchema) => void,
 *   addSchema: (schema: FormSchema) => void,
 *   setCurrentSchema: (schema: FormSchema | null) => void,
 *   updateSchema: (id: string, updates: Partial<FormSchema>) => void
 * }>}
 */
export const useFormStore = create((set) => ({
  forms: [],
  schemas: [],
  currentSchema: null,

  addForm: (form) =>
    set((state) => ({
      forms: [...state.forms, form],
    })),

  addSchema: (schema) =>
    set((state) => ({
      schemas: [...state.schemas, schema],
    })),

  setCurrentSchema: (schema) => set({ currentSchema: schema }),

  updateSchema: (id, updates) =>
    set((state) => ({
      schemas: state.schemas.map((s) =>
        s.type === id ? { ...s, ...updates } : s
      ),
      currentSchema:
        state.currentSchema?.type === id
          ? { ...state.currentSchema, ...updates }
          : state.currentSchema,
    })),
}));

