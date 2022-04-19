# Class-1

## Step-1

- Deploy simple index.html to surge with CI/CD

  - > #### npm install -g surge

  - type **surge**
    - it will ask for domain name and then your site is live

## Step-2

- How to automate it
  - ### we will use github actions
    - creates such a web hook (on push) that
      - pick
      - compile
      - deploy to surge
  - create a custom workflow in github action
    - define autoDeployment.yml
      - > #### surge token
        - it generates a token
      - steps:
        - actions/checkout@v3
        - actions/setup-node@v3
        - with:
          - node-version: '14'
        - > npm install -g surge
        - if type **surge** so it will ask for location of the project and domain name and its also required to login but when we're deploying to a remote server so we need to type specific command with secret token same as below:
          - > surge ./ myDomainName.surge.sh --token ${{ secrets.SU }}
