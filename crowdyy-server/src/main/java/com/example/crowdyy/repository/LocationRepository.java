package com.example.crowdyy.repository;

import com.example.crowdyy.model.Location;
import com.example.crowdyy.model.LocationId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, LocationId> {
    List<Location> findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(double lat1, double lat2, double long1, double long2);
}
