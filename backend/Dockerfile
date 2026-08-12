FROM node:20-alpine

WORKDIR /app

# Install dependencies first to leverage Docker cache.
COPY package*.json ./
RUN npm install --production=false

# Copy source and build.
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
