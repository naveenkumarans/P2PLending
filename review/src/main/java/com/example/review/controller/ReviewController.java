package com.example.review.controller;


import com.example.review.exception.ReviewAlreadyExistsException;
import com.example.review.model.ReviewRating;
import com.example.review.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;


    @PostMapping("/add/{borrowerId}")
    public ResponseEntity<?>addReview(@RequestBody ReviewRating reviewRating, @PathVariable String borrowerId) throws  ReviewAlreadyExistsException {
        return new ResponseEntity<>(reviewService.addReview(borrowerId,reviewRating), HttpStatus.CREATED);
    }


    @GetMapping("/get/{borrowerId}")
    public ResponseEntity<?>getReviewAndRating(@PathVariable String borrowerId)
    {
        return new ResponseEntity<>(reviewService.getAllRatingAndReview(borrowerId),HttpStatus.OK);
    }

    @GetMapping("/getAverage/{id}")
    public ResponseEntity<?>getAverageRating(@PathVariable String id)
    {
        return new ResponseEntity<>(reviewService.averageRating(id),HttpStatus.OK);

    }
}



