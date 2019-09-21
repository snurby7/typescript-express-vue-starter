#!/usr/bin/env bash

docker run -d -p 3200:3200 --name app --restart always slanatech/financial-vue:0.0.1
