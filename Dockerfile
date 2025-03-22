FROM node:14

WORKDIR /app

# Copy and install backend dependencies
COPY backend ./backend
WORKDIR /app/backend
RUN npm install

# Copy and install frontend dependencies
WORKDIR /app
COPY frontend ./frontend
WORKDIR /app/frontend
RUN rm -rf node_modules package-lock.json && npm install
RUN npm install --legacy-peer-deps
RUN npm run build

# Set working directory for backend
WORKDIR /app/backend

# Expose port and start server
EXPOSE 3000
CMD ["node", "server.js"]
