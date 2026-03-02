# Build stage
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build with placeholder env variables for runtime substitution
ENV VITE_UI_LIBRARY_URL=__VITE_UI_LIBRARY_URL__
ENV VITE_LOGIN_APP_URL=__VITE_LOGIN_APP_URL__
ENV VITE_DASHBOARD_APP_URL=__VITE_DASHBOARD_APP_URL__
ENV VITE_API_URL=__VITE_API_URL__

RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY entrypoint.sh /docker-entrypoint.d/99-env-replace.sh
RUN chmod +x /docker-entrypoint.d/99-env-replace.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
