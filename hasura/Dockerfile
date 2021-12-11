FROM hasura/graphql-engine:v2.0.9.cli-migrations-v3
RUN mkdir /backend-app
WORKDIR /backend-app
COPY . /backend-app/

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait