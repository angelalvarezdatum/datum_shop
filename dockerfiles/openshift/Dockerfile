FROM ubi8/nodejs-18

USER root

RUN mkdir -p /app

# Set the working directory
WORKDIR /app

COPY . /app

RUN npm ci

# Generate the build of the application
RUN npm run build-openshift

WORKDIR /app/dist

# Stage 2: Serve app with nginx server
FROM ubi8/nginx-122

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/datum_shop /usr/share/nginx/html

CMD nginx -g "daemon off;"