# use node alpine as the base image
FROM node:alpine

# Set working directory
WORKDIR '/app'

# Copy over package.json
COPY ./package.json ./

# Run npm install
RUN npm install

# Copy the rest of the directory
COPY . .

# Run start
CMD ["npm", "run", "start"]
