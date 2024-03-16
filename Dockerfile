# use node 18
FROM node:18-alpine

# Set the working direction
WORKDIR /usr/src/app

# Install dependencies for cache build image
COPY package*.json .
RUN npm install

# Copy the rest of application code
COPY . .

# Build application
RUN npm run build

# Export the port the app runs on
EXPOSE 3000

# Run app
CMD ["npm", "run", "start:prod"]
