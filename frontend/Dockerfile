FROM node:18.15.0

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY ./ ./

# Default command
CMD ["npm", "start"]