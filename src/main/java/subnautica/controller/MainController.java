package subnautica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/mapa")
    public String mapa() {
        return "interative_map";
    }

    @GetMapping("/items")
    public String items() {
        return "items";
    }

    @GetMapping("/criaturas")
    public String criaturas() {
        return "criaturas";
    }
}