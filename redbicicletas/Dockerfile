FROM mhart/alpine-node

ENV NODE_VERSION 8.9.4


WORKDIR /var/redbicicletas

COPY bin/ /var/redbicicletas/bin/
COPY public/ /var/redbicicletas/public/
COPY routes/ /var/redbicicletas/routes/
COPY views/ /var/redbicicletas/views/
COPY app.js /var/redbicicletas/
COPY package.json /var/redbicicletas/

RUN npm install

VOLUME /var/redbicicletas/data

EXPOSE 4000
ENTRYPOINT ["npm", "start"]
