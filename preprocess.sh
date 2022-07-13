#!/bin/bash

# Friendly-challenge patch
sed -i -e 's/"dependencies": {/"type": "module", "dependencies":  {/1' ./node_modules/friendly-challenge/package.json

echo $FIREBASE_ADMIN_CREDENTIALS > gcloud-service-account.json

