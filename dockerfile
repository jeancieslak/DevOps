FROM node:18

RUN mkdir /app

WORKDIR /app

COPY package*json app.js
COPY . /app

RUN npm install
RUN apt-get update -y

EXPOSE 3000

CMD ["node", "index.html"]