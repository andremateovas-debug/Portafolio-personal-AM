<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'dbm5vr0udfjukf');
define('DB_USER', 'u697jpnxpj9at');
define('DB_PASS', '`z2l{^35_1@#');

function getDB(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER,
            DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }
    return $pdo;
}