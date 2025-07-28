
FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build || true

EXPOSE 80
CMD ["node", "index.js"]
