package com.partyplanner.nandhini.service.impl;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.partyplanner.nandhini.dto.request.BookingRequest;
import com.partyplanner.nandhini.dto.response.BookingResponse;
import com.partyplanner.nandhini.model.Booking;
import com.partyplanner.nandhini.repository.BookingRepository;
import com.partyplanner.nandhini.service.BookingService;

import lombok.RequiredArgsConstructor;
import java.util.*;
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;


    @Override
    public BookingResponse createBooking(BookingRequest request) {
       
        Long userId = request.getUserId();
        Long venueId = request.getVenueId();

        Booking booking = Booking.builder()
                .noOfPersons(request.getNoOfPersons())
                .ondate(request.getOnDate())
             
                .userId(userId)
                .venueId(venueId)
                .eventType(request.getEventType())
                .paymentStatus(request.getPaymentStatus())
                .build();

        bookingRepository.save(booking);

        return BookingResponse.builder()
                .message("Booking created successfully!")
                .build();
    }
    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    @Override
    public List<Booking> getusersidebookings(Long userid){
       
            return bookingRepository.findByUserId(userid);
       
       
    }
}
     