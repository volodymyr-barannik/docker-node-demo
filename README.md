### заходимо у директорію проекту
cd /home/v-barannik/Desktop/docker-node-demo

# білд
docker build . -t v-barannik/node_app

### запуск сервера
docker run -p 80:8080 -d --cpus="0.5" --memory="256m" v-barannik/node_app

### Переглядаю чи дійсно контейнер запустився і працює
docker ps

### Перевіряємо чи сервер працює
curl -i localhost:80


# docker hub:
### тегаємо
docker tag v-barannik/node_app:latest vbarannik/node_app:latest

### логінимось у докер хаб (треба ввестик креди)
docker login

### пушимо у репозиторій, створений на сайті докер хабу
docker push vbarannik/node_app:latest
