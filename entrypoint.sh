#!/bin/sh
set -e

if [ -z "$CREDENTIAL_NAME" ] || [ -z "$CREDENTIAL_PW" ]; then
  echo "Error: CREDENTIAL_NAME and CREDENTIAL_PW environment variables must be set." >&2
  exit 1
fi

STAGE=${ALGOHUB_STAGE:-production}
echo "Fetching .env file for stage: $STAGE"

curl -Ss -f -u "${CREDENTIAL_NAME}:${CREDENTIAL_PW}" \
     "https://webdav.hwangdo.kr/algohub-client/${STAGE}/env" \
     --output ./.env

echo ".env file fetched successfully."

exec "$@"
