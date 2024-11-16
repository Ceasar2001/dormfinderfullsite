-- CreateTable
-- CREATE TABLE "User" (
--     "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--     "email" TEXT NOT NULL,
--     "username" TEXT NOT NULL,
--     "password" TEXT NOT NULL,
--     "avatar" TEXT,
--     "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );


CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);



-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
