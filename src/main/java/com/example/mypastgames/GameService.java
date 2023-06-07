package com.example.mypastgames;

import java.util.List;

public interface GameService {
    List<GameDto> findAll ();
    GameDto findById( Long id);
    GameDto save (GameDto gameDto);
    void deleteById (Long id);
}
