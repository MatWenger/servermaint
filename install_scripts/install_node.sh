#!/bin/bash
echo 'Installing Node...'

apt-get install -y curl

echo 'Installing NVM (Node Version Manager)...'
(
  set -o pipefail
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.41.0/install.sh | bash
)

export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh" || exit 1


#if I ever want to pin a version of node to this project (probably will after development), uncomment this line
nvm install 22.22.0