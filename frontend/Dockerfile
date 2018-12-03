FROM node:8.9-alpine
COPY . .
RUN npm install --quiet
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000