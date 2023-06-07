# my-past-game-list
Приложение для добавления пройденных игр с указанием затраченного времени на прохождение
## Инструкция по запуску
1. Установите Docker и Docker Compose на вашу машину, если они еще не установлены.

2. Скачайте проект к себе и откройте командную строку или терминал и перейдите в директорию, где находится файл docker-compose.yml.

3. Запустите следующую команду для запуска приложения:

  ```bash
  docker-compose up
  ```
  Docker Compose загрузит и создаст контейнеры для каждого сервиса, описанных в файле docker-compose.yml. 

4. После успешного запуска контейнеров, вы сможете получить доступ к следующим компонентам:

    Проект: http://localhost:3001
    Grafana (система мониторинга): http://localhost:3000
    
    
![Main page](https://github.com/garoriz/my-past-game-list/blob/master/images/main%20page.png)

![Table of past games](https://github.com/garoriz/my-past-game-list/blob/master/images/table%20of%20past%20games.png)

![Adding game](https://github.com/garoriz/my-past-game-list/blob/master/images/add%20game.png)

![Grafana](https://github.com/garoriz/my-past-game-list/blob/master/images/grafana.png)
