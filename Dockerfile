# Use a specific node version for better reproducibility
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY ./package.json ./pnpm-lock.yaml ./

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