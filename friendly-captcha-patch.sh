#!/bin/bash

sed -i -e 's/"dependencies": {/"type": "module", "dependencies":  {/1' ./node_modules/friendly-challenge/package.json