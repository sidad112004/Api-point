# Free API Generator

**Free API Generator** is a powerful API hub designed for frontend developers who need easy access to a variety of APIs. Users can browse through pre-existing APIs for common data types or create custom APIs by defining their own fields. The platform also includes a searchable directory of external API resources, such as weather and news APIs, simplifying the API discovery process.

## Features

- **API Library**: Access pre-built APIs for a range of common data types.
- **Custom API Generation**: Create and customize your own APIs by defining custom fields.
- **External API Links**: Quickly find links to external API providers for weather, finance, and more.
- **Intuitive UI**: A user-friendly interface for easy navigation and API discovery.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - A powerful framework for server-rendered and static web applications.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - A robust relational database for efficient data management.
- **ORM**: [Prisma](https://www.prisma.io/) - A modern ORM for seamless database management with Next.js.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **PostgreSQL** (v12 or higher)
- **Prisma CLI** (install via `npm install prisma --save-dev` if not already installed)

### Installation

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

    Create a `.env` file in the root directory with the following environment variables to configure your database, authentication, and application URLs:

    ```plaintext
    DATABASE_URL=your_database_url
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    NODE_ENV=production
    ```

    - Replace `your_database_url` and `your_nextauth_secret` with your actual database credentials and authentication secret.

4. **Migrate the Database**

    Run Prisma migration to set up your database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Seed the Database (Optional)**

    If you have initial data to seed, run:

    ```bash
    npx prisma db seed
    ```

6. **Start the Development Server**

    ```bash
    npm run dev
    ```

    The app will be accessible at `http://localhost:3000`.

### Building for Production

To build and start the application in production mode, use:

```bash
npm run build
npm start
