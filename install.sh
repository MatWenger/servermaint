#!/bin/bash

hasNodeStr=$(which node)

if ((${#hasNodeStr} > 0)); then
  echo 'Node is already installed'
else
  exec install_scripts/install_node.sh
fi
