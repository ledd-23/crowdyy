package com.example.crowdyy.controller;

import com.example.crowdyy.model.Location;
import com.example.crowdyy.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LocationController {
    @Autowired
    private LocationService locationService;

    @GetMapping("/locations")
    public List<Location> getLocations() {
        return locationService.findAll();
    }

    @PostMapping("/location")
    public Location addLocation(Location loc) {
        return locationService.add(loc);
    }

    @GetMapping("/locations/surrounding")
    public List<Location> getSurrounding(double lat1, double lat2, double long1, double long2) {
        return locationService.findSurrounding(lat1, lat2, long1, long2);
    }
}
