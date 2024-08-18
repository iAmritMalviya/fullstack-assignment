# Help Center Application Submition and Instruction to run the application locally

This project is a Help Center application with a RESTful API (backend) and a React-based frontend. The backend manages Help Center cards, while the frontend allows users to view and interact with those cards.

## Project Structure

````plaintext
.
├── backend
│   ├── node_modules
│   ├── src
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend
│   ├── node_modules
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
└── README.md

## Instructions

##Prerequisites
#Node.js (v14+)
#npm (v6+)
#MongoDB (Running locally or hosted) [Currently here I use local mongodb db for the simplicity of running project locally]

1. **Clone the Repository:**
   ```bash
   git clone  https://github.com/ParasParashar/fullstack-assignment-submission.git
   cd fullstack-assignment
````

2. **Install Dependencies**
   **For the backend:**

```bash
cd backend
npm install

```

**For the frontend:**

```bash
cd frontend
npm install

```

3. **Run the application:**
   **First run the backend server**

   -```bash
   cd backend
   npm start

````
   **then run the frontend server**

   -```bash
cd frontend
npm run dev

````

4. **Once both the server are running**

   - Then you can visit the frontend on http://localhost:5173
   - And backend is run on the http://localhost:5000

5. **Technoloy User here**
   -Backend: Node.js, Express.js, MongoDB, Mongoose, dotenv
   -Frontend: React.js, Tailwind CSS, Axios, React Router DOM, React Hot Toast

---

# Frontend related question are ansers in the readmd.md file of the frontend folder
#   f u l l s t a c k - a s s i g n m e n t - s u b m i s s i o n  
 