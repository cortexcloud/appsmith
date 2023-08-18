
# Requires

```
Node v16
Java 17
mvn 
```

# Build

```sh
cd ./app/client

yarn

yarn build

cd ./app/client/packages/rts

yarn build


cd ./app/server

mvn clean compile

bash build.sh -DskipTests

 

```

# Build Image
```sh
# Docker file
./Dockerfile

docker build --platform linux/amd64 \
  -t cortexcr.azurecr.io/cortex-plus/appsmith:latest \
  -t cortexcr.azurecr.io/cortex-plus/appsmith:1.9.25 \
  .
```

# Image version

```
cortexcr.azurecr.io/cortex-plus/appsmith:latest
cortexcr.azurecr.io/cortex-plus/appsmith:1.9.25
cortexcr.azurecr.io/cortex-plus/appsmith:1.9.24
```