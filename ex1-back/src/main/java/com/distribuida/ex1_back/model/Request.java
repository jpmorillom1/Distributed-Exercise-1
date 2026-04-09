package com.distribuida.ex1_back.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="requests")
@Getter
@Setter
@NoArgsConstructor
public class Request {

    @Id
    @GeneratedValue
    private UUID id;
    private Long characterId;
    private String characterName;
    private LocalDateTime requestedAt;

    @PrePersist
    public void prePersist() {
        if (id == null) {
            id = UUID.randomUUID();
        }
        if (requestedAt == null) {
            requestedAt = LocalDateTime.now();
        }
    }
    

}
