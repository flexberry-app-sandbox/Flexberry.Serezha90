docker build --no-cache -f SQL\Dockerfile.PostgreSql -t serezha90-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t serezha90-java/app ../../..
