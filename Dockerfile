# 1. Grab the latest node image
FROM node:12.16.1
RUN adduser --system --group dtdevs
WORKDIR /app
COPY . /app
RUN touch .env
RUN yarn add esm --gobal && yarn add ts-node --global && yarn install
ADD entrypoint.sh entrypoint.sh
RUN chmod 755 entrypoint.sh && chown dtdevs:dtdevs entrypoint.sh
USER dtdevs
ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 8081
