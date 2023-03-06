package com.example.crowdyy.service;

import com.example.crowdyy.model.Location;

import java.util.List;

public interface LocationService {
    Location add(Location location);

    List<Location> findAll();
}
