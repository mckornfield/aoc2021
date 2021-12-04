#!/bin/bash

day_number=$1
day_file=day${day_number}
mkdir $day_file
touch $day_file/${day_file}.ts
touch $day_file/${day_file}.test.ts
touch fileReader/input_${day_file}.txt
