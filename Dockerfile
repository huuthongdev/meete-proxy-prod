FROM node:12.13.0-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /root

# Copying source files
COPY . .

# Building app
RUN npm install

ENV PORT=4500

# Building app
RUN npm run build

EXPOSE 4500

# Running the app
CMD [ "npm", "start" ]
