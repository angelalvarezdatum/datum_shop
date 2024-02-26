# Import the base image as UBI-Nodejs 18 image
FROM registry.access.redhat.com/ubi8/nodejs-20

USER root

# Set the working directory to /project
WORKDIR /project

# Copy package files in container currunt direcctory
COPY --chown=1001:1001 package.json package-lock.json ./


# Install all Angular dependacies
RUN npm ci ulimit -n 4096

# Add application files in container 
COPY . .

# Set permision of .angular file in container
VOLUME ["/project/.angular"]

# RUN mkdir project/.angular/.cache && chmod -R 777 project/.angular/.cache

# Open port to allow traffic in containera
EXPOSE 8080

RUN ls

COPY ./src/environments/environment.openshift.ts ./src/environments/environment.ts

# Run start script using npm command
CMD ["npm", "start"]
