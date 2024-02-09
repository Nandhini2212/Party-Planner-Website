package com.partyplanner.nandhini.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private Integer noOfPersons;
    private Date onDate;
    private Double totalPrice;
    private Long userId; // Assuming userId is a Long value
    private Long venueId; // Assuming venueId is a Long value
    private String eventType;
    private Integer paymentStatus; // 0 for unpaid, 1 for paid

    // Getter and Setter methods if not generated by Lombok
}
