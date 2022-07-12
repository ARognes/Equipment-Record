#!/bin/bash

# Friendly-challenge patch
sed -i -e 's/"dependencies": {/"type": "module", "dependencies":  {/1' ./node_modules/friendly-challenge/package.json

# Expose .env variables to bash, Vercal will have these pre-exposed
# set -o allexport   
# source .env set

echo $FIREBASE_ADMIN_CREDENTIALS > gcloud-service-account.json
ls -la
cd ..
la -la
# cd ..
# ls -la

# export GOOGLE_APPLICATION_CREDENTIALS="gcloud-service-account.json"

