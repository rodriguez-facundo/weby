FROM urbantrout/craftcms:mysql

ENV CRAFTCMS_EMAIL=admin@company.com \
  CRAFTCMS_USERNAME=SuperAdmin \
  CRAFTCMS_PASSWORD=Pas5WordMetaCell \
  CRAFTCMS_SITENAME=MetaCell \
  CRAFTCMS_SITEURL=35.192.137.162 \
  DB_SERVER=mariadb  \
  DB_NAME=craft  \
  DB_USER=craft \
  DB_PASSWORD=secret \
  DB_DATABASE=craft \
  DB_SCHEMA=public \
  DB_DRIVER=mysql \
  DB_PORT=3306 \
  DB_TABLE_PREFIX=metac \
  DEFAULT_SITE_URL= 

# # USER root
# USER root
# RUN chown -R www-data:www-data /var/www/html/.
# USER www-data
# RUN cp -R /var/www/html/. /var/www/html

COPY --chown=www-data:www-data web/ /var/www/html/web/
COPY --chown=www-data:www-data storage/backups/jhsbk.sql /var/www/html/storage/backups/jhsbk.sql
COPY --chown=www-data:www-data templates /var/www/html/templates/
COPY --chown=www-data:www-data config/ /var/www/html/config

COPY --chown=www-data:www-data composer.json /var/www/html/composer.json
COPY --chown=www-data:www-data composer.lock /var/www/html/composer.lock
# COPY --chown=www-data:www-data craft /var/www/html/craft ***
# COPY --chown=www-data:www-data craft.bat /var/www/html/craft.bat ***
# COPY --chown=www-data:www-data modules /var/www/html/modules ***
COPY --chown=www-data:www-data php.ini /var/www/html/php.ini
# ENTRYPOINT []
# CMD ["/bin/sh", "-c"]

# RUN chmod -R a+wx /var/www/html/ ***

# RUN chmod u+x /var/www/html/craft