# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production


# ARG RECEIVING_EMAIL_ADDRESS
# ENV RECEIVING_EMAIL_ADDRESS=$RECEIVING_EMAIL_ADDRESS
# ARG EMAIL_USER
# ENV EMAIL_USER=$EMAIL_USER
# ARG EMAIL_PASS
# ENV EMAIL_PASS=$EMAIL_PASS
# ARG EMAIL_HOST
# ENV EMAIL_HOST=$EMAIL_HOST
# ARG EMAIL_SERVICE
# ENV EMAIL_SERVICE=$EMAIL_SERVICE

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
COPY --from=builder /app/.env.production ./

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 11185

ENV PORT=11185

# ARG RECEIVING_EMAIL_ADDRESS
# ENV RECEIVING_EMAIL_ADDRESS=$RECEIVING_EMAIL_ADDRESS
# ARG EMAIL_USER
# ENV EMAIL_USER=$EMAIL_USER
# ARG EMAIL_PASS
# ENV EMAIL_PASS=$EMAIL_PASS
# ARG EMAIL_HOST
# ENV EMAIL_HOST=$EMAIL_HOST
# ARG EMAIL_SERVICE
# ENV EMAIL_SERVICE=$EMAIL_SERVICE

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]