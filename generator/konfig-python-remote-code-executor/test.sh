#!/bin/bash

cd "$(dirname "$0")"

poetry run pytest -s
