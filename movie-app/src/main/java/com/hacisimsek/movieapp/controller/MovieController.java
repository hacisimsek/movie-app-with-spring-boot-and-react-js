package com.hacisimsek.movieapp.controller;

import com.hacisimsek.movieapp.model.Movie;
import com.hacisimsek.movieapp.service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable ObjectId id){
        return new ResponseEntity<>(movieService.singleMovie(id), HttpStatus.OK);

    }
    @GetMapping("/imbdId/{imbdId}")
    public ResponseEntity<Optional<Movie>> getMovieByImbdId(@PathVariable String imbdId){
        return new ResponseEntity<>(movieService.getMovieByImdbId(imbdId), HttpStatus.OK);
    }
}
