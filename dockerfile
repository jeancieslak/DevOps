FROM ubuntu:latest

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN apt-get update -y

CMD script.js