#!/bin/sh
set -e

webdav_url="https://webdav.hwangdo.kr/algohub-client/${ALGOHUB_STAGE:-rc}"
resources_path="./"


# 환경 변수 읽기
is_empty_or_null() {
  [ -z "$1" ] || [ "$1" = "null" ]
}

if is_empty_or_null "$CREDENTIAL_NAME" || is_empty_or_null "$CREDENTIAL_PW"; then
  echo "필요한 환경변수(CREDENTIAL_NAME, CREDENTIAL_PW) 중 하나 이상이 설정되어 있지 않거나 null입니다."
  exit 1
fi

echo "Downloading .env for ${ALGOHUB_STAGE:-rc}"
curl -Ss -f -X GET "${webdav_url}/env" --user "${CREDENTIAL_NAME}:${CREDENTIAL_PW}" --create-dirs --output "${resources_path}/.env" &
wait
