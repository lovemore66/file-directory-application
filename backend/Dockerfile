# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code to the container
COPY . .

# Expose the port the backend runs on
EXPOSE 4000

# Start the application
CMD ["node", "src/index.js"]
