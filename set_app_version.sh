#!/bin/bash

set -e

abs_script_dir="$(dirname "$(readlink -f "$0")")"

current_branch=$(git rev-parse --abbrev-ref HEAD)

place_holder_version="v0.0.0"
version=$(git describe --tags --abbrev=0 2>/dev/null)

if [ "$current_branch" != "main" ]; then
  commit_slug=$(git rev-parse HEAD)
  version="$current_branch-$commit_slug"
fi

sluggified_version=$(echo $version | sed 's/\//-/g')

sed -i "s/${place_holder_version}/${sluggified_version}/g" "$abs_script_dir/nuxt.config.ts"