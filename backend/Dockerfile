FROM node:20-alpine
WORKDIR /app
# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
