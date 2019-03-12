FROM node:9.8.0

RUN mkdir /www
COPY dist /www/dist

COPY ["./package.json", "/www/"]

RUN cd /www && npm install

WORKDIR /www

EXPOSE 8080

CMD ["node", "dist"]
