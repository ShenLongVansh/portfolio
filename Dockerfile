# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Run Next.js in production
CMD ["npm", "start"]
