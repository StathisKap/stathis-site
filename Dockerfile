# Use a node image to build the project
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy these ones
COPY ./package.json ./pnpm-lock.yaml .

# Install dependencies
RUN pnpm install

# Copy the rest of the files
COPY . .

# Build the project
RUN pnpm run build

# Set a default port
ENV PORT=3999

# Expose the default port
EXPOSE $PORT

# Start the application
CMD ["node", "build"]

