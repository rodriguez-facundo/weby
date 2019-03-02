FROM nginx:alpine

COPY --chown=nginx:nginx web /var/www/html/web/
COPY --chown=nginx:nginx templates /var/www/html/templates/
COPY --chown=nginx:nginx config /var/www/html/config/
# COPY --chown=nginx:nginx composer.json /var/www/html/composer.json
COPY --chown=nginx:nginx composer.lock /var/www/html/composer.lock
COPY --chown=nginx:nginx craft /var/www/html/craft
COPY --chown=nginx:nginx craft.bat /var/www/html/craft.bat
COPY --chown=nginx:nginx modules /var/html/modules
COPY --chown=nginx:nginx php.ini /var/html/php.ini

# COPY --chown=nginx:nginx default.conf /etc/nginx/conf.d/default.conf

# RUN chmod -R 777 /var /etc/nginx