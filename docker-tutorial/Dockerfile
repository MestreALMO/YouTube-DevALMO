# Origin image
FROM node:16-alpine
# work directory
WORKDIR /app
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install Dependancys
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
# Run aplication
CMD ["npm", "start"]