---
sidebar_position: 1
---

# Overview

ZenithFlow backend is a Laravel application exposing a REST API consumed by the Flutter app and the Accounting web module.

## Prerequisites

- PHP 8.2+
- Composer 2+
- MySQL/MariaDB
- Redis (queues/cache)
- Node.js 18+ and pnpm/yarn (for front-end assets if applicable)

## Key modules

- Authentication and authorization (RBAC)
- Master data (customers, vendors, items)
- Transactions (sales, purchase, inventory)
- Integrations (accounting webview, notifications)

