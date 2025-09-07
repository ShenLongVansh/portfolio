# Stage 1: Build the Next.js app
FROM node:18 AS builder
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy all code
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Run with production server
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]
