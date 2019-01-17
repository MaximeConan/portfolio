<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

class ErrorController extends CoreController
{
    public function page404() {
        http_response_code(404);
        $this->show('404', 
            [
                'title' => 'Page non trouvée 404 - Fresh Coffe Shop',
            ]
        );
    }
}