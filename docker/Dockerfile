FROM node:22


WORKDIR /math_wiz_front

# Копируем package.json и package-lock.json в рабочую директорию
COPY math_wiz_front/package*.json ./

# Устанавливаем зависимости
RUN npm install

COPY math_wiz_front .

RUN npm run build

EXPOSE 5173

RUN chown -R node:node node_modules
RUN chmod -R 777 node_modules
