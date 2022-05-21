FROM node
WORKDIR /Code
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]