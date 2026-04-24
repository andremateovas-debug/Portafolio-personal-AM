<?php
header("Access-Control-Allow-Origin: https://andremateov.sg-host.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}



require_once 'db.php';
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 1. Leer input
$body = json_decode(file_get_contents('php://input'), true);

$nombre   = trim(htmlspecialchars($body['nombre']   ?? ''));
$email    = trim(filter_var($body['email'] ?? '', FILTER_SANITIZE_EMAIL));
$telefono = trim(htmlspecialchars($body['telefono'] ?? ''));
$mensaje  = trim(htmlspecialchars($body['mensaje']  ?? ''));

// 2. Validación
$errors = [];
if (empty($nombre))                               $errors[] = 'El nombre es requerido.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))   $errors[] = 'Email inválido.';
if (empty($mensaje))                              $errors[] = 'El mensaje es requerido.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// 3. Guardar en BD
try {
    $pdo = getDB();
    $stmt = $pdo->prepare("
        INSERT INTO contactos (nombre, email, telefono, mensaje, ip)
        VALUES (:nombre, :email, :telefono, :mensaje, :ip)
    ");
    $stmt->execute([
        ':nombre'   => $nombre,
        ':email'    => $email,
        ':telefono' => $telefono,
        ':mensaje'  => $mensaje,
        ':ip'       => $_SERVER['REMOTE_ADDR'] ?? null,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al guardar en la base de datos.']);
    exit;
}


$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'mail.andremateov.sg-host.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contacto@andremateov.sg-host.com'; // tu email en SiteGround
    $mail->Password   = 'TU_PASSWORD_EMAIL';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('contacto@andremateov.sg-host.com', 'AM Devs Landing');
    $mail->addAddress('andremateovas@gmail.com', 'Andre');
    $mail->addReplyTo($email, $nombre); // para responderle directo desde Gmail

    $mail->isHTML(true);
    $mail->Subject = "📬 Nuevo contacto de $nombre";
    $mail->Body    = "
        <div style='font-family:sans-serif;color:#111;max-width:520px'>
            <h2 style='border-bottom:2px solid #000;padding-bottom:8px'>Nuevo mensaje — Landing AM Devs</h2>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> " . ($telefono ?: 'No proporcionado') . "</p>
            <p><strong>Mensaje:</strong></p>
            <blockquote style='background:#f4f4f4;padding:12px;border-left:4px solid #000'>{$mensaje}</blockquote>
        </div>
    ";

    $mail->send();
} catch (Exception $e) {
    error_log("PHPMailer error: " . $mail->ErrorInfo);
    // No bloqueamos la respuesta, el registro ya está guardado
}

echo json_encode(['success' => true, 'message' => '¡Mensaje enviado con éxito!']);