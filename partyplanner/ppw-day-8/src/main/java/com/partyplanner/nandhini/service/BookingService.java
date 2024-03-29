package com.partyplanner.nandhini.service;

import java.util.List;

import com.partyplanner.nandhini.dto.request.BookingRequest;
import com.partyplanner.nandhini.dto.response.BookingResponse;
import com.partyplanner.nandhini.model.Booking;

public interface BookingService {
    BookingResponse createBooking(BookingRequest request);
    List<Booking> getAllBookings();
    List<Booking> getusersidebookings(Long userid);

}
