#!/bin/bash


hasGitStr=$(which git)
uninstallGit=0

hasNodeStr=$(which node)

if ((${#hasGitStr} > 0)); then
  echo 'Git is already installed'
else
  echo "Installing git. This will be removed after install is complete"
  apt-get update && apt-get install -y git || exit 1
  uninstallGit=1
fi

  mv install.sh install.sh.downloaded || exit 1
  git init || exit 1
  git remote add origin https://github.com/MatWenger/servermaint.git 
  git fetch origin main || exit 1
  git checkout -b main --track origin/main || exit 1
  mv install.sh.downloaded install.sh || exit 1

if ((${#hasNodeStr} > 0)); then
  echo 'Node is already installed'
else
  install_scripts/install_node.sh
fi
