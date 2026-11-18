FROM ubuntu:24.04

# install necessary (base) software on docker to imitate a fresh install
RUN apt-get update \
  ## Install step for initial state
  && apt-get install -y --no-install-recommends \ 
  #install git - test case 1
  # git \ 
  #install node.js and NPM
  # nodejs npm \
  # always install ca-certs
  ca-certificates \
  ## remove apt universe so we can't install anything else
  && rm -rf /var/lib/apt/lists/*

# change to the downloaded repo
WORKDIR /app

COPY install.sh install.sh

# clone the repo
# RUN git clone https://github.com/MatWenger/servermaint .

# run the install shell
# CMD ["bash", "./scripts/install.sh"]