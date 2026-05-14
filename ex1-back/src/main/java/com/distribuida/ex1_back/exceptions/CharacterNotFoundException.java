package com.distribuida.ex1_back.exceptions;

public class CharacterNotFoundException extends RuntimeException {

    public CharacterNotFoundException(Long id) {
        super("Character with id " + id + " was not found");
    }
}