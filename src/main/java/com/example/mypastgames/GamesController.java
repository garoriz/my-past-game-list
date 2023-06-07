package com.example.mypastgames;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class GamesController {
    private final GameService gameService;

    @GetMapping("/games")
    public List<GameDto> allBooks() {
        return gameService.findAll();
    }

    @GetMapping("/game/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<GameDto> getGame(@PathVariable Long id) {
        return ResponseEntity.ok().body(gameService.findById(id));
    }

    @PostMapping("/game")
    public ResponseEntity<GameDto> createGame( @RequestBody GameDto game) throws URISyntaxException {
        GameDto result = gameService.save(game);
        return ResponseEntity.created(new URI("/api/v1/games/" + result.getId()))
                .body(result);
    }

    @PutMapping("/game/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<GameDto> updateGame( @PathVariable Long id, @RequestBody GameDto game) {
        return ResponseEntity.ok().body(gameService.save(game));
    }

    @DeleteMapping("/game/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable Long id) {
        gameService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
