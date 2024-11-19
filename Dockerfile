# syntax=docker/dockerfile:1
FROM node:hydrogen-alpine3.19 AS base

FROM base AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM base AS final
ENV VITE_BASE_PATH="my-app"
ARG VITE_BASE_PATH=$VITE_BASE_PATH
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY ./package*.json .
RUN npm i --omit=dev

RUN adduser -u 8888 --disabled-password --gecos "" appuser
RUN chown appuser /app
USER appuser

ENTRYPOINT ["npm", "run", "serve"]

