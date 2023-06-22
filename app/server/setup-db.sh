docker run -d -p 127.0.0.1:27017:27017 \
  --name appsmith-mongodb \
  --hostname=localhost \
  -e MONGO_INITDB_DATABASE=appsmith \
  -v /$(pwd)/container-volumes/mongo:/data/db \
  mongo --replSet rs0

docker run -d -p 127.0.0.1:6379:6379 \
  --name appsmith-redis \
  arm64v8/redis