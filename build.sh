#!/bin/bash

yarn --cwd layers/auth/nodejs
yarn --cwd layers/auth/nodejs build
# required as the build stage in aws' sam will build but then copy nothing...
sam build --beta-features
