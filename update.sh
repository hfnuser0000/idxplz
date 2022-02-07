git stash
git pull https://github.com/hoanganh251098/idxplz.git
pm2 stop next
yarn remove win-node-env
yarn install
unzip -o .next.zip
pm2 restart next
