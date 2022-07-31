FROM node:lts as dependencies
WORKDIR /manabou
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /manabou
COPY . .
COPY --from=dependencies /manabou/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /manabou
ENV NODE_ENV production

COPY --from=builder /manabou/src/env/schema.mjs ./src/env/schema.mjs
COPY --from=builder /manabou/src/env/client.mjs ./src/env/client.mjs
COPY --from=builder /manabou/src/env/server.mjs ./src/env/server.mjs
COPY --from=builder /manabou/next.config.mjs ./
COPY --from=builder /manabou/public ./public
COPY --from=builder /manabou/.next ./.next
COPY --from=builder /manabou/node_modules ./node_modules
COPY --from=builder /manabou/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]