init:
	composer install
	npm i
	npm run build
	php artisan migrate

serve:
	php artisan serve