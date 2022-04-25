#!/bin/bash

echo "pulling Code Challenge $1"

if [ $1 == '10'  ] || [ $1 == '15'  ] || [ $1 == '19'  ]
then
    mkdir code-challenges/challenges-$1
    `which curl` -s https://ltuc.github.io/prep-challenges-content/day-$1/Challenge$1.nnb > ./code-challenges/challenges-$1/challenges-$1.nnb
    `which curl` -s https://ltuc.github.io/prep-challenges-content/day-$1/README.md > ./code-challenges/challenges-$1/README.md

else
    `which curl` -s https://ltuc.github.io/prep-challenges-content/day-$1/Challenge$1.js > ./code-challenges/challenges-$1.js
    `which curl` -s https://ltuc.github.io/prep-challenges-content/day-$1/Challenge$1.test.js > ./test/challenges-$1.test.js
fi