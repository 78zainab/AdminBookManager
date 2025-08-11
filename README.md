<img width="1342" height="581" alt="image" src="https://github.com/user-attachments/assets/fb4742db-b437-41f3-90d7-d05efaf386c6" /># AdminBookManager is a bookstore that can helps you adding, deleting, updating, viewing your reading list
**# It's a basic MERN (MongoDB, Express, React.js, Node.js) project which can help you learn basic CRUD operations
**# Create, Review, Update, Delete

This project demonstrates the use of Chakra UI for UI components and Framer Motion for animations. 

**🚀 Features**
->Add New Books — Store book title, author, and image(Adding image is not must, it's optional).
->Edit Book Details — Update book information in one click.
->Delete Books — Remove books you’ve completed or no longer want to track.
->View Reading List — See all your saved books in one place.
->Animated UI — Beautiful page transitions using Framer Motion and AnimatePresence.
->Welcome Page — Friendly 2-second splash screen before navigating to the main app.
->Navigation Bar — Easy movement between pages with Chakra UI styling.
->Responsive Design — Works well on desktop and mobile.

**🛠 Tech Stack**
      **Frontend:**
        React.js (with React Router)
        Chakra UI (for UI components and styling)
        Framer Motion (for animations)
      **Backend:**
        Node.js
        Express.js
        MongoDB (with Mongoose)

**Project Struture:**
AdminBookManager/
│── backend/              # Express.js & MongoDB server
│── frontend/             # React.js app
│   ├── src/
│   │   ├── components/   # Navbar, BookCard, etc.
│   │   ├── pages/        # HomePage, CreatePage, WelcomePage
│   │   ├── App.js
│   │   ├── index.js
│   └── public/
│── package.json
│── README.md


**Getting Started:**
1) **Clone the Repository:**
    git clone https://github.com/yourusername/AdminBookManager.git
    cd backend2
2) **Install Dependencies:**
    Backend: 
        cd backend
        npm install
    Frontend:
        cd frontend
        npm install
3) **Setup Environment Variables:**
    Create a .env file inside the backend folder:
    
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
4) **Run the Application:**
    Backend:
      cd backend
      node server.js
    Frontend:
      cd cfrontend
      npm start




