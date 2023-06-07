package com.example.mypastgames;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GameMapper {
    Game dtoToModel(GameDto gameDto);

    GameDto modelToDto(Game game);

    List<GameDto> toListDto(List<Game> games);
}
