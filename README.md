# Assignment-portal-backend
A backend system for an assignment submission portal. The system should support users and admins where:

**Users** can upload assignments.
    - Assignments in this case can just be an object like below
        
        {
            'task':'Hello World',
            'admin':'Alok',
        }
        
**Admins** can accept or reject these assignments.
    - Admin can see all assignments tagged to them
    - Admins will see each the user name, task and timedate data
    - Admin can either reject or accept them

**Endpoints:**
    - **User Endpoints:**</br>
        - `POST /register` - Register a new user.</br>
        - `POST /login` - User login.</br>
        - `POST /upload` - Upload an assignment.</br>
        - `GET /admins`- fetch all admins</br>
    
    
**Admin Endpoints:**</br>
        - `POST /register` - Register a new admin.</br>
        - `POST /login` - Admin login.</br>
        - `GET /assignments` - View assignments tagged to the admin.</br>
        - `POST /assignments/:id/accept` - Accept an assignment.</br>
        - `POST /assignments/:id/reject` - Reject an assignment.</br>

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **MongoDB** installed or a connection URI from MongoDB Atlas.

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Garv-M/Assignment-portal-backend.git
   cd assignment-portal-backend

2. **Install dependencies:**:
   ```bash
   npm install

3. **Set up environment variables: Create a .env file in the root directory and add the following:**:
   ```bash
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret Key>
   PORT=5000
4. **Run the server**:
   ```bash
   npm run start
The server will run on ```http://localhost:5000```.
