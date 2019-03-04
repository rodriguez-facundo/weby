copy_files() {
  printf '\e[1;33m==>\e[37;1m COPYING FILES HERE !!!! \e[0m\n'
  rm /var/www/html/* /tmp/html/composer.base
	cp -r /tmp/html/. /var/www/html/
}