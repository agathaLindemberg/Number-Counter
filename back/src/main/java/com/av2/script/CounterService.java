package com.av2.script;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CounterService {

    private final ConcurrentHashMap<String, Integer> valueCounts = new ConcurrentHashMap<>();

    public int incrementAndGetCount(String value) {
        return valueCounts.merge(value, 1, Integer::sum);
    }

    public Map<String, Integer> getAllCounts() {
        return valueCounts;
    }
}
