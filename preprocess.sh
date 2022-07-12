#!/bin/bash

# Friendly-challenge patch
sed -i -e 's/"dependencies": {/"type": "module", "dependencies":  {/1' ./node_modules/friendly-challenge/package.json

ls -la
pwd
# Expose .env variables to bash
set -o allexport   
source .env set

echo $FIREBASE_ADMIN_CREDENTIALS > gcloud-service-account.json
echo $FIREBASE_ADMIN_CREDENTIALS

export GOOGLE_APPLICATION_CREDENTIALS=gcloud-service-account.json

