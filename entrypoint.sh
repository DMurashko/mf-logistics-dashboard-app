#!/bin/sh

# Replace __VITE_*__ placeholders in built JS/HTML files with actual env values.
# Runs as /docker-entrypoint.d/99-env-replace.sh in nginx:alpine.

echo "Replacing environment variables in /usr/share/nginx/html"

# Collect VITE_ env vars into a temp file (avoids pipe-subshell and grep exit-code issues)
env | grep '^VITE_' > /tmp/vite_envs || true

if [ -s /tmp/vite_envs ]; then
  for file in $(find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.html' \)); do
    while IFS='=' read -r var_name var_value; do
      escaped_value=$(echo "$var_value" | sed -e 's/[\/&]/\\&/g')
      sed -i "s|__${var_name}__|${escaped_value}|g" "$file"
    done < /tmp/vite_envs
  done
  echo "Environment variable replacement complete."
else
  echo "WARNING: No VITE_ environment variables found. Skipping replacement."
fi

rm -f /tmp/vite_envs
