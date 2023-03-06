package com.example.crowdyy.repository;

import com.example.crowdyy.model.Location;
import com.example.crowdyy.model.LocationId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, LocationId> {
}
