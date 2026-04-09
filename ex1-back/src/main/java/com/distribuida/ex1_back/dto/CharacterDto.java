package com.distribuida.ex1_back.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CharacterDto(
        Long id,
        String name,
        String status,
        String species,
        String type,
        String gender,
        OriginDto origin,
        LocationDto location,
        String image,
        List<String> episode,
        String url,
        String created
) {

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record OriginDto(String name, String url) {
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record LocationDto(String name, String url) {
    }
}