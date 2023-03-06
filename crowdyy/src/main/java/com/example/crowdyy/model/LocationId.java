package com.example.crowdyy.model;

import java.io.Serializable;

public class LocationId implements Serializable {
    private double latitude;

    private double longitude;

    public LocationId() {}

    public LocationId(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
