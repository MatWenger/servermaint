#!/bin/bash
echo 'Installing Node.js and NVM...'

apt-get install -y curl

echo 'Installing NVM (Node Version Manager)...'
(
  set -o pipefail
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.41.0/install.sh | bash
)

export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh" || exit 1

nvm install 22.22.0
echo $(node --version)