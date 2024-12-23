# Blogging Platform Backend

A blogging platform API where users can create, update, delete, and manage blogs. The system has two roles: **Admin** and **User**, with role-based access control.

## Technologies Used
- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

## Features
### User Roles
- **Admin**: Can delete any blog, block any user, but cannot update blogs.
- **User**: Can register, log in, and perform CRUD operations on their own blogs.

### Authentication & Authorization
- **Authentication**: Requires login to perform write, update, and delete operations.
- **Authorization**: Differentiates Admin and User roles for secure access.

### Blog API
Public API for reading blogs with search, sort, and filter options.

