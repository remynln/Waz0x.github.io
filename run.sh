#!/bin/bash
if [[ -z $1 ]];then
    ~/.kernel/bin --image ~/.kernel/cow_med.png "$(/usr/bin/curl https://evilinsult.com/generate_insult.php\?lang\=fr\&amp\;type\=raw)"
else
    ~/.kernel/bin --image ~/.kernel/cow_med.png $1
fi
