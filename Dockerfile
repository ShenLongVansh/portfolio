# === STAGE 1: Build Environment ===

FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files. Copying lockfile first leverages Docker cache.
COPY package.json package-lock.json ./

# Install all dependencies (including dev) to build the project
RUN npm install

COPY . .

RUN npm run build

# === STAGE 2: Production Environment ===

FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files from the 'builder' stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

# Copy only the built application assets from the 'builder' stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install ONLY production dependencies
# 'npm ci' is faster and safer for production.
# '--omit=dev' skips all devDependencies.
RUN npm ci --omit=dev

# Expose the port the app runs on
EXPOSE 3000

# The command to start the Next.js server
CMD ["npm", "start"]