# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
EXPOSE 8080

COPY . /

RUN cd frontend && npm install && npm build
RUN cd backend && npm install

WORKDIR /backend
CMD ["npm", "start"]