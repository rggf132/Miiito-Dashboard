FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install sudo
RUN sudo apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

RUN mkdir /client
WORKDIR /client
ADD . /client

EXPOSE 80
CMD npm install && npm start
