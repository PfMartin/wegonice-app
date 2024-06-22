#!/bin/bash

ABS_SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"

sed -i -e 's/v0.0.2/v0.0.4/g' $ABS_SCRIPT_DIR/nuxt.config.ts