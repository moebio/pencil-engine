#!/bin/bash -e

cd $(dirname $0)
cd ..
BASE=$(pwd)

FUNCTIONS_BASE="${BASE}/lambda/python/${FUNCTION_NAME}"

echo "Installing Virtual Environment"
if [ ! -d .venv ] ; then
    # pip install virtualenv
    # python3 -m virtualenv --python=python3.9 .venv 
    python3 -m venv .venv 
    # python3 -m virtualenv .venv 

fi
SOURCE_PATH="${FUNCTIONS_BASE}"

FOLDER_PART="bin"
WINDOWS_FOLDER_PART="Scripts"
if [ -d ".venv/${WINDOWS_FOLDER_PART}" ]; then
  FOLDER_PART=$WINDOWS_FOLDER_PART
fi

echo "Installing ${FUNCTION_NAME}"
# source .venv/${FOLDER_PART}/activate
source .venv/bin/activate

pip install --upgrade pip wheel
pip install -e .[dev]
# pip install -r ${SOURCE_PATH}/requirements-dev.txt
# pip3 install -r ${SOURCE_PATH}/requirements-dev.txt

# pip install psycopg2
# pip3 install psycopg2

# pip install psycopg2-binary

# pip3 install psycopg2-binary
#pip psycopg2-binary
# pip3 install psycopg2
# pip install -r ${SOURCE_PATH}/requirements.txt

deactivate

