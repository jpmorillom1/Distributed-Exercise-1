package com.distribuida.ex1_back.controller;


import com.distribuida.ex1_back.dto.CharacterDto;
import com.distribuida.ex1_back.model.Request;
import com.distribuida.ex1_back.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    @GetMapping("/character/{id}")
    public ResponseEntity<CharacterDto> getCharacter(@PathVariable Long id){
        return ResponseEntity.ok(characterService.getCharacterById(id));
    }

    @GetMapping("/requests")
    public ResponseEntity<List<Request>> getRequestHistory() {
        return ResponseEntity.ok(characterService.getRequestHistory());
    }




}
