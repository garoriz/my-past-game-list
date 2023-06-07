package com.example.mypastgames;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    @Override
    public List<GameDto> findAll() {
        return gameMapper.toListDto(gameRepository.findAll());
    }

    @Override
    public GameDto findById(Long id) {
        return Optional.of(getById(id)).map(gameMapper::modelToDto).get();
    }

    @Override
    @Transactional
    public GameDto save(GameDto gameDto) {
        return gameMapper.modelToDto(gameRepository.save(
                gameMapper.dtoToModel(gameDto)));
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        var game = getById(id);
        gameRepository.delete(game);
    }

    private Game getById(Long id) {
        return gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        "Game with id: " + id + " not found"));
    }
}
