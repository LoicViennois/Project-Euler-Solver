#!/usr/bin/env bash
INDEX_TMP="./dist/project-euler-solver/browser/index.html.tmp"
INDEX_DST="./dist/project-euler-solver/browser/index.html"

mv ${INDEX_DST} ${INDEX_TMP}
envsubst < ${INDEX_TMP} > ${INDEX_DST}
rm ${INDEX_TMP}

exec "$@"
