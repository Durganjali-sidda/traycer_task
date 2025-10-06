import { create } from "zustand";

type User = {
  email: string;
};

type AuthState = {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => {
    if (email && password) {
      set({ user: { email } });
      localStorage.setItem("user", email);
    }
  },
  register: (email, password) => {
    if (email && password) {
      set({ user: { email } });
      localStorage.setItem("user", email);
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
}));
