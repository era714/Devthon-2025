package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

     @Column(name = "disaster_name")
     private String disasterName;

     @Column(name = "start_date")
     private String startDate;

     @Column(name = "end_date")
     private String endDate;

     @Column(name = "death_count")
     private String deathCount;
}
