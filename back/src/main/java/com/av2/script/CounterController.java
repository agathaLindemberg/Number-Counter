package com.av2.script;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class CounterController {

    @Autowired
    private CounterService counterService;

    @PostMapping("/count")
    public int countValue(@RequestParam String value) {
        return counterService.incrementAndGetCount(value);
    }

    @GetMapping("/counts")
    public Map<String, Integer> getAllCounts() {
        return counterService.getAllCounts();
    }
}
