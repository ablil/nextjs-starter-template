#!/bin/bash

set -e

REPOSITORY=$1
AUTHOR=$2

sed -i "s/ablil/$AUTHOR/g" .github/CODEOWNERS LICENSE README.md
