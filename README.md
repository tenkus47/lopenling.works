# Lopenling-frontend

## Docker Commands

> docker build -t parkhang-frontend .

> docker run -d -p 3000:3000 --name parkhnag-app parkhang-frontend

### docker with volume

> docker run -v ${pwd}/docs:/app/docs -d -p 3000:3000 --name parkhnag-app parkhang-frontend

## any extra command on running docker

> docker exec -it parkhang-app 'command'
