---
sidebar_position: 2
---

# Local setup

## 1. Clone and install

```bash
git clone <your-backend-repo-url> zenithflow-backend
cd zenithflow-backend
cp .env.example .env
composer install --no-interaction --prefer-dist
php artisan key:generate
```

## 2. Configure .env

Set database, cache, queue, mail, and app URL variables.

## 3. Migrate and seed

```bash
php artisan migrate --seed
```

## 4. Storage and assets

```bash
php artisan storage:link
# If using Vite/Laravel Mix assets
npm install && npm run dev
```

## 5. Run services

```bash
php artisan serve
php artisan queue:work
```

