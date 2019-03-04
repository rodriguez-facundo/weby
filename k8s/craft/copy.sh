copy_files() {
	h2 'Copy files to nfs server.'

	cd /var/www/html
  cp -r /tmp/html/. /var/www/html
}