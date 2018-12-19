<?php
class ErrorController
{
    public function page404() {
        http_response_code(404);
        $this->show('404', 
            [
                'title' => 'Page non trouvée 404 - Fresh Coffe Shop',
            ]
        );
    }

    private function show($viewName, $viewVars = []) {
        // $viewVars est disponible dans chaque fichier de vue
        include(__DIR__ . '/../templates/header.php');
        include(__DIR__ . '/../templates/' . $viewName . '.php');
        include(__DIR__ . '/../templates/footer.php');
    }
}