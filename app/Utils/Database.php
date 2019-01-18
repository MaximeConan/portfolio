<?php

namespace Portfolio\Utils;

use \PDO;
use \Exception;

class Database
{
     /**
     * @var PDO
     */
    private $databaseHandler;

    /**
     * @var Database
     */
    private static $instance;

    /**
     * @return Database
     */
    public static function getInstance()
    {
        if (! isset(self::$instance)) {
            self::$instance = new Database;
        }

        return self::$instance;
    }

    /**
     * @return void
     */
    private function __construct()
    {
        // Récupération des données du fichier de config
        //   la fonction parse_ini_file parse le fichier et retourne un array associatif
        // Attention, "config.conf" ne doit pas être versionné,
        //   on versionnera plutôt un fichier d'exemple "config.dist.conf" ne contenant aucune valeur
        $configData = parse_ini_file(__DIR__ . '/../config.conf');

        try {
            $this->databaseHandler = new PDO(
                "mysql:host={$configData['DB_HOST']};dbname={$configData['DB_NAME']};charset=utf8",
                $configData['DB_USERNAME'],
                $configData['DB_PASSWORD'],
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING) // Affiche les erreurs SQL à l'écran
            );
        }
        catch (Exception $exception) {
            echo 'Erreur de connexion...<br>';
            echo $exception->getMessage().'<br>';
            echo '<pre>';
            echo $exception->getTraceAsString();
            echo '</pre>';
            exit;
        }
    }

    public function getDatabaseHandler()
    {
        return $this->databaseHandler;
    }
}
