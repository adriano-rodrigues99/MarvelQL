# 1. Grab the latest node image
FROM node:12.16.1
RUN adduser --system --group dtdevs
WORKDIR /app
RUN touch .env
RUN yarn add esm --global && yarn add ts-node --global && yarn add typescript --global && yarn add dotenv-extended && yarn install
COPY . /app
ADD entrypoint.sh entrypoint.sh
RUN chmod 755 entrypoint.sh && chown dtdevs:dtdevs entrypoint.sh
USER dtdevs
ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 8081
