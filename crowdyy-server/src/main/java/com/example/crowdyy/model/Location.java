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

    @Column(name = "weight")
    private double weight;

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

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
}
