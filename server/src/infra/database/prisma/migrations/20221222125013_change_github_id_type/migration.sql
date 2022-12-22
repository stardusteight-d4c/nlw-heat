-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "github_id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "username" TEXT NOT NULL
);
INSERT INTO "new_users" ("avatar_url", "github_id", "id", "name", "username") SELECT "avatar_url", "github_id", "id", "name", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
