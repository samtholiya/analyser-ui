FROM node:14.15.4-alpine
RUN npm install -g serve
COPY ./build /build
EXPOSE 5000
ENTRYPOINT [ "serve", "-s" , "/build" ]
