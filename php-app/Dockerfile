FROM php:8.2-apache

RUN apt-get update && apt-get install -y libicu-dev libzip-dev unzip git \
    && docker-php-ext-install intl pdo pdo_mysql zip opcache

WORKDIR /var/www/html

COPY . .

RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

EXPOSE 80
