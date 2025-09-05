https://excalidraw.com/#json=lQx6-KNFJQoPwdBso1rY1,jTKwUY0d4I4zt5dJtCIH8Q   


Backend : 

express js
Node js
Graphql - apollo
postgres
Docker

typescript


To run a docker file 
```
docker compose up
```







Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\Karan> docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS                    NAMES
b9250e85c8bc   postgres   "docker-entrypoint.s…"   26 minutes ago   Up 22 minutes   0.0.0.0:5432->5432/tcp   thread-db
PS C:\Users\Karan> docker exec -it b9250e85c8bc bash
root@b9250e85c8bc:/# su postgres
postgres@b9250e85c8bc:/$ psql
psql (17.6 (Debian 17.6-1.pgdg13+1))
Type "help" for help.

postgres=# \l
postgres=# \c thread
You are now connected to database "thread" as user "postgres".
thread=# \d
               List of relations
 Schema |        Name        | Type  |  Owner
--------+--------------------+-------+----------
 public | _prisma_migrations | table | postgres
 public | users              | table | postgres
(2 rows)

thread=# \d users
                   Table "public.users"
      Column       | Type | Collation | Nullable | Default
-------------------+------+-----------+----------+---------
 id                | text |           | not null |
 email             | text |           | not null |
 first_name        | text |           | not null |
 last_name         | text |           | not null |
 password          | text |           | not null |
 salt              | text |           | not null |
 profile_image_url | text |           |          |
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
    "users_email_key" UNIQUE, btree (email)

thread=#


mkdir -p prisma/migrations/0_init
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
npx prisma migrate resolve --applied 0_init
npx prisma generate

npx prisma migrate dev --name create-user-table



docker compose up -d
yarn dev
if you change something :  npx prisma migrate dev --name create-user-table