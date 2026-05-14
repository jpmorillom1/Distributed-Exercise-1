package com.distribuida.ex1_back.service;


import com.distribuida.ex1_back.dto.CharacterDto;
import com.distribuida.ex1_back.exceptions.CharacterNotFoundException;
import com.distribuida.ex1_back.model.Request;
import com.distribuida.ex1_back.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CharacterService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private RequestRepository requestRepository;

    public CharacterDto getCharacterById(Long id) {
        String url = "https://rickandmortyapi.com/api/character/" + id;
        CharacterDto character;

        try {
            character = restTemplate.getForObject(url, CharacterDto.class);
        } catch (HttpClientErrorException.NotFound exception) {
            throw new CharacterNotFoundException(id);
        }

        if (character != null) {
            Request request = new Request();
            request.setCharacterId(character.id());
            request.setCharacterName(character.name());
            requestRepository.save(request);
        }

        return character;
    }

    public List<Request> getRequestHistory() {
        return requestRepository.findAll();
    }

}
