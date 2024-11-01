# 📡 Free API Generator

![API Generator Logo](https://via.placeholder.com/600x200.png?text=Free+API+Generator) <!-- Replace with your logo or relevant image -->

**Free API Generator** is a powerful API hub designed for frontend developers who need easy access to a variety of APIs. Users can either browse through pre-existing APIs for common data types or create custom APIs by defining their own fields. Additionally, the platform includes a searchable directory of external API resources, such as weather and news APIs, making it easier for developers to find the data they need without leaving the hub.

---

## 🎥 Demo Video

[![Watch the Demo](https://img.youtube.com/vi/oyZoZaDrcbI/maxresdefault.jpg)](https://youtu.be/oyZoZaDrcbI?si=9FjQPXjKttGgLwT6)

---

## 🚀 Features

- **API Library**: Access a collection of pre-built APIs for various data types.
- **Custom API Generation**: Create and customize your own APIs by defining fields.
- **External API Links**: Find links to various external API providers for seamless integration.
- **User-Friendly Interface**: Designed to enhance the API discovery experience.

---

## ⚙️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - A powerful framework for server-rendered and static web applications.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - A robust relational database for efficient data management.
- **ORM**: [Prisma](https://www.prisma.io/) - A modern ORM for seamless database interactions.

---

## 📚 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **PostgreSQL** (v12 or higher)
- **Prisma CLI** (install via `npm install prisma --save-dev` if not already installed)

### Installation Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/free-api-generator.git
    cd free-api-generator
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory with the following configuration:

    ```plaintext
    DATABASE_URL=postgresql://username:password@localhost:5432/yourdatabase
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    NODE_ENV=production
    ```

4. **Migrate the Database**

    Run the Prisma migration to set up your database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Seed the Database (Optional)**

    If you have initial data to seed, execute:

    ```bash
    npx prisma db seed
    ```

6. **Start the Development Server**

    ```bash
    npm run dev
    ```

    Your app will be available at `http://localhost:3000`.

---

## 🔧 Building for Production

To build and start the application in production mode, use:

```bash
npm run build
npm start
