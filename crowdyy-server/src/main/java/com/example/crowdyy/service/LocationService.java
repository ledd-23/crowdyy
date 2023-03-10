package com.example.crowdyy.service;

import com.example.crowdyy.model.Location;

import java.util.List;

public interface LocationService {
    Location add(Location location);

    List<Location> findAll();

    List<Location> findSurrounding(double lat1, double lat2, double long1, double long2);
}
