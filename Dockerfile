FROM node:10.6

WORKDIR /app/
COPY . .

RUN npm install
CMD npm start