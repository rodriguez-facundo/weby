FROM urbantrout/craftcms:mysql

ENV CRAFTCMS_EMAIL=admin@company.com \
  CRAFTCMS_USERNAME=SuperAdmin \
  CRAFTCMS_PASSWORD=Pas5WordMetaCell \
  CRAFTCMS_SITENAME=MetaCell \
  CRAFTCMS_SITEURL=localhost \
  DB_SERVER=mariadb  \
  DB_NAME=craft  \
  DB_USER=craft \
  DB_PASSWORD=secret \
  DB_DATABASE=craft \
  DB_SCHEMA=public \
  DB_DRIVER=mysql \
  DB_PORT=3306 \
  DB_TABLE_PREFIX=metac \
  DEFAULT_SITE_URL=localhost

# # USER root
# USER root
# RUN chown -R www-data:www-data /var/www/html/.
# USER www-data

COPY --chown=www-data:www-data web/ /tmp/html/web/
COPY --chown=www-data:www-data storage/backups/jhsbk.sql /tmp/html/storage/backups/jhsbk.sql
COPY --chown=www-data:www-data templates /tmp/html/templates/
COPY --chown=www-data:www-data config/ /tmp/html/config

COPY --chown=www-data:www-data composer.json /tmp/html/composer.json
# COPY --chown=www-data:www-data composer.lock /tmp/html/composer.lock
COPY --chown=www-data:www-data craft /tmp/html/craft
COPY --chown=www-data:www-data craft.bat /tmp/html/craft.bat
COPY --chown=www-data:www-data modules /tmp/html/modules
COPY --chown=www-data:www-data php.ini /tmp/html/php.ini

# RUN chmod u+x /tmp/html/craft

USER root