FROM node:20-alpine3.17 as base

FROM base as development

RUN apk update && apk add \
    git\
    bash\
    curl\
    && git config --global --add safe.directory /workspaces/typescript
