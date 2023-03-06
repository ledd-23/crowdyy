package com.example.crowdyy.model;

import javax.persistence.*;

@Entity
@IdClass(LocationId.class)
@Table(name = "Locations")
public class Location {
    @Id
    @Column(name = "latitude")
    private double latitude;

    @Id
    @Column(name = "longitude")
    private double longitude;

    @Column(name = "elevation")
    private double elevation;

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getElevation() {
        return elevation;
    }

    public void setElevation(double elevation) {
        this.elevation = elevation;
    }
}
