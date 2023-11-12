cd ./app/client
yarn
yarn build

cd ../../app/client/packages/rts
yarn
yarn build

cd ../../../../app/server
mvn clean compile
bash build.sh -DskipTests

cd ../..

docker build --platform linux/amd64 \
  -t cortexcr.azurecr.io/cortex-plus/appsmith:latest \
  -t cortex4trsc.azurecr.io/cortex/appsmith:latest \
  -t cortexcr.azurecr.io/cortex-plus/appsmith:1.9.25-beta-2 \
  -t cortex4trsc.azurecr.io/cortex/appsmith:1.9.25-beta-2 \
  .
