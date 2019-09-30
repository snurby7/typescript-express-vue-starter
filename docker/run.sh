#!/usr/bin/env bash

docker run -d -p 3200:3200 --name app --restart always slanatech/typescript-express-vue-starter:0.0.1
