#!/bin/sh
set -e

# Replace environment variables in JS/HTML files
echo "Replacing environment variables in /usr/share/nginx/html"
for file in $(find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.html' \)); do
  # Use sed to replace the placeholders with actual environment variable values
  # The placeholders in the build should match the exact env variable names prefixed with __ and suffixed with __
  # e.g., __VITE_LOGIN_APP_URL__ -> value of $VITE_LOGIN_APP_URL
  
  # Extract all env vars starting with VITE_
  env | grep '^VITE_' | while read -r line; do
    var_name=$(echo "$line" | cut -d '=' -f 1)
    var_value=$(echo "$line" | cut -d '=' -f 2-)
    
    # Escape special characters for sed
    escaped_value=$(echo "$var_value" | sed -e 's/[\/&]/\\&/g')
    
    sed -i "s/__${var_name}__/${escaped_value}/g" "$file"
  done
done

echo "Starting Nginx..."
exec "$@"
