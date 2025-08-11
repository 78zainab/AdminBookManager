import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [],

  setBooks: (books) => set({ books }),

  addBooks: async (newBook) => {
  const { title, author, ImageURL } = newBook;
  if (!title || !author ) {
    return { success: false, message: "Please fill in all fields." };
  }

  try {
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, ImageURL}),
    });
    if (!res.ok) throw new Error("Failed to add book");
    const data = await res.json();
    set((state) => ({ books: [...state.books, data] }));
    return { success: true, message: "Book added successfully." };
  } catch (error) {
    console.error("Error in addBooks:", error);
    return { success: false, message: "Something went wrong." };
  }
  },
  fetchBooks: async() => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    set({books: data.data});
  },
  deleteBook: async (bookId) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete book");
      
      // updating the UI immediately without refreshing
      set((state) => ({
        books: state.books.filter((book) => book._id !== bookId),
      }));

      return { success: true, message: "Book deleted successfully." };
    } catch (error) {
      console.error("Error in deleteBook:", error);
      return { success: false, message: "Something went wrong." };
    }
  },
  updateBook: async (bookId, updatedBook) => {
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
      method: "PUT", 
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    const data = await res.json();
    if (!data.success) {
      return {
        success: false, 
        message: data.message
      };
    };
    // updated the state in UI to see latest state in UI
    set(state => ({
      books: state.books.map(book => book._id === bookId ? data.data: book)
    }));
    return {success: true, message: data.message};
  },
} ));
