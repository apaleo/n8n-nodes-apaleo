import { INodeProperties } from 'n8n-workflow';

export const operationsByResource = {
  "availability": [
    {
      "displayName": "Get a list of all available units in a property",
      "value": "AvailabilityUnitsGet",
      "description": "Get the list of available units for a specific property and time period.<br>You must have this scope: 'availability.read'.",
      "action": "Get a list of all available units in a property",
      "method": "GET",
      "path": "/availability/v1/units",
      "resource": "availability",
      "group": "availability-v1"
    },
    {
      "displayName": "Get a list of all available unit groups in a property",
      "value": "AvailabilityUnit-groupsGet",
      "description": "Get the list of available unit groups for a specific property and time period.<br>You must have this scope: 'availability.read'.",
      "action": "Get a list of all available unit groups in a property",
      "method": "GET",
      "path": "/availability/v1/unit-groups",
      "resource": "availability",
      "group": "availability-v1"
    },
    {
      "displayName": "Allows to modify the unit group availability",
      "value": "AvailabilityUnit-groupsByIdPatch",
      "description": "You can replace AllowedOverbooking for a unit group<br>You must have this scope: 'availability.manage'.",
      "action": "Allows to modify the unit group availability",
      "method": "PATCH",
      "path": "/availability/v1/unit-groups/{id}",
      "resource": "availability",
      "group": "availability-v1"
    },
    {
      "displayName": "Get a list of all available services in a property",
      "value": "AvailabilityServicesGet",
      "description": "Get the list of available services for a specific property and time period.<br>You must have this scope: 'availability.read'.",
      "action": "Get a list of all available services in a property",
      "method": "GET",
      "path": "/availability/v1/services",
      "resource": "availability",
      "group": "availability-v1"
    }
  ],
  "reservationavailability": [
    {
      "displayName": "Get a list of all available units for a reservation",
      "value": "AvailabilityReservationsByIdUnitsGet",
      "description": "Get the list of available units for a specific reservation and time period.<br>You must have at least one of these scopes: 'availability.read, reservations.manage'.",
      "action": "Get a list of all available units for a reservation",
      "method": "GET",
      "path": "/availability/v1/reservations/{id}/units",
      "resource": "reservationavailability",
      "group": "availability-v1"
    }
  ],
  "block": [
    {
      "displayName": "Creates a block",
      "value": "BookingBlocksPost",
      "description": "<br>You must have at least one of these scopes: 'blocks.create, reservations.manage'.",
      "action": "Creates a block",
      "method": "POST",
      "path": "/booking/v1/blocks",
      "resource": "block",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a list of blocks",
      "value": "BookingBlocksGet",
      "description": "Returns a list of all blocks, filtered by the specified parameters. If no parameters are set, returns the entire list.<br>You must have at least one of these scopes: 'blocks.read, reservations.read, reservations.manage'.",
      "action": "Returns a list of blocks",
      "method": "GET",
      "path": "/booking/v1/blocks",
      "resource": "block",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns number of blocks",
      "value": "BookingBlocks$countGet",
      "description": "Returns number of blocks matching the filter criteria<br>You must have at least one of these scopes: 'blocks.read, reservations.read, reservations.manage'.",
      "action": "Returns number of blocks",
      "method": "GET",
      "path": "/booking/v1/blocks/$count",
      "resource": "block",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a specific block.",
      "value": "BookingBlocksByIdGet",
      "description": "Retrieves a block, specified by its ID.<br>You must have at least one of these scopes: 'blocks.read, reservations.read, reservations.manage'.",
      "action": "Returns a specific block.",
      "method": "GET",
      "path": "/booking/v1/blocks/{id}",
      "resource": "block",
      "group": "booking-v1"
    }
  ],
  "blockactions": [
    {
      "displayName": "Confirm a block.",
      "value": "BookingBlock-actionsByIdConfirmPut",
      "description": "Confirm a specific block which is in status 'Tentative'.\r\nThis changes the status to 'Definite'.<br>You must have at least one of these scopes: 'blocks.manage, reservations.manage'.",
      "action": "Confirm a block.",
      "method": "PUT",
      "path": "/booking/v1/block-actions/{id}/confirm",
      "resource": "blockactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Release a block.",
      "value": "BookingBlock-actionsByIdReleasePut",
      "description": "Release a specific block which is in status 'Definite'.\r\nThis changes the status to 'Tentative'.<br>You must have at least one of these scopes: 'blocks.manage, reservations.manage'.",
      "action": "Release a block.",
      "method": "PUT",
      "path": "/booking/v1/block-actions/{id}/release",
      "resource": "blockactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Cancel a block.",
      "value": "BookingBlock-actionsByIdCancelPut",
      "description": "Cancel a specific block which is in status 'Definite' or 'Tentative'.\r\nThis changes the status to 'Canceled'.<br>You must have at least one of these scopes: 'blocks.manage, reservations.manage'.",
      "action": "Cancel a block.",
      "method": "PUT",
      "path": "/booking/v1/block-actions/{id}/cancel",
      "resource": "blockactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Wash a block.",
      "value": "BookingBlock-actionsByIdWashPut",
      "description": "Wash a specific block which is in status 'Definite'.\r\nThis releases all unpicked units.<br>You must have at least one of these scopes: 'blocks.manage, reservations.manage'.",
      "action": "Wash a block.",
      "method": "PUT",
      "path": "/booking/v1/block-actions/{id}/wash",
      "resource": "blockactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Allow to modify a block",
      "value": "BookingBlock-actionsByIdAmendPut",
      "description": "Use this call to modify a block.<br>You must have at least one of these scopes: 'blocks.manage, reservations.manage'.",
      "action": "Allow to modify a block",
      "method": "PUT",
      "path": "/booking/v1/block-actions/{id}/amend",
      "resource": "blockactions",
      "group": "booking-v1"
    }
  ],
  "booking": [
    {
      "displayName": "Creates a booking for one or more reservations.",
      "value": "BookingBookingsPost",
      "description": "Creates a booking taking a list of reservations as input.<br>You must have at least one of these scopes: 'reservations.create, reservations.manage'.",
      "action": "Creates a booking for one or more reservations.",
      "method": "POST",
      "path": "/booking/v1/bookings",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a list of all bookings, filtered by the specified parameters.",
      "value": "BookingBookingsGet",
      "description": "Returns a list of all bookings, filtered by the specified parameters. If no parameters are set, returns the entire list.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns a list of all bookings, filtered by the specified parameters.",
      "method": "GET",
      "path": "/booking/v1/bookings",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Creates a booking for one or more reservations regardless of availability or restrictions.",
      "value": "BookingBookings$forcePost",
      "description": "Creates a booking taking a list of reservations as input.<br>You must have at least one of these scopes: 'reservations.force-create, reservations.force-manage'.",
      "action": "Creates a booking for one or more reservations regardless of availability or restrictions.",
      "method": "POST",
      "path": "/booking/v1/bookings/$force",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Add one or multiple reservations to an existing booking.",
      "value": "BookingBookingsByIdReservationsPost",
      "description": "Creates new reservations and adds them to an existing booking taking a list of reservations as input<br>You must have at least one of these scopes: 'reservations.create, reservations.manage'.",
      "action": "Add one or multiple reservations to an existing booking.",
      "method": "POST",
      "path": "/booking/v1/bookings/{id}/reservations",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Add one or multiple reservations to an existing booking regardless of availability or restrictions.",
      "value": "BookingBookingsByIdReservations$forcePost",
      "description": "Creates new reservations and adds them to an existing booking taking a list of reservations as input<br>You must have at least one of these scopes: 'reservations.force-create, reservations.force-manage'.",
      "action": "Add one or multiple reservations to an existing booking regardless of availability or restrictions.",
      "method": "POST",
      "path": "/booking/v1/bookings/{id}/reservations/$force",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a specific booking.",
      "value": "BookingBookingsByIdGet",
      "description": "Retrieves a booking with all its reservations.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns a specific booking.",
      "method": "GET",
      "path": "/booking/v1/bookings/{id}",
      "resource": "booking",
      "group": "booking-v1"
    },
    {
      "displayName": "Allows to modify certain booking properties",
      "value": "BookingBookingsByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Add, replace and remove PaymentAccount\r\n- Add, replace and remove Comment\r\n- Add, replace and remove BookerComment\r\n- Copy PaymentAccount, Comment and BookerComment from the booking to any reservation, or the other way around\r\n- Replace Booker<br>You must have this scope: 'reservations.manage'.",
      "action": "Allows to modify certain booking properties",
      "method": "PATCH",
      "path": "/booking/v1/bookings/{id}",
      "resource": "booking",
      "group": "booking-v1"
    }
  ],
  "group": [
    {
      "displayName": "Creates a group booking.",
      "value": "BookingGroupsPost",
      "description": "<br>You must have at least one of these scopes: 'groups.create, reservations.manage'.",
      "action": "Creates a group booking.",
      "method": "POST",
      "path": "/booking/v1/groups",
      "resource": "group",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a list of all group bookings, filtered by the specified parameters.",
      "value": "BookingGroupsGet",
      "description": "Returns a list of all group bookings, filtered by the specified parameters.\r\nIf no parameters are set, returns the entire list<br>You must have at least one of these scopes: 'groups.read, reservations.read, reservations.manage'.",
      "action": "Returns a list of all group bookings, filtered by the specified parameters.",
      "method": "GET",
      "path": "/booking/v1/groups",
      "resource": "group",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a specific group booking.",
      "value": "BookingGroupsByIdGet",
      "description": "Retrieves a specific group booking with all its related blocks<br>You must have at least one of these scopes: 'groups.read, reservations.read, reservations.manage'.",
      "action": "Returns a specific group booking.",
      "method": "GET",
      "path": "/booking/v1/groups/{id}",
      "resource": "group",
      "group": "booking-v1"
    },
    {
      "displayName": "Allows to modify certain group booking properties",
      "value": "BookingGroupsByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Add and replace Name\r\n- Add, replace and remove Comment\r\n- Add, replace and remove BookerComment\r\n- Add, replace and remove PaymentAccount\r\n- Add, replace and remove PropertyIds\r\n- Replace Booker<br>You must have at least one of these scopes: 'groups.manage, reservations.manage'.",
      "action": "Allows to modify certain group booking properties",
      "method": "PATCH",
      "path": "/booking/v1/groups/{id}",
      "resource": "group",
      "group": "booking-v1"
    },
    {
      "displayName": "Add one or multiple reservations to an existing group booking using blocked inventory.",
      "value": "BookingGroupsByIdReservationsPost",
      "description": "Creates new reservations and adds them to an existing group booking taking a list of reservations as input<br>You must have at least one of these scopes: 'groups.manage, reservations.manage'.",
      "action": "Add one or multiple reservations to an existing group booking using blocked inventory.",
      "method": "POST",
      "path": "/booking/v1/groups/{id}/reservations",
      "resource": "group",
      "group": "booking-v1"
    }
  ],
  "offer": [
    {
      "displayName": "Returns offers for one specific stay.",
      "value": "BookingOffersGet",
      "description": "Calculates and returns available offers for a specific property, arrival and departure date.<br>You must have at least one of these scopes: 'offers.read, reservations.manage'.",
      "action": "Returns offers for one specific stay.",
      "method": "GET",
      "path": "/booking/v1/offers",
      "resource": "offer",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns offers for a specific rate plan.",
      "value": "BookingRate-plan-offersGet",
      "description": "Calculates and returns available offers for a specific rate plan, arrival and departure date.<br>You must have at least one of these scopes: 'offers.read, reservations.manage'.",
      "action": "Returns offers for a specific rate plan.",
      "method": "GET",
      "path": "/booking/v1/rate-plan-offers",
      "resource": "offer",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns service offers for one specific stay.",
      "value": "BookingService-offersGet",
      "description": "<br>You must have at least one of these scopes: 'offers.read, reservations.manage'.",
      "action": "Returns service offers for one specific stay.",
      "method": "GET",
      "path": "/booking/v1/service-offers",
      "resource": "offer",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns offers with rates and availabilities for the specified range.",
      "value": "BookingOffer-indexGet",
      "description": "Calculates and returns offers per time slice for a specific rate plan, arrival and departure date.<br>You must have at least one of these scopes: 'offer-index.read, offers.read'.",
      "action": "Returns offers with rates and availabilities for the specified range.",
      "method": "GET",
      "path": "/booking/v1/offer-index",
      "resource": "offer",
      "group": "booking-v1"
    }
  ],
  "reservation": [
    {
      "displayName": "Returns a list of all reservations, filtered by the specified parameters.",
      "value": "BookingReservationsGet",
      "description": "Returns a list of all reservations, filtered by the specified parameters. If no parameters are set, returns the entire list.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns a list of all reservations, filtered by the specified parameters.",
      "method": "GET",
      "path": "/booking/v1/reservations",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns the number of reservations fulfilling the criteria specified in the parameters.",
      "value": "BookingReservations$countGet",
      "description": "If no parameters are set, returns the total count of reservations.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns the number of reservations fulfilling the criteria specified in the parameters.",
      "method": "GET",
      "path": "/booking/v1/reservations/$count",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a specific reservation.",
      "value": "BookingReservationsByIdGet",
      "description": "Retrieves a reservation, specified by its ID.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns a specific reservation.",
      "method": "GET",
      "path": "/booking/v1/reservations/{id}",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Allows to modify certain reservation properties",
      "value": "BookingReservationsByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Add, replace and remove Comment\r\n- Add, replace and remove GuestComment\r\n- Add, replace and remove PaymentAccount\r\n- Add, replace and remove TravelPurpose\r\n- Add, replace and remove AdditionalGuests\r\n- Add a company (using company/Id, and only if not already set)\r\n- Add, replace and remove Commission\r\n- Replace PrimaryGuest\r\n- Remove ValidationMessages\r\n- Add, replace and remove MarketSegment<br>You must have this scope: 'reservations.manage'.",
      "action": "Allows to modify certain reservation properties",
      "method": "PATCH",
      "path": "/booking/v1/reservations/{id}",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns offers for one specific reservation.",
      "value": "BookingReservationsByIdOffersGet",
      "description": "Calculates and returns offers for amending a specific reservation.<br>You must have at least one of these scopes: 'offers.read, reservations.manage'.",
      "action": "Returns offers for one specific reservation.",
      "method": "GET",
      "path": "/booking/v1/reservations/{id}/offers",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns service offers for one specific reservation.",
      "value": "BookingReservationsByIdService-offersGet",
      "description": "Calculates and returns service offers for a specific reservation.<br>You must have at least one of these scopes: 'offers.read, reservations.manage'.",
      "action": "Returns service offers for one specific reservation.",
      "method": "GET",
      "path": "/booking/v1/reservations/{id}/service-offers",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns the services booked for a specific reservation.",
      "value": "BookingReservationsByIdServicesGet",
      "description": "Returns the services booked for a specific reservation.<br>You must have at least one of these scopes: 'reservations.read, reservations.manage'.",
      "action": "Returns the services booked for a specific reservation.",
      "method": "GET",
      "path": "/booking/v1/reservations/{id}/services",
      "resource": "reservation",
      "group": "booking-v1"
    },
    {
      "displayName": "Removes a service from a reservation.",
      "value": "BookingReservationsByIdServicesDelete",
      "description": "Removes a service from a reservation. The service will not be removed if it is mandatory, already posted or if the service date is in the past.<br>You must have this scope: 'reservations.manage'.",
      "action": "Removes a service from a reservation.",
      "method": "DELETE",
      "path": "/booking/v1/reservations/{id}/services",
      "resource": "reservation",
      "group": "booking-v1"
    }
  ],
  "reservationactions": [
    {
      "displayName": "Assign a unit to a reservation.",
      "value": "BookingReservation-actionsByIdAssign-unitPut",
      "description": "Assigns one of the available units to a reservation which is in state 'Confirmed' or 'InHouse'.<br>You must have at least one of these scopes: 'reservations.assign-unit, reservations.manage'.",
      "action": "Assign a unit to a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/assign-unit",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Assign a specific unit to a reservation.",
      "value": "BookingReservation-actionsByIdAssign-unitByUnitIdPut",
      "description": "Assigns a specific unit to a reservation which is in state 'Confirmed' or 'InHouse'.\nIf the unit is not available, the call will return an error, and no unit will be assigned.<br>You must have at least one of these scopes: 'reservations.assign-unit, reservations.manage'.",
      "action": "Assign a specific unit to a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/assign-unit/{unitId}",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Unassign units from a reservation.",
      "value": "BookingReservation-actionsByIdUnassign-unitsPut",
      "description": "Unassigns units for all time slices of the given reservation. If no units are assigned for the\r\nreservation nothing will happen. It will fail for reservations in status 'CheckedOut'.<br>You must have at least one of these scopes: 'reservations.assign-unit, reservations.manage'.",
      "action": "Unassign units from a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/unassign-units",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Check-in of a reservation.",
      "value": "BookingReservation-actionsByIdCheckinPut",
      "description": "Check in a specific reservation which is in status 'Confirmed', and has a unit assigned. This changes the status to 'InHouse', and sets the check-in date and time.<br>You must have this scope: 'reservations.manage'.",
      "action": "Check-in of a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/checkin",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Reverses the check-in of a reservation.",
      "value": "BookingReservation-actionsByIdRevert-checkinPut",
      "description": "<br>You must have this scope: 'reservations.manage'.",
      "action": "Reverses the check-in of a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/revert-checkin",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Check-out of a reservation.",
      "value": "BookingReservation-actionsByIdCheckoutPut",
      "description": "Check out a specific reservation which is in status 'InHouse'. This changes the status to 'CheckedOut', and sets the check-out date and time.\r\nAll open charges on the folio will be posted.\r\n\n\r\nCheck-out is only possible, if the departure date is not later than tomorrow. Otherwise, first amend the reservation and shorten the stay.<br>You must have this scope: 'reservations.manage'.",
      "action": "Check-out of a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/checkout",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Cancel a reservation.",
      "value": "BookingReservation-actionsByIdCancelPut",
      "description": "Cancel a specific reservation which is in status 'Confirmed' and where the arrival time is in the future.\r\nThis changes the status to 'Canceled', and sets the cancellation date and time.<br>You must have this scope: 'reservations.manage'.",
      "action": "Cancel a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/cancel",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Set a reservation to No-show.",
      "value": "BookingReservation-actionsByIdNoshowPut",
      "description": "Set a specific reservation to No-show which is in status 'Confirmed' and where the arrival date is in the past.\r\nThis changes the status to 'NoShow', and sets the no-show date and time.<br>You must have this scope: 'reservations.manage'.",
      "action": "Set a reservation to No-show.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/noshow",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Allows you to amend the stay details of a reservation",
      "value": "BookingReservation-actionsByIdAmendPut",
      "description": "Modifies the stay-related data of a reservation.\n\r\nIf a reservation is 'Confirmed', you can change all fields.\n\r\nIf a reservation is 'InHouse', only changes to future time slices are possible.\n\r\nChanges to reservations that are in the status 'CheckedOut' or 'Canceled' are not possible at all.<br>You must have this scope: 'reservations.manage'.",
      "action": "Allows you to amend the stay details of a reservation",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/amend",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Allows you to amend the stay details of a reservation regardless of availability or restrictions.",
      "value": "BookingReservation-actionsByIdAmend$forcePut",
      "description": "Modifies the stay-related data of a reservation.\n\r\nIf a reservation is 'Confirmed', you can change all fields.\n\r\nIf a reservation is 'InHouse', only changes to future time slices are possible.\n\r\nChanges to reservations that are in the status 'CheckedOut' or 'Canceled' are not possible at all.<br>You must have this scope: 'reservations.force-manage'.",
      "action": "Allows you to amend the stay details of a reservation regardless of availability or restrictions.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/amend/$force",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Book the service for a specific reservation.",
      "value": "BookingReservation-actionsByIdBook-servicePut",
      "description": "Use this to book a service for a specific reservation.\r\nPlease note that when dates are specified, all desired dates must be specified or they will be removed if not posted to the folio.<br>You must have this scope: 'reservations.manage'.",
      "action": "Book the service for a specific reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/book-service",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Book the service for a specific reservation regardless of availability.",
      "value": "BookingReservation-actionsByIdBook-service$forcePut",
      "description": "Use this to book a service for a specific reservation.\r\nPlease note that when dates are specified, all desired dates must be specified or they will be removed if not posted to the folio.<br>You must have this scope: 'reservations.manage'.",
      "action": "Book the service for a specific reservation regardless of availability.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/book-service/$force",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Removes the city tax from a reservation.",
      "value": "BookingReservation-actionsByIdRemove-city-taxPut",
      "description": "Use this is you want to remove the city tax from a reservation before the stay.<br>You must have this scope: 'reservations.manage'.",
      "action": "Removes the city tax from a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/remove-city-tax",
      "resource": "reservationactions",
      "group": "booking-v1"
    },
    {
      "displayName": "Adds the city tax to a reservation.",
      "value": "BookingReservation-actionsByIdAdd-city-taxPut",
      "description": "Use this if you want to add the city tax to a reservation.<br>You must have this scope: 'reservations.manage'.",
      "action": "Adds the city tax to a reservation.",
      "method": "PUT",
      "path": "/booking/v1/reservation-actions/{id}/add-city-tax",
      "resource": "reservationactions",
      "group": "booking-v1"
    }
  ],
  "types": [
    {
      "displayName": "Returns a list of supported sources.",
      "value": "BookingTypesSourcesGet",
      "description": "Returns a list of channels that could be used as a source to create bookings.",
      "action": "Returns a list of supported sources.",
      "method": "GET",
      "path": "/booking/v1/types/sources",
      "resource": "types",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a list of values that a field of the specified type can take in the specified country.",
      "value": "BookingTypesByTypeAllowed-valuesGet",
      "description": "<br>You need to be authorized (no particular scope required)",
      "action": "Returns a list of values that a field of the specified type can take in the specified country.",
      "method": "GET",
      "path": "/booking/v1/types/{type}/allowed-values",
      "resource": "types",
      "group": "booking-v1"
    },
    {
      "displayName": "Returns a list of all currencies.",
      "value": "FinanceTypesCurrenciesGet",
      "description": "Returns a list of all currencies.",
      "action": "Returns a list of all currencies.",
      "method": "GET",
      "path": "/finance/v1/types/currencies",
      "resource": "types",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of all supported payment methods.",
      "value": "FinanceTypesPayment-methodsGet",
      "description": "Returns a list of all supported payment methods.",
      "action": "Returns a list of all supported payment methods.",
      "method": "GET",
      "path": "/finance/v1/types/payment-methods",
      "resource": "types",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of all supported service types.",
      "value": "FinanceTypesService-typesGet",
      "description": "Returns a list of all supported service types.",
      "action": "Returns a list of all supported service types.",
      "method": "GET",
      "path": "/finance/v1/types/service-types",
      "resource": "types",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of all VAT types.",
      "value": "FinanceTypesVatGet",
      "description": "Returns a list of all VAT types and percents for a country. Supported:\n\r\n- Albania (AL)\n\r\n- Austria (AT)\n\r\n- Azerbaijan (AZ)\n\r\n- Belgium (BE)\n\r\n- Bulgaria (BG)\n\r\n- Cape Verde (CV)\n\r\n- Croatia (HR)\n\r\n- Czech Republic (CZ)\n\r\n- Denmark (DK)\n\r\n- Finland (FI)\n\r\n- France (FR) - without the super-reduced 2.1% VAT\n\r\n- French Polynesia (PF)\n\r\n- Germany (DE)\n\r\n- Greece (GR)\n\r\n- Hungary (HU)\n\r\n- Indonesia (ID)\n\r\n- Ireland (IE)\n\r\n- Italy (IT)\n\r\n- Iceland (IS)\n\r\n- Japan (JP)\n\r\n- Liechtenstein (LI)\n\r\n- Madagascar (MG)\n\r\n- Malaysia (MY)\n\r\n- Malta (MT)\n\r\n- Mexico (MX)\n\r\n- Monaco (MC)\n\r\n- Morocco (MA)\n\r\n- Netherlands (NL)\n\r\n- New Zealand (NZ)\n\r\n- Norway (NO) - without the VAT for raw fish supplies\n\r\n- Portugal (PT)\n\r\n- Reunion (RE)\n\r\n- Saudi Arabia (SA)\n\r\n- Slovakia (SK)\n\r\n- Slovenia (SI)\n\r\n- South Africa (ZA)\n\r\n- Spain (ES)\n\r\n- Sweden (SE)\n\r\n- Switzerland (CH)\n\r\n- Taiwan (TW)\n\r\n- United Kingdom (GB)\n\r\n- United Arab Emirates (AE)",
      "action": "Returns a list of all VAT types.",
      "method": "GET",
      "path": "/finance/v1/types/vat",
      "resource": "types",
      "group": "finance-v1"
    }
  ],
  "folio": [
    {
      "displayName": "Returns a list of all folios.",
      "value": "FinanceFoliosGet",
      "description": "Allowed actions are only returned, when the list is filtered by reservation ID.<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Returns a list of all folios.",
      "method": "GET",
      "path": "/finance/v1/folios",
      "resource": "folio",
      "group": "finance-v1"
    },
    {
      "displayName": "Create additional folios for a reservation, or new external folios",
      "value": "FinanceFoliosPost",
      "description": "Use this call to create a new folio.<br>You must have at least one of these scopes: 'reservations.create, reservations.manage, folios.manage'.",
      "action": "Create additional folios for a reservation, or new external folios",
      "method": "POST",
      "path": "/finance/v1/folios",
      "resource": "folio",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns number of folios.",
      "value": "FinanceFolios$countGet",
      "description": "Returns number of folios matching the filter criteria.<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Returns number of folios.",
      "method": "GET",
      "path": "/finance/v1/folios/$count",
      "resource": "folio",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns one folio.",
      "value": "FinanceFoliosByIdGet",
      "description": "Get a folio by ID.<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Returns one folio.",
      "method": "GET",
      "path": "/finance/v1/folios/{id}",
      "resource": "folio",
      "group": "finance-v1"
    },
    {
      "displayName": "Allows to modify certain properties of a folio",
      "value": "FinanceFoliosByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace debitor (for guest folios only)\r\n- Add a company (not for house folios)\r\n- Replace/remove a company (not for house folios)<br>You must have this scope: 'folios.manage'.",
      "action": "Allows to modify certain properties of a folio",
      "method": "PATCH",
      "path": "/finance/v1/folios/{id}",
      "resource": "folio",
      "group": "finance-v1"
    },
    {
      "displayName": "Check if the folio exists.",
      "value": "FinanceFoliosByIdHead",
      "description": "Check if the folio exists.<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Check if the folio exists.",
      "method": "HEAD",
      "path": "/finance/v1/folios/{id}",
      "resource": "folio",
      "group": "finance-v1"
    }
  ],
  "folioactions": [
    {
      "displayName": "Adds and directly posts a charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.",
      "value": "FinanceFolio-actionsByFolioIdChargesPost",
      "description": "Adds a charge for any good or service, and directly posts it. Can be used to charge items that are not part of the reservation,\r\nbut should appear on the invoice.\r\n\n\r\nRequires 'allowed action': AddCharge.<br>You must have at least one of these scopes: 'charges.create, folios.manage'.",
      "action": "Adds and directly posts a charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/charges",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Adds and directly posts a transitory charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.",
      "value": "FinanceFolio-actionsByFolioIdTransitory-chargesPost",
      "description": "Adds a transitory item for any good or service, and directly posts it. To be used for sales that are not revenue of the property,\r\nbut should appear on te guest's invoice.\r\n\n\r\nRequires 'allowed action': AddCharge.<br>You must have at least one of these scopes: 'charges.create, folios.manage'.",
      "action": "Adds and directly posts a transitory charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/transitory-charges",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Adds and directly posts a cancellation fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the cancellation fee service type, the fee will be moved to the destination folio.",
      "value": "FinanceFolio-actionsByFolioIdCancellation-feePost",
      "description": "Adds a cancellation fee, and directly posts it. Cancellation fees can only be posted on guest folios.\r\n\n\r\nRequires 'allowed action': AddCancellationFee.<br>You must have at least one of these scopes: 'charges.create, folios.manage'.",
      "action": "Adds and directly posts a cancellation fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the cancellation fee service type, the fee will be moved to the destination folio.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/cancellation-fee",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Adds and directly posts a no-show fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the no-show fee service type, the fee will be moved to the destination folio.",
      "value": "FinanceFolio-actionsByFolioIdNo-show-feePost",
      "description": "Adds a no-show fee, and directly posts it. No-show fees can only be posted on guest folios.\r\n\n\r\nRequires 'allowed action': AddNoShowFee.<br>You must have at least one of these scopes: 'charges.create, folios.manage'.",
      "action": "Adds and directly posts a no-show fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the no-show fee service type, the fee will be moved to the destination folio.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/no-show-fee",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Closes a folio.",
      "value": "FinanceFolio-actionsByFolioIdClosePut",
      "description": "Mark a folio as closed to prevent adding charges and payments. This action cannot be undone,\r\nand is only possible if the balance is 0.\r\n\n\r\nRequires 'allowed action': Close.<br>You must have this scope: 'folios.manage'.",
      "action": "Closes a folio.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/close",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Reopens a folio.",
      "value": "FinanceFolio-actionsByFolioIdReopenPut",
      "description": "Reopens a closed folio.\r\nYou can only reopen a folio if no invoice has been created for the folio.\r\nOtherwise, use `invoice-actions/{invoiceId}/cancel` endpoint to cancel an invoice and reopen the folio.\r\n\n\r\nRequires 'allowed action': Reopen.<br>You must have this scope: 'folios.manage'.",
      "action": "Reopens a folio.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/reopen",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Move multiple charges, allowances and transitory charges from one folio to another.",
      "value": "FinanceFolio-actionsByFolioIdMove-chargesPut",
      "description": "If one of the folios is closed, this action cannot be performed.\n\n\r\nIf any of the specified charges does not exist, this action cannot be performed.\n\n\r\nMoving negative charges to a house folio is not supported. Create additional folios instead, and move the charges there.<br>You must have at least one of these scopes: 'charges.move, folios.manage'.",
      "action": "Move multiple charges, allowances and transitory charges from one folio to another.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/move-charges",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Move multiple charges from one folio to another. Multiple source folios and multiple target folios can be specified.",
      "value": "FinanceFolio-actionsBulk-movePut",
      "description": "If one of the folios is closed, this action cannot be performed.\n\n\r\nIf any of the specified charges does not exist, this action cannot be performed.\n\n\r\nMoving negative charges to a house folio is not supported. Create additional folios instead, and move the charges there.<br>You must have this scope: 'folios.manage'.",
      "action": "Move multiple charges from one folio to another. Multiple source folios and multiple target folios can be specified.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/bulk-move",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Move all charges and transitory charges from one folio to another.",
      "value": "FinanceFolio-actionsByFolioIdMove-all-chargesPut",
      "description": "If one of the folios is closed, this action cannot be performed.\n\n\r\nOnly charges that can be moved will be moved.\n\n<br>You must have at least one of these scopes: 'charges.move, folios.manage'.",
      "action": "Move all charges and transitory charges from one folio to another.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/move-all-charges",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Posts an allowance for a charge",
      "value": "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost",
      "description": "Allowance value posted must not exceed source charge minus allowances posted for this charge<br>You must have at least one of these scopes: 'allowances.post, folios.manage'.",
      "action": "Posts an allowance for a charge",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Posts an allowance for a folio",
      "value": "FinanceFolio-actionsByFolioIdAllowancesPost",
      "description": "Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have at least one of these scopes: 'allowances.post, folios.manage'.",
      "action": "Posts an allowance for a folio",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/allowances",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Posts allowances for a folio",
      "value": "FinanceFolio-actionsByFolioIdBulk-allowancesPost",
      "description": "Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have at least one of these scopes: 'allowances.post, folios.manage'.",
      "action": "Posts allowances for a folio",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/bulk-allowances",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Posts all unposted charges for the whole length of stay.",
      "value": "FinanceFolio-actionsByFolioIdPost-chargesPut",
      "description": "Use this call for cases when the folio should be closed early. For example, when a guest wants to get the invoice right after the check-in\r\nAs posting charges before the service is delivered is potentially risky, this operation will fail if there are any unposted charges\r\nfurther in the future than 7 days.\r\nPosting open charges is only possible for fully prepaid folios.\r\n\n\r\nRequires 'allowed action': PostOpenCharges.<br>You must have this scope: 'folios.manage'.",
      "action": "Posts all unposted charges for the whole length of stay.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/post-charges",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Move multiple payments from one guest/booking folio to another.",
      "value": "FinanceFolio-actionsByFolioIdMove-paymentsPut",
      "description": "Move payments from one guest/booking folio to another - moving between different bookings is not supported,\r\nand will lead to an error. If one of the folios is closed, this action cannot be performed.\n\r\nThe PSP reference, if present, will be removed when moving and only be persisted on the original payment.<br>You must have at least one of these scopes: 'charges.move, folios.manage'.",
      "action": "Move multiple payments from one guest/booking folio to another.",
      "method": "PUT",
      "path": "/finance/v1/folio-actions/{folioId}/move-payments",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Corrects a folio by moving some charges.\r\nThis operation creates a new folio with the charges from the request.\r\nThe payment, equal to the sum of charges, is also split to this new folio so that both folios will have 0 balance.",
      "value": "FinanceFolio-actionsByFolioIdCorrectPost",
      "description": "Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have this scope: 'folios.manage'.",
      "action": "Corrects a folio by moving some charges.\r\nThis operation creates a new folio with the charges from the request.\r\nThe payment, equal to the sum of charges, is also split to this new folio so that both folios will have 0 balance.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/correct",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Splits a charge into two using the percent or amount provided\r\nCreates an allowance and two new charges.",
      "value": "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost",
      "description": "<br>You must have at least one of these scopes: 'allowances.post, charges.create, folios.manage'.",
      "action": "Splits a charge into two using the percent or amount provided\r\nCreates an allowance and two new charges.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split",
      "resource": "folioactions",
      "group": "finance-v1"
    },
    {
      "displayName": "Splits a payment into two using the percent or amount provided\r\nCreates a refund and two new payments.",
      "value": "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost",
      "description": "<br>You must have at least one of these scopes: 'payments.create, refunds.create, folios.manage'.",
      "action": "Splits a payment into two using the percent or amount provided\r\nCreates a refund and two new payments.",
      "method": "POST",
      "path": "/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split",
      "resource": "folioactions",
      "group": "finance-v1"
    }
  ],
  "foliopayments": [
    {
      "displayName": "Get a list of payments.",
      "value": "FinanceFoliosByFolioIdPaymentsGet",
      "description": "Returns a list of all payments for this folio ordered by creation date, newest first<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Get a list of payments.",
      "method": "GET",
      "path": "/finance/v1/folios/{folioId}/payments",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Trigger a custom payment for the folio.",
      "value": "FinanceFoliosByFolioIdPaymentsPost",
      "description": "A custom payment will not involve any automatic processing. This is best to be used for cash, cheque or voucher payments or payments that have\r\nbeen processed by an external system and it should just be recorded in apaleo for accounting purposes.<br>You must have this scope: 'folios.manage'.",
      "action": "Trigger a custom payment for the folio.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Get a payment by ID.",
      "value": "FinanceFoliosByFolioIdPaymentsByPaymentIdGet",
      "description": "Get a payment by its ID<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Get a payment by ID.",
      "method": "GET",
      "path": "/finance/v1/folios/{folioId}/payments/{paymentId}",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Trigger a payment on a card terminal for the folio.",
      "value": "FinanceFoliosByFolioIdPaymentsBy-terminalPost",
      "description": "Trigger a terminal payment for the folio. The payment will be processed asynchronously. Use the location header to poll for the status of the payment.\r\nAs long as a payment is pending it reduces the amount of allowed payments for the folio. The payment times out after 60 minutes automatically<br>You must have this scope: 'folios.manage'.",
      "action": "Trigger a payment on a card terminal for the folio.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments/by-terminal",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Captures a specific amount from a pre-authorization and posts it to the folio.",
      "value": "FinanceFoliosByFolioIdPaymentsBy-authorizationPost",
      "description": "Captures a specific amount from a pre-authorization and posts it to the folio. For the pre-authorization please ensure to set the respective metadata in the original payment\r\ntransaction. The flow type has to be set to <i>CaptureOnly</i>. For more information please refer to the documentation of <a href=\"https://apaleo.dev/guides/business-cases/ibe/get-the-money\" target=\"_blank\">how to do a pre-authorization on a booking engine</a>.\r\nThe payment will be processed asynchronously. Use the location header to poll for the status of the payment. As long as a payment is pending it reduces the amount of allowed\r\npayments for the folio. The payment times out after 60 minutes automatically<br>You must have this scope: 'folios.manage'.",
      "action": "Captures a specific amount from a pre-authorization and posts it to the folio.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments/by-authorization",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Trigger a payment using the payment account stored on the reservation.",
      "value": "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost",
      "description": "Trigger a payment for the folio using the payment account stored on the reservation. The payment will be processed asynchronously. Use the location header to poll\r\nfor the status of the payment. As long as a payment is pending it reduces the amount of allowed payments for the folio. The payment times out after 60 minutes\r\nautomatically<br>You must have this scope: 'folios.manage'.",
      "action": "Trigger a payment using the payment account stored on the reservation.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments/by-payment-account",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Creates a link to a payment form where guests can pay.",
      "value": "FinanceFoliosByFolioIdPaymentsBy-linkPost",
      "description": "Creates a link to a payment form where guests can pay. To enable open invoice payment methods you need to provide at\r\nleast the paid charges with the request. For some open invoice payment methods you also need to ensure that the full\r\nbilling address of the folio is set, before you create the payment link. The payment will be processed asynchronously.\r\nUse the location header to poll for the status of the payment. As long as a payment is pending it reduces the amount\r\nof allowed payments for the folio.<br>You must have this scope: 'folios.manage'.",
      "action": "Creates a link to a payment form where guests can pay.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments/by-link",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Cancels a pending payment link.",
      "value": "FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut",
      "description": "Sets a pending payment with payment link to cancelled and triggers the cancellation.<br>You must have this scope: 'folios.manage'.",
      "action": "Cancels a pending payment link.",
      "method": "PUT",
      "path": "/finance/v1/folios/{folioId}/payments/{paymentId}/cancel",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Get a list of refunds.",
      "value": "FinanceFoliosByFolioIdRefundsGet",
      "description": "Returns a list of all refunds for this folio ordered by creation date, newest first<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Get a list of refunds.",
      "method": "GET",
      "path": "/finance/v1/folios/{folioId}/refunds",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Trigger a refund for the folio.",
      "value": "FinanceFoliosByFolioIdRefundsPost",
      "description": "Trigger a generic refund for the folio. The refund will be processed asynchronously. Use the location header to poll for the status of the refund.\r\nAs long as a refund is pending it reduces the amount of allowed refunds for the folio. The refund times out after 60 minutes automatically<br>You must have this scope: 'folios.manage'.",
      "action": "Trigger a refund for the folio.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/refunds",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Get a refund by ID.",
      "value": "FinanceFoliosByFolioIdRefundsByRefundIdGet",
      "description": "Get a refund by its ID<br>You must have at least one of these scopes: 'folios.read, folios.manage'.",
      "action": "Get a refund by ID.",
      "method": "GET",
      "path": "/finance/v1/folios/{folioId}/refunds/{refundId}",
      "resource": "foliopayments",
      "group": "finance-v1"
    },
    {
      "displayName": "Trigger a refund for a specific payment.",
      "value": "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost",
      "description": "Trigger a refund for a specific payment on this folio. The refund will be processed asynchronously. Use the location header to poll for\r\nthe status of the refund. As long as a refund is pending the allowed refund amount for this payment will be reduced by the amount. The refund\r\ntimes out after 10 minutes automatically<br>You must have this scope: 'folios.manage'.",
      "action": "Trigger a refund for a specific payment.",
      "method": "POST",
      "path": "/finance/v1/folios/{folioId}/payments/{paymentId}/refunds",
      "resource": "foliopayments",
      "group": "finance-v1"
    }
  ],
  "invoice": [
    {
      "displayName": "Gets a preview invoice PDF for one specific folio.",
      "value": "FinanceInvoicesPreview-pdfGet",
      "description": "Gets a preview invoice PDF for one specific folio.<br>You must have this scope: 'invoices.read'.",
      "action": "Gets a preview invoice PDF for one specific folio.",
      "method": "GET",
      "path": "/finance/v1/invoices/preview-pdf",
      "resource": "invoice",
      "group": "finance-v1"
    },
    {
      "displayName": "Gets an invoice preview for one specific folio.",
      "value": "FinanceInvoicesPreviewGet",
      "description": "To see if the invoice creation would be successful, check the warnings.<br>You must have this scope: 'invoices.read'.",
      "action": "Gets an invoice preview for one specific folio.",
      "method": "GET",
      "path": "/finance/v1/invoices/preview",
      "resource": "invoice",
      "group": "finance-v1"
    },
    {
      "displayName": "Gets the list of all invoices (the metadata only, not the files).",
      "value": "FinanceInvoicesGet",
      "description": "Gets the list of all invoices (the metadata only, not the files).<br>You must have this scope: 'invoices.read'.",
      "action": "Gets the list of all invoices (the metadata only, not the files).",
      "method": "GET",
      "path": "/finance/v1/invoices",
      "resource": "invoice",
      "group": "finance-v1"
    },
    {
      "displayName": "Creates an invoice for one specific folio.",
      "value": "FinanceInvoicesPost",
      "description": "Creates an invoice for one specific folio. The invoice can only be created once.\r\nThe debitor needs to have name, city, postal code and country code, as these are required for invoices.\r\nIf the folio is not fully paid, this will check out the reservation on AR and create an invoice with outstanding payments.<br>You must have at least one of these scopes: 'invoices.create, invoices.manage'.",
      "action": "Creates an invoice for one specific folio.",
      "method": "POST",
      "path": "/finance/v1/invoices",
      "resource": "invoice",
      "group": "finance-v1"
    },
    {
      "displayName": "Gets an invoice PDF file.",
      "value": "FinanceInvoicesByIdPdfGet",
      "description": "Gets an invoice PDF file by its ID. Only works for invoices that have already been created using POST /invoices.<br>You must have this scope: 'invoices.read'.",
      "action": "Gets an invoice PDF file.",
      "method": "GET",
      "path": "/finance/v1/invoices/{id}/pdf",
      "resource": "invoice",
      "group": "finance-v1"
    },
    {
      "displayName": "Gets invoice data.",
      "value": "FinanceInvoicesByIdGet",
      "description": "Gets invoice data by its ID. Only works for invoices that have already been created using POST /invoices.<br>You must have this scope: 'invoices.read'.",
      "action": "Gets invoice data.",
      "method": "GET",
      "path": "/finance/v1/invoices/{id}",
      "resource": "invoice",
      "group": "finance-v1"
    }
  ],
  "invoiceaction": [
    {
      "displayName": "Marks an invoice as paid.",
      "value": "FinanceInvoice-actionsByIdPayPut",
      "description": "Settles the invoice, if the invoice has an amount to be paid (total != 0).<br>You must have this scope: 'invoices.manage'.",
      "action": "Marks an invoice as paid.",
      "method": "PUT",
      "path": "/finance/v1/invoice-actions/{id}/pay",
      "resource": "invoiceaction",
      "group": "finance-v1"
    },
    {
      "displayName": "Cancels an invoice",
      "value": "FinanceInvoice-actionsByIdCancelPut",
      "description": "For regular invoices and AR invoices that haven't been paid yet, creates a new cancellation invoice and opens the folio again.\r\nFor advance invoices, creates a new cancellation invoice.<br>You must have this scope: 'invoices.manage'.",
      "action": "Cancels an invoice",
      "method": "PUT",
      "path": "/finance/v1/invoice-actions/{id}/cancel",
      "resource": "invoiceaction",
      "group": "finance-v1"
    }
  ],
  "subledger": [
    {
      "displayName": "Aggregates transactions pairs by date (business day) for all accounts and a given period.",
      "value": "FinanceAccountsAggregate-pairs-dailyPost",
      "description": "Returns total amount credited from one account to another<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Aggregates transactions pairs by date (business day) for all accounts and a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/aggregate-pairs-daily",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Aggregates transactions by date (business day) for all accounts and a given period.",
      "value": "FinanceAccountsAggregate-dailyPost",
      "description": "Returns credited and debited amounts aggregated by transactions' date (business day) for all accounts and a given period.\r\nStores an entry in the export audit log.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Aggregates transactions by date (business day) for all accounts and a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/aggregate-daily",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Aggregates transactions by timestamp for all accounts and a given period.",
      "value": "FinanceAccountsAggregatePost",
      "description": "Returns credited and debited amounts aggregated by transactions' timestamp for all accounts and a given period.\r\nStores an entry in the export audit log.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Aggregates transactions by timestamp for all accounts and a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/aggregate",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns transactions filtered by timestamp for a property for a given period.",
      "value": "FinanceAccountsExportPost",
      "description": "Returns the raw transaction data for a given property and time period.\r\nStores an entry in the export audit log.<br>You must have at least one of these scopes: 'transactions.export, accounting.read'.",
      "action": "Returns transactions filtered by timestamp for a property for a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/export",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns transactions filtered by date (business day) for a property for a given period.",
      "value": "FinanceAccountsExport-dailyPost",
      "description": "Returns the raw transaction data for a given property and time period.\r\nStores an entry in the export audit log.<br>You must have at least one of these scopes: 'transactions.export, accounting.read'.",
      "action": "Returns transactions filtered by date (business day) for a property for a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/export-daily",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns gross transactions filtered by date (business day) for a property for a given period.",
      "value": "FinanceAccountsExport-gross-dailyPost",
      "description": "Returns the raw transaction data for a given property and time period.\r\nStores an entry in the export audit log.<br>You must have at least one of these scopes: 'transactions.export, accounting.read'.",
      "action": "Returns gross transactions filtered by date (business day) for a property for a given period.",
      "method": "POST",
      "path": "/finance/v1/accounts/export-gross-daily",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns the chart of accounts of the subledger.",
      "value": "FinanceAccountsSchemaGet",
      "description": "Returns the schema of subledger, split into global and guest ledger.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns the chart of accounts of the subledger.",
      "method": "GET",
      "path": "/finance/v1/accounts/schema",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of global accounts.",
      "value": "FinanceGlobal-accountsGet",
      "description": "Returns a list of accounts in one property, having the same global account as parent.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns a list of global accounts.",
      "method": "GET",
      "path": "/finance/v1/global-accounts",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of guest accounts.",
      "value": "FinanceGuest-accountsGet",
      "description": "Returns a list of accounts in one property for a reservation.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns a list of guest accounts.",
      "method": "GET",
      "path": "/finance/v1/guest-accounts",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of external accounts.",
      "value": "FinanceExternal-accountsGet",
      "description": "Returns a list of accounts in one property for a folio.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns a list of external accounts.",
      "method": "GET",
      "path": "/finance/v1/external-accounts",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns one account.",
      "value": "FinanceAccountsByNumberGet",
      "description": "Returns one account, as specified by its number and the property.<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns one account.",
      "method": "GET",
      "path": "/finance/v1/accounts/{number}",
      "resource": "subledger",
      "group": "finance-v1"
    },
    {
      "displayName": "Returns a list of child accounts for a specified parent account.",
      "value": "FinanceAccountsChild-accountsGet",
      "description": "<br>You must have at least one of these scopes: 'subledger.read, accounting.read'.",
      "action": "Returns a list of child accounts for a specified parent account.",
      "method": "GET",
      "path": "/finance/v1/accounts/child-accounts",
      "resource": "subledger",
      "group": "finance-v1"
    }
  ],
  "property": [
    {
      "displayName": "Get a properties list",
      "value": "InventoryPropertiesGet",
      "description": "Get the list of properties.<br>You need to be authorized (no particular scope required)",
      "action": "Get a properties list",
      "method": "GET",
      "path": "/inventory/v1/properties",
      "resource": "property",
      "group": "inventory-v1"
    },
    {
      "displayName": "Creates a property",
      "value": "InventoryPropertiesPost",
      "description": "Use this call to create a new property.<br>You must have at least one of these scopes: 'properties.create, setup.manage'.",
      "action": "Creates a property",
      "method": "POST",
      "path": "/inventory/v1/properties",
      "resource": "property",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get a property",
      "value": "InventoryPropertiesByIdGet",
      "description": "Get a property by id.<br>You need to be authorized (no particular scope required)",
      "action": "Get a property",
      "method": "GET",
      "path": "/inventory/v1/properties/{id}",
      "resource": "property",
      "group": "inventory-v1"
    },
    {
      "displayName": "Allows to modify property",
      "value": "InventoryPropertiesByIdPatch",
      "description": "Here's a list of allowed operations:\r\n- Replace Name\r\n- Add, replace and remove Description\r\n- Replace CompanyName\r\n- Add, replace and remove ManagingDirectors\r\n- Replace CommercialRegisterEntry\r\n- Replace TaxId\r\n- Replace Location\r\n- Add, replace and remove BankAccount\r\n- Replace PaymentTerms\r\n- Set IsTemplate<br>You must have at least one of these scopes: 'properties.manage, setup.manage'.",
      "action": "Allows to modify property",
      "method": "PATCH",
      "path": "/inventory/v1/properties/{id}",
      "resource": "property",
      "group": "inventory-v1"
    }
  ],
  "unit": [
    {
      "displayName": "Allows to patch unit",
      "value": "InventoryUnitsByIdPatch",
      "description": "Here's a list of allowed operations:\r\n- Set unit condition\r\n- Set unit description\r\n- Set unit name\r\n- Set unit unitGroupId\r\n- Set unit maxPersons\r\n- Add unit attribute\r\n- Remove unit attribute<br>You must have at least one of these scopes: 'units.manage, setup.manage'.",
      "action": "Allows to patch unit",
      "method": "PATCH",
      "path": "/inventory/v1/units/{id}",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get a unit",
      "value": "InventoryUnitsByIdGet",
      "description": "Get a unit by id.<br>You must have at least one of these scopes: 'units.read, setup.read, setup.manage'.",
      "action": "Get a unit",
      "method": "GET",
      "path": "/inventory/v1/units/{id}",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Check if a unit exists",
      "value": "InventoryUnitsByIdHead",
      "description": "Check if a unit exists by id.<br>You must have at least one of these scopes: 'units.read, setup.read, setup.manage'.",
      "action": "Check if a unit exists",
      "method": "HEAD",
      "path": "/inventory/v1/units/{id}",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Delete a unit",
      "value": "InventoryUnitsByIdDelete",
      "description": "Use this call to delete a unit.<br>You must have at least one of these scopes: 'units.delete, setup.manage'.",
      "action": "Delete a unit",
      "method": "DELETE",
      "path": "/inventory/v1/units/{id}",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Allows to patch one or more units",
      "value": "InventoryUnitsPatch",
      "description": "Here's a list of allowed operations:\r\n- Set unit condition\r\n- Set unit description\r\n- Set unit name\r\n- Set unit unitGroupId\r\n- Set unit maxPersons\r\n- Add unit attribute\r\n- Remove unit attribute<br>You must have at least one of these scopes: 'units.manage, setup.manage'.",
      "action": "Allows to patch one or more units",
      "method": "PATCH",
      "path": "/inventory/v1/units",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get a units list",
      "value": "InventoryUnitsGet",
      "description": "Get the list of units.<br>You must have at least one of these scopes: 'units.read, setup.read, setup.manage'.",
      "action": "Get a units list",
      "method": "GET",
      "path": "/inventory/v1/units",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Create a unit",
      "value": "InventoryUnitsPost",
      "description": "Use this call to create a new unit.<br>You must have at least one of these scopes: 'units.create, setup.manage'.",
      "action": "Create a unit",
      "method": "POST",
      "path": "/inventory/v1/units",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Returns number of units",
      "value": "InventoryUnits$countGet",
      "description": "Returns number of units matching the filter criteria<br>You must have at least one of these scopes: 'units.read, setup.read, setup.manage'.",
      "action": "Returns number of units",
      "method": "GET",
      "path": "/inventory/v1/units/$count",
      "resource": "unit",
      "group": "inventory-v1"
    },
    {
      "displayName": "Create multiple units",
      "value": "InventoryUnitsBulkPost",
      "description": "Use this call to create multiple units, following a naming rule.<br>You must have at least one of these scopes: 'units.create, setup.manage'.",
      "action": "Create multiple units",
      "method": "POST",
      "path": "/inventory/v1/units/bulk",
      "resource": "unit",
      "group": "inventory-v1"
    }
  ],
  "unitattribute": [
    {
      "displayName": "Get unit attribute by id",
      "value": "InventoryUnit-attributesByIdGet",
      "description": "Get unit attribute by id<br>You must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.",
      "action": "Get unit attribute by id",
      "method": "GET",
      "path": "/inventory/v1/unit-attributes/{id}",
      "resource": "unitattribute",
      "group": "inventory-v1"
    },
    {
      "displayName": "Allows to modify unit attribute",
      "value": "InventoryUnit-attributesByIdPatch",
      "description": "Here's a list of allowed operations:\r\n- Replace / Remove Description<br>You must have at least one of these scopes: 'unitattributes.manage, setup.manage'.",
      "action": "Allows to modify unit attribute",
      "method": "PATCH",
      "path": "/inventory/v1/unit-attributes/{id}",
      "resource": "unitattribute",
      "group": "inventory-v1"
    },
    {
      "displayName": "Check if a unit attribute exists",
      "value": "InventoryUnit-attributesByIdHead",
      "description": "Check if a unit attribute exists<br>You must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.",
      "action": "Check if a unit attribute exists",
      "method": "HEAD",
      "path": "/inventory/v1/unit-attributes/{id}",
      "resource": "unitattribute",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get unit attribute list",
      "value": "InventoryUnit-attributesGet",
      "description": "Get unit attribute list<br>You must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.",
      "action": "Get unit attribute list",
      "method": "GET",
      "path": "/inventory/v1/unit-attributes",
      "resource": "unitattribute",
      "group": "inventory-v1"
    },
    {
      "displayName": "Create a unit attribute",
      "value": "InventoryUnit-attributesPost",
      "description": "Use this call to create a new unit attribute.<br>You must have at least one of these scopes: 'unitattributes.create, setup.manage'.",
      "action": "Create a unit attribute",
      "method": "POST",
      "path": "/inventory/v1/unit-attributes",
      "resource": "unitattribute",
      "group": "inventory-v1"
    }
  ],
  "unitgroup": [
    {
      "displayName": "Create a unit group",
      "value": "InventoryUnit-groupsPost",
      "description": "Use this call to create a new unit group.<br>You must have at least one of these scopes: 'unitgroups.create, setup.manage'.",
      "action": "Create a unit group",
      "method": "POST",
      "path": "/inventory/v1/unit-groups",
      "resource": "unitgroup",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get all unit groups, or all unit groups for a property",
      "value": "InventoryUnit-groupsGet",
      "description": "Get the list of unit groups.<br>You must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.",
      "action": "Get all unit groups, or all unit groups for a property",
      "method": "GET",
      "path": "/inventory/v1/unit-groups",
      "resource": "unitgroup",
      "group": "inventory-v1"
    },
    {
      "displayName": "Returns number of unit groups",
      "value": "InventoryUnit-groups$countGet",
      "description": "Returns number of unit groups matching the filter criteria<br>You must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.",
      "action": "Returns number of unit groups",
      "method": "GET",
      "path": "/inventory/v1/unit-groups/$count",
      "resource": "unitgroup",
      "group": "inventory-v1"
    },
    {
      "displayName": "Check if a unit group exists",
      "value": "InventoryUnit-groupsByIdHead",
      "description": "Check if a unit group exists by id.<br>You must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.",
      "action": "Check if a unit group exists",
      "method": "HEAD",
      "path": "/inventory/v1/unit-groups/{id}",
      "resource": "unitgroup",
      "group": "inventory-v1"
    },
    {
      "displayName": "Get a unit group",
      "value": "InventoryUnit-groupsByIdGet",
      "description": "Get a unit group by id.<br>You must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.",
      "action": "Get a unit group",
      "method": "GET",
      "path": "/inventory/v1/unit-groups/{id}",
      "resource": "unitgroup",
      "group": "inventory-v1"
    },
    {
      "displayName": "Replace a unit group",
      "value": "InventoryUnit-groupsByIdPut",
      "description": "Use this call to modify a unit group.<br>You must have at least one of these scopes: 'unitgroups.manage, setup.manage'.",
      "action": "Replace a unit group",
      "method": "PUT",
      "path": "/inventory/v1/unit-groups/{id}",
      "resource": "unitgroup",
      "group": "inventory-v1"
    }
  ],
  "bookinglogs": [
    {
      "displayName": "Returns reservation change log entries sorted by the timestamp",
      "value": "LogsBookingReservationGet",
      "description": "<br>You must have this scope: 'logs.read'.",
      "action": "Returns reservation change log entries sorted by the timestamp",
      "method": "GET",
      "path": "/logs/v1/booking/reservation",
      "resource": "bookinglogs",
      "group": "logs-v1"
    }
  ],
  "financelogs": [
    {
      "displayName": "Returns folio change log entries sorted by the timestamp.",
      "value": "LogsFinanceFolioGet",
      "description": "<br>You must have this scope: 'logs.read'.",
      "action": "Returns folio change log entries sorted by the timestamp.",
      "method": "GET",
      "path": "/logs/v1/finance/folio",
      "resource": "financelogs",
      "group": "logs-v1"
    },
    {
      "displayName": "Returns the night audit logs.",
      "value": "LogsFinanceNight-auditGet",
      "description": "Returns a log of all night audits\r\nNewest log entries are returned first.<br>You must have this scope: 'logs.read'.",
      "action": "Returns the night audit logs.",
      "method": "GET",
      "path": "/logs/v1/finance/night-audit",
      "resource": "financelogs",
      "group": "logs-v1"
    },
    {
      "displayName": "Returns the audit log for all accounting exports that have been done.",
      "value": "LogsFinanceTransactions-exportGet",
      "description": "Returns the audit log for all exports if accounting data that have been done.<br>You must have this scope: 'logs.read'.",
      "action": "Returns the audit log for all accounting exports that have been done.",
      "method": "GET",
      "path": "/logs/v1/finance/transactions-export",
      "resource": "financelogs",
      "group": "logs-v1"
    }
  ],
  "maintenance": [
    {
      "displayName": "Get list of maintenances",
      "value": "OperationsMaintenancesGet",
      "description": "Get a list of maintenances matching your filter.<br>You must have at least one of these scopes: 'maintenances.read, maintenances.manage'.",
      "action": "Get list of maintenances",
      "method": "GET",
      "path": "/operations/v1/maintenances",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Create a new maintenance window",
      "value": "OperationsMaintenancesPost",
      "description": "Use this call to create a new maintenance window for the given unit. You can only create maintenances for today and days in the future.<br>You must have at least one of these scopes: 'maintenances.create, maintenances.manage'.",
      "action": "Create a new maintenance window",
      "method": "POST",
      "path": "/operations/v1/maintenances",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Returns number of maintenances",
      "value": "OperationsMaintenances$countGet",
      "description": "Returns the number of maintenances matching your filter.<br>You must have at least one of these scopes: 'maintenances.read, maintenances.manage'.",
      "action": "Returns number of maintenances",
      "method": "GET",
      "path": "/operations/v1/maintenances/$count",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Create multiple maintenances",
      "value": "OperationsMaintenancesBulkPost",
      "description": "Use this call to create multiple maintenances.<br>You must have at least one of these scopes: 'maintenances.create, setup.manage'.",
      "action": "Create multiple maintenances",
      "method": "POST",
      "path": "/operations/v1/maintenances/bulk",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Modify a maintenance",
      "value": "OperationsMaintenancesByIdPatch",
      "description": "You can only change maintenances which are in the future or still ongoing today.\r\nHere is the list of operations that are currently allowed:\r\n- Add, replace and remove Description\r\n- Replace From and To. 'From' cannot be changed, if the maintenance started yesterday or before.<br>You must have this scope: 'maintenances.manage'.",
      "action": "Modify a maintenance",
      "method": "PATCH",
      "path": "/operations/v1/maintenances/{id}",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Delete a maintenance",
      "value": "OperationsMaintenancesByIdDelete",
      "description": "Use this call to delete a maintenance. It is not possible to delete maintenances that started yesterday or earlier.<br>You must have at least one of these scopes: 'maintenances.delete, maintenances.manage'.",
      "action": "Delete a maintenance",
      "method": "DELETE",
      "path": "/operations/v1/maintenances/{id}",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Get a specific maintenance",
      "value": "OperationsMaintenancesByIdGet",
      "description": "Get a specific maintenance by ID.<br>You must have at least one of these scopes: 'maintenances.read, maintenances.manage'.",
      "action": "Get a specific maintenance",
      "method": "GET",
      "path": "/operations/v1/maintenances/{id}",
      "resource": "maintenance",
      "group": "operations-v1"
    },
    {
      "displayName": "Check if a maintenance exists",
      "value": "OperationsMaintenancesByIdHead",
      "description": "Check if a maintenance exists by ID.<br>You must have at least one of these scopes: 'maintenances.read, maintenances.manage'.",
      "action": "Check if a maintenance exists",
      "method": "HEAD",
      "path": "/operations/v1/maintenances/{id}",
      "resource": "maintenance",
      "group": "operations-v1"
    }
  ],
  "operations": [
    {
      "displayName": "Performs the night audit for one property.",
      "value": "OperationsNight-auditPut",
      "description": "The night audit will post all charges for services that were delivered on the past business day in the folio and set all occupied rooms to 'Dirty'<br>You must have at least one of these scopes: 'operations.manage, operations.trigger-night-audit'.",
      "action": "Performs the night audit for one property.",
      "method": "PUT",
      "path": "/operations/v1/night-audit",
      "resource": "operations",
      "group": "operations-v1"
    },
    {
      "displayName": "Change the condition of a unit",
      "value": "OperationsUnits-conditionPut",
      "description": "<br>You must have this scope: 'operations.change-room-state'.",
      "action": "Change the condition of a unit",
      "method": "PUT",
      "path": "/operations/v1/units-condition",
      "resource": "operations",
      "group": "operations-v1"
    }
  ],
  "agecategory": [
    {
      "displayName": "Get an age category",
      "value": "SettingsAge-categoriesByIdGet",
      "description": "Get an age category by id.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get an age category",
      "method": "GET",
      "path": "/settings/v1/age-categories/{id}",
      "resource": "agecategory",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Allows to modify properties of an age category",
      "value": "SettingsAge-categoriesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name, minimum age and maximum age\n\n<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify properties of an age category",
      "method": "PATCH",
      "path": "/settings/v1/age-categories/{id}",
      "resource": "agecategory",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Create an age category",
      "value": "SettingsAge-categoriesPost",
      "description": "Use this call to create a new age category. The age ranges for categories must not overlap each other and the\r\nallowed values span from 0 to 17.\n<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Create an age category",
      "method": "POST",
      "path": "/settings/v1/age-categories",
      "resource": "agecategory",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get an age category list",
      "value": "SettingsAge-categoriesGet",
      "description": "Get the list of age categories.\n<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get an age category list",
      "method": "GET",
      "path": "/settings/v1/age-categories",
      "resource": "agecategory",
      "group": "rateplan-v1"
    }
  ],
  "cancellationpolicy": [
    {
      "displayName": "Create a cancellation policy.",
      "value": "RateplanCancellation-policiesPost",
      "description": "Create a cancellation policy.<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Create a cancellation policy.",
      "method": "POST",
      "path": "/rateplan/v1/cancellation-policies",
      "resource": "cancellationpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get all cancellation policies.",
      "value": "RateplanCancellation-policiesGet",
      "description": "Get the list of cancellation policies.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get all cancellation policies.",
      "method": "GET",
      "path": "/rateplan/v1/cancellation-policies",
      "resource": "cancellationpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a specific cancellation policy.",
      "value": "RateplanCancellation-policiesByIdGet",
      "description": "Get a specific cancellation policy.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get a specific cancellation policy.",
      "method": "GET",
      "path": "/rateplan/v1/cancellation-policies/{id}",
      "resource": "cancellationpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Allows to modify properties of a cancellation policy",
      "value": "RateplanCancellation-policiesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name and description\r\n- Replace the period from reference\r\n- Replace the reference\r\n- Replace the fee details: fixed and percent values<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify properties of a cancellation policy",
      "method": "PATCH",
      "path": "/rateplan/v1/cancellation-policies/{id}",
      "resource": "cancellationpolicy",
      "group": "rateplan-v1"
    }
  ],
  "company": [
    {
      "displayName": "Create a company",
      "value": "RateplanCompaniesPost",
      "description": "Use this call to create a new company.<br>You must have at least one of these scopes: 'companies.create, companies.manage'.",
      "action": "Create a company",
      "method": "POST",
      "path": "/rateplan/v1/companies",
      "resource": "company",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a list of companies",
      "value": "RateplanCompaniesGet",
      "description": "Get the list of companies.\n<br>You must have at least one of these scopes: 'companies.read, companies.manage'.",
      "action": "Get a list of companies",
      "method": "GET",
      "path": "/rateplan/v1/companies",
      "resource": "company",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a company",
      "value": "RateplanCompaniesByIdGet",
      "description": "Get a company by ID.<br>You must have at least one of these scopes: 'companies.read, companies.manage'.",
      "action": "Get a company",
      "method": "GET",
      "path": "/rateplan/v1/companies/{id}",
      "resource": "company",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Modify a company",
      "value": "RateplanCompaniesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name, invoicingEmail, phone, taxId, additionalTaxId, additionalTaxId2, address, canCheckOutOnAr\r\n- Add, replace and remove rate plans<br>You must have this scope: 'companies.manage'.",
      "action": "Modify a company",
      "method": "PATCH",
      "path": "/rateplan/v1/companies/{id}",
      "resource": "company",
      "group": "rateplan-v1"
    }
  ],
  "corporatecodes": [
    {
      "displayName": "Returns a list of corporate codes.",
      "value": "RateplanCorporate-codesCodesGet",
      "description": "Returns all existing corporate codes that match given criteria.<br>You must have this scope: 'rateplans.read-corporate'.",
      "action": "Returns a list of corporate codes.",
      "method": "GET",
      "path": "/rateplan/v1/corporate-codes/codes",
      "resource": "corporatecodes",
      "group": "rateplan-v1"
    }
  ],
  "noshowpolicy": [
    {
      "displayName": "Create a no-show policy.",
      "value": "RateplanNo-show-policiesPost",
      "description": "Create a no-show policy.<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Create a no-show policy.",
      "method": "POST",
      "path": "/rateplan/v1/no-show-policies",
      "resource": "noshowpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get all no-show policies.",
      "value": "RateplanNo-show-policiesGet",
      "description": "Get the list of no-show policies.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get all no-show policies.",
      "method": "GET",
      "path": "/rateplan/v1/no-show-policies",
      "resource": "noshowpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a specific no-show policy.",
      "value": "RateplanNo-show-policiesByIdGet",
      "description": "Get a specific no-show policy.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get a specific no-show policy.",
      "method": "GET",
      "path": "/rateplan/v1/no-show-policies/{id}",
      "resource": "noshowpolicy",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Allows to modify properties of a no-show policy",
      "value": "RateplanNo-show-policiesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name and description\r\n- Replace the fee details: fixed and percent values<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify properties of a no-show policy",
      "method": "PATCH",
      "path": "/rateplan/v1/no-show-policies/{id}",
      "resource": "noshowpolicy",
      "group": "rateplan-v1"
    }
  ],
  "promocodes": [
    {
      "displayName": "Returns a list of promo codes.",
      "value": "RateplanPromo-codesCodesGet",
      "description": "Returns all existing promo codes that match given criteria.<br>You must have this scope: 'rateplans.read-corporate'.",
      "action": "Returns a list of promo codes.",
      "method": "GET",
      "path": "/rateplan/v1/promo-codes/codes",
      "resource": "promocodes",
      "group": "rateplan-v1"
    }
  ],
  "rate": [
    {
      "displayName": "Returns a list of rates.",
      "value": "RateplanRate-plansByIdRatesGet",
      "description": "Returns all rates for a specific rate plan within the specified time range. If a rate has not\r\nbeen initialized, it will still be returned, but anything besides the from and to values will be empty.\r\nThe time range of a rate is defined by the time slice definition of the rate plan.\n\r\nTime ranges with no initialized rates will not be available for sell.\n\n\r\nTo be able to read rates for a corporate rate plan a client must additionally have\r\nthe 'rateplans.read-corporate' scope.<br>You must have at least one of these scopes: 'rates.read, rates.manage'.",
      "action": "Returns a list of rates.",
      "method": "GET",
      "path": "/rateplan/v1/rate-plans/{id}/rates",
      "resource": "rate",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Initializes and changes the rates for the rate plan.",
      "value": "RateplanRate-plansByIdRatesPut",
      "description": "All rates specified in the request will be initialized, or overwritten if they already exist.\r\n\n\n\r\nMake sure that the from and to date and time in the rates match the time slice definition of the rate plan.\r\nThe easiest way to achieve this is calling the GET /rate-plans/{id}/rates for the time range you want to update\r\nand then resend the payload with the set prices and restrictions.<br>You must have this scope: 'rates.manage'.",
      "action": "Initializes and changes the rates for the rate plan.",
      "method": "PUT",
      "path": "/rateplan/v1/rate-plans/{id}/rates",
      "resource": "rate",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Allows to patch the rates of multiple rate plans.",
      "value": "RateplanRatesPatch",
      "description": "Note that the specified PATCH operations are applied to each and every rate for the specified time range.\r\nHere is the list of operations that are currently allowed:\r\n- Add, replace and remove Price\r\n- Add, replace and remove Restrictions<br>You must have this scope: 'rates.manage'.",
      "action": "Allows to patch the rates of multiple rate plans.",
      "method": "PATCH",
      "path": "/rateplan/v1/rates",
      "resource": "rate",
      "group": "rateplan-v1"
    }
  ],
  "rateplan": [
    {
      "displayName": "Get a rate plan list",
      "value": "RateplanRate-plansGet",
      "description": "Get the list of rate plans depending on client scopes.\n\n\r\n            \r\nIf a client has no additional scopes, only public rate plans are returned.\n\r\nThe 'rateplans.read-corporate' scope adds corporate rate plans to the response.<br>You must have at least one of these scopes: 'rateplans.read, setup.read, setup.manage'.",
      "action": "Get a rate plan list",
      "method": "GET",
      "path": "/rateplan/v1/rate-plans",
      "resource": "rateplan",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Create a rate plan",
      "value": "RateplanRate-plansPost",
      "description": "Use this call to create a new rate plan. The rate plan will already contain empty rates, fill them later using PUT rates.<br>You must have at least one of these scopes: 'rateplans.create, setup.manage'.",
      "action": "Create a rate plan",
      "method": "POST",
      "path": "/rateplan/v1/rate-plans",
      "resource": "rateplan",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Allows to patch one or more rate plans",
      "value": "RateplanRate-plansPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace Name\r\n- Replace Description\r\n- Replace MinGuaranteeType\r\n- Replace PriceCalculationMode\r\n- Replace CancellationPolicy\r\n- Replace NoShowPolicy\r\n- Replace ChannelCodes\r\n- Replace Companies\r\n- Add, replace and remove PromoCode\r\n- Add, replace and remove Restrictions\r\n- Add, replace and remove BookingPeriods\r\n- Add, replace and remove IsSubjectToCityTax\r\n- Add, replace and remove PricingRule\r\n- Add, replace and remove Surcharges\r\n- Add, replace and remove AgeCategories\r\n- Add, replace and remove IncludedServices\r\n- Add/Replace/Remove/Update AccountingConfigs\r\n- Add, replace and remove MarketSegment/Id<br>You must have at least one of these scopes: 'rateplans.manage, setup.manage'.",
      "action": "Allows to patch one or more rate plans",
      "method": "PATCH",
      "path": "/rateplan/v1/rate-plans",
      "resource": "rateplan",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a rate plan",
      "value": "RateplanRate-plansByIdGet",
      "description": "Get a rate plan by id.\n\n\r\n            \r\nTo be able to read a corporate rate plan a client must additionaly have\r\n'rateplans.read-corporate' scope assigned.<br>You must have at least one of these scopes: 'rateplans.read, setup.read, setup.manage'.",
      "action": "Get a rate plan",
      "method": "GET",
      "path": "/rateplan/v1/rate-plans/{id}",
      "resource": "rateplan",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Replace a rate plan",
      "value": "RateplanRate-plansByIdPut",
      "description": "Use this call to modify a rate plan.<br>You must have at least one of these scopes: 'rateplans.manage, setup.manage'.",
      "action": "Replace a rate plan",
      "method": "PUT",
      "path": "/rateplan/v1/rate-plans/{id}",
      "resource": "rateplan",
      "group": "rateplan-v1"
    }
  ],
  "service": [
    {
      "displayName": "Create a service.",
      "value": "RateplanServicesPost",
      "description": "Create a service.<br>You must have at least one of these scopes: 'services.create, setup.manage'.",
      "action": "Create a service.",
      "method": "POST",
      "path": "/rateplan/v1/services",
      "resource": "service",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get all services.",
      "value": "RateplanServicesGet",
      "description": "Get the list of services.<br>You must have at least one of these scopes: 'services.read, setup.read, setup.manage'.",
      "action": "Get all services.",
      "method": "GET",
      "path": "/rateplan/v1/services",
      "resource": "service",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Modify a service.",
      "value": "RateplanServicesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace Name\r\n- Replace Description\r\n- Replace DefaultGrossPrice\r\n- Replace PricingUnit\r\n- Replace PostNextDay\r\n- Replace Availability\r\n- Add/Replace/Remove/Update AccountingConfigs\r\n- Replace ChannelCodes\r\n- Replace AgeCategoryId<br>You must have at least one of these scopes: 'services.manage, setup.manage'.",
      "action": "Modify a service.",
      "method": "PATCH",
      "path": "/rateplan/v1/services/{id}",
      "resource": "service",
      "group": "rateplan-v1"
    },
    {
      "displayName": "Get a specific service.",
      "value": "RateplanServicesByIdGet",
      "description": "Get a specific service.<br>You must have at least one of these scopes: 'services.read, setup.read, setup.manage'.",
      "action": "Get a specific service.",
      "method": "GET",
      "path": "/rateplan/v1/services/{id}",
      "resource": "service",
      "group": "rateplan-v1"
    }
  ],
  "reports": [
    {
      "displayName": "List of ordered services",
      "value": "ReportsReportsOrdered-servicesGet",
      "description": "Returns a list of ordered services per day with information about the guest and the reservation this service was ordered for.<br>You must have this scope: 'reports.read'.",
      "action": "List of ordered services",
      "method": "GET",
      "path": "/reports/v1/reports/ordered-services",
      "resource": "reports",
      "group": "reports-v1"
    },
    {
      "displayName": "Returns the number of arrivals in a month for a property",
      "value": "ReportsReportsArrivalsGet",
      "description": "Returns number of arriving guests for a property for a certain month. Only over-night rateplans are considered.\n\r\nIncludes statistical information on purpose of travel, and nationality. The data is taken from the primary guest only.\r\nThe status considered are: in-house, confirmed, and checked out.<br>You must have this scope: 'reports.read'.",
      "action": "Returns the number of arrivals in a month for a property",
      "method": "GET",
      "path": "/reports/v1/reports/arrivals",
      "resource": "reports",
      "group": "reports-v1"
    },
    {
      "displayName": "Returns the property performance report which includes the ADR and the RevPAR for each business day.",
      "value": "ReportsReportsProperty-performanceGet",
      "description": "The property performance API return you key performance indicator for the selected property like occupancy, ADR and RevPAR.\r\nIt only considers the originally booked amounts for sold units excluding any additional services or manually posted charges\r\nor allowances. The results can be filterd to only show you data for a certain part of the business. For example you can exclude\r\nday-use reservations or complimentary rate plans.<br>You must have this scope: 'reports.read'.",
      "action": "Returns the property performance report which includes the ADR and the RevPAR for each business day.",
      "method": "GET",
      "path": "/reports/v1/reports/property-performance",
      "resource": "reports",
      "group": "reports-v1"
    },
    {
      "displayName": "Returns the list of company invoices with information on the company and the VAT breakdown",
      "value": "ReportsReportsCompany-invoices-vatGet",
      "description": "<br>You must have this scope: 'reports.read'.",
      "action": "Returns the list of company invoices with information on the company and the VAT breakdown",
      "method": "GET",
      "path": "/reports/v1/reports/company-invoices-vat",
      "resource": "reports",
      "group": "reports-v1"
    },
    {
      "displayName": "Returns the revenues report for a property",
      "value": "ReportsReportsRevenuesGet",
      "description": "<br>You must have this scope: 'reports.read'.",
      "action": "Returns the revenues report for a property",
      "method": "GET",
      "path": "/reports/v1/reports/revenues",
      "resource": "reports",
      "group": "reports-v1"
    }
  ],
  "capturepolicies": [
    {
      "displayName": "Get all capture policies.",
      "value": "SettingsCapture-policiesGet",
      "description": "Get the list of capture policies.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get all capture policies.",
      "method": "GET",
      "path": "/settings/v1/capture-policies",
      "resource": "capturepolicies",
      "group": "settings-v1"
    },
    {
      "displayName": "Get a specific capture policy.",
      "value": "SettingsCapture-policiesByIdGet",
      "description": "Get a specific capture policy.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get a specific capture policy.",
      "method": "GET",
      "path": "/settings/v1/capture-policies/{id}",
      "resource": "capturepolicies",
      "group": "settings-v1"
    },
    {
      "displayName": "Allows to modify properties of a capture policy.",
      "value": "SettingsCapture-policiesByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace captureNoShowFee flag\r\n- Replace captureCancellationFee flag\r\n- Replace capturePrepayment flag\r\n- Replace PostOtaBankTransferOnCheckOut flag\r\n- Replace capturePayment configuration<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify properties of a capture policy.",
      "method": "PATCH",
      "path": "/settings/v1/capture-policies/{id}",
      "resource": "capturepolicies",
      "group": "settings-v1"
    }
  ],
  "citytax": [
    {
      "displayName": "Create a city tax.",
      "value": "SettingsCity-taxPost",
      "description": "You can only create one city tax per property. It can be changed and deleted any time.<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Create a city tax.",
      "method": "POST",
      "path": "/settings/v1/city-tax",
      "resource": "citytax",
      "group": "settings-v1"
    },
    {
      "displayName": "Get all city taxes.",
      "value": "SettingsCity-taxGet",
      "description": "Get the list of all city taxes.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get all city taxes.",
      "method": "GET",
      "path": "/settings/v1/city-tax",
      "resource": "citytax",
      "group": "settings-v1"
    },
    {
      "displayName": "Get a specific city tax.",
      "value": "SettingsCity-taxByIdGet",
      "description": "Get a specific city tax.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get a specific city tax.",
      "method": "GET",
      "path": "/settings/v1/city-tax/{id}",
      "resource": "citytax",
      "group": "settings-v1"
    },
    {
      "displayName": "Allows to modify city tax",
      "value": "SettingsCity-taxByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name and description\r\n- Replace value and type\r\n- Replace or delete the VAT type\r\n- Replace priority<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify city tax",
      "method": "PATCH",
      "path": "/settings/v1/city-tax/{id}",
      "resource": "citytax",
      "group": "settings-v1"
    }
  ],
  "customsubaccounts": [
    {
      "displayName": "Returns a list of all sub-accounts.",
      "value": "SettingsSub-accountsGet",
      "description": "Returns a list of all sub-accounts.<br>You must have at least one of these scopes: 'subledger.read, setup.read, setup.manage'.",
      "action": "Returns a list of all sub-accounts.",
      "method": "GET",
      "path": "/settings/v1/sub-accounts",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    },
    {
      "displayName": "Create a sub-account.",
      "value": "SettingsSub-accountsPost",
      "description": "Create a sub-account.<br>You must have at least one of these scopes: 'subledger.manage, setup.manage'.",
      "action": "Create a sub-account.",
      "method": "POST",
      "path": "/settings/v1/sub-accounts",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    },
    {
      "displayName": "Returns number of sub-accounts.",
      "value": "SettingsSub-accounts$countGet",
      "description": "Returns number of sub-account.<br>You must have at least one of these scopes: 'subledger.read, setup.read, setup.manage'.",
      "action": "Returns number of sub-accounts.",
      "method": "GET",
      "path": "/settings/v1/sub-accounts/$count",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    },
    {
      "displayName": "Returns one sub-account.",
      "value": "SettingsSub-accountsByIdGet",
      "description": "Get a sub-account by ID.<br>You must have at least one of these scopes: 'subledger.read, setup.read, setup.manage'.",
      "action": "Returns one sub-account.",
      "method": "GET",
      "path": "/settings/v1/sub-accounts/{id}",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    },
    {
      "displayName": "Allows to modify the name of the sub-account.",
      "value": "SettingsSub-accountsByIdPatch",
      "description": "Allows to modify the name of the sub-account.<br>You must have at least one of these scopes: 'subledger.manage, setup.manage'.",
      "action": "Allows to modify the name of the sub-account.",
      "method": "PATCH",
      "path": "/settings/v1/sub-accounts/{id}",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    },
    {
      "displayName": "Check if the sub-account exists.",
      "value": "SettingsSub-accountsByIdHead",
      "description": "Check if the sub-account exists.<br>You must have at least one of these scopes: 'subledger.read, setup.read, setup.manage'.",
      "action": "Check if the sub-account exists.",
      "method": "HEAD",
      "path": "/settings/v1/sub-accounts/{id}",
      "resource": "customsubaccounts",
      "group": "settings-v1"
    }
  ],
  "featuresettings": [
    {
      "displayName": "Get feature settings for a property.",
      "value": "SettingsFeaturesByPropertyIdGet",
      "description": "Get feature settings for a property.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get feature settings for a property.",
      "method": "GET",
      "path": "/settings/v1/features/{propertyId}",
      "resource": "featuresettings",
      "group": "settings-v1"
    },
    {
      "displayName": "Allows to modify feature settings",
      "value": "SettingsFeaturesByPropertyIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace areCustomRevenueSubAccountsEnabled flag\r\n- Replace performAccountingForOpenInvoiceActions flag\r\n- Replace showRecipientForEachLineItemOnTheInvoice flag\r\n- Replace addCityTaxOnReservationCreation flag\r\n- Replace maxAmountForMinimalInvoices value\r\n- Replace invoiceNumberPattern value\r\n- Replace advanceInvoiceNumberPattern value<br>You must have at least one of these scopes: 'features.toggle, setup.manage'.",
      "action": "Allows to modify feature settings",
      "method": "PATCH",
      "path": "/settings/v1/features/{propertyId}",
      "resource": "featuresettings",
      "group": "settings-v1"
    }
  ],
  "invoiceaddress": [
    {
      "displayName": "Get invoice addresses",
      "value": "SettingsInvoice-addressGet",
      "description": "Get the list of all invoice addresses.<br>You must have at least one of these scopes: 'setup.read, setup.manage, settings.read, settings.manage'.",
      "action": "Get invoice addresses",
      "method": "GET",
      "path": "/settings/v1/invoice-address",
      "resource": "invoiceaddress",
      "group": "settings-v1"
    },
    {
      "displayName": "Create or update invoice addresses for one or more properties.",
      "value": "SettingsInvoice-addressPut",
      "description": "If the address does not exist for one of the specified properties, it is created. If it exists, it is completely replaced.<br>You must have at least one of these scopes: 'setup.manage, settings.manage'.",
      "action": "Create or update invoice addresses for one or more properties.",
      "method": "PUT",
      "path": "/settings/v1/invoice-address",
      "resource": "invoiceaddress",
      "group": "settings-v1"
    },
    {
      "displayName": "Change fields in the invoice address of one or more properties.",
      "value": "SettingsInvoice-addressPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace AddressLine1\r\n- Add, replace or delete AddressLine2\r\n- Replace PostalCode\r\n- Replace City\r\n- Replace CountryCode<br>You must have at least one of these scopes: 'setup.manage, settings.manage'.",
      "action": "Change fields in the invoice address of one or more properties.",
      "method": "PATCH",
      "path": "/settings/v1/invoice-address",
      "resource": "invoiceaddress",
      "group": "settings-v1"
    }
  ],
  "languages": [
    {
      "displayName": "Get the language settings for the account",
      "value": "SettingsLanguagesGet",
      "description": "Get the language settings<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get the language settings for the account",
      "method": "GET",
      "path": "/settings/v1/languages",
      "resource": "languages",
      "group": "settings-v1"
    },
    {
      "displayName": "Replaces the language settings for the account",
      "value": "SettingsLanguagesPut",
      "description": "Use this call to modify the language settings of the account.<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Replaces the language settings for the account",
      "method": "PUT",
      "path": "/settings/v1/languages",
      "resource": "languages",
      "group": "settings-v1"
    }
  ],
  "marketsegment": [
    {
      "displayName": "Get a market segment.",
      "value": "SettingsMarket-segmentsByIdGet",
      "description": "Get a market segment by id.<br>You must have at least one of these scopes: 'setup.read, setup.manage'.",
      "action": "Get a market segment.",
      "method": "GET",
      "path": "/settings/v1/market-segments/{id}",
      "resource": "marketsegment",
      "group": "settings-v1"
    },
    {
      "displayName": "Check if a market segment exists.",
      "value": "SettingsMarket-segmentsByIdHead",
      "description": "Check if a market segment exists by id.<br>You must have at least one of these scopes: 'setup.read, setup.manage'.",
      "action": "Check if a market segment exists.",
      "method": "HEAD",
      "path": "/settings/v1/market-segments/{id}",
      "resource": "marketsegment",
      "group": "settings-v1"
    },
    {
      "displayName": "Allows to modify market segment.",
      "value": "SettingsMarket-segmentsByIdPatch",
      "description": "Here is the list of operations that are currently allowed:\r\n- Replace name\r\n- Add, replace and remove description\r\n- Add, replace and remove propertyIds<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Allows to modify market segment.",
      "method": "PATCH",
      "path": "/settings/v1/market-segments/{id}",
      "resource": "marketsegment",
      "group": "settings-v1"
    },
    {
      "displayName": "Returns a list of all market segments, filtered by the specified parameters.",
      "value": "SettingsMarket-segmentsGet",
      "description": "<br>You must have at least one of these scopes: 'setup.read, setup.manage'.",
      "action": "Returns a list of all market segments, filtered by the specified parameters.",
      "method": "GET",
      "path": "/settings/v1/market-segments",
      "resource": "marketsegment",
      "group": "settings-v1"
    },
    {
      "displayName": "Create a market segment",
      "value": "SettingsMarket-segmentsPost",
      "description": "<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Create a market segment",
      "method": "POST",
      "path": "/settings/v1/market-segments",
      "resource": "marketsegment",
      "group": "settings-v1"
    },
    {
      "displayName": "Returns number of market segments.",
      "value": "SettingsMarket-segments$countGet",
      "description": "Returns number of market segments.<br>You must have at least one of these scopes: 'setup.read, setup.manage'.",
      "action": "Returns number of market segments.",
      "method": "GET",
      "path": "/settings/v1/market-segments/$count",
      "resource": "marketsegment",
      "group": "settings-v1"
    }
  ],
  "propertysettings": [
    {
      "displayName": "Get property settings",
      "value": "SettingsPropertiesByIdGet",
      "description": "Get base settings for a property.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get property settings",
      "method": "GET",
      "path": "/settings/v1/properties/{id}",
      "resource": "propertysettings",
      "group": "settings-v1"
    }
  ],
  "timeslicedefinitions": [
    {
      "displayName": "Get a specific time slice definition",
      "value": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet",
      "description": "Get a specific time slice definition for a property. A time slice definition specifies\r\nthe pattern for recurring time slots. The time slots define when reservations\r\nin the property can start or end.\r\nIt is used in the rate plans when managing prices for renting out the units.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get a specific time slice definition",
      "method": "GET",
      "path": "/settings/v1/properties/{propertyId}/time-slice-definitions/{id}",
      "resource": "timeslicedefinitions",
      "group": "settings-v1"
    },
    {
      "displayName": "Modifies a specific time slice definition for the property",
      "value": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch",
      "description": "Use this call to modify a time slice definition of the property.\r\nHere is the list of operations that are currently allowed:\r\n- Replace Name\r\n- Replace CheckInTime (only possible if the time slice definition is not in-use)\r\n- Replace CheckOutTime (only possible if the time slice definition is not in-use)<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Modifies a specific time slice definition for the property",
      "method": "PATCH",
      "path": "/settings/v1/properties/{propertyId}/time-slice-definitions/{id}",
      "resource": "timeslicedefinitions",
      "group": "settings-v1"
    },
    {
      "displayName": "Get time slice definitions",
      "value": "SettingsPropertiesByPropertyIdTime-slice-definitionsGet",
      "description": "Get all time slice definitions for a property. A time slice definition specifies\r\nthe pattern for recurring time slots. The time slots define when reservations\r\nin the property can start or end.\r\nThey are used in the rate plans when managing prices for renting out the units.<br>You must have at least one of these scopes: 'settings.read, setup.read, setup.manage'.",
      "action": "Get time slice definitions",
      "method": "GET",
      "path": "/settings/v1/properties/{propertyId}/time-slice-definitions",
      "resource": "timeslicedefinitions",
      "group": "settings-v1"
    },
    {
      "displayName": "Creates a time slice definition",
      "value": "SettingsPropertiesByPropertyIdTime-slice-definitionsPost",
      "description": "Use this call to create a time slice definition.<br>You must have at least one of these scopes: 'settings.manage, setup.manage'.",
      "action": "Creates a time slice definition",
      "method": "POST",
      "path": "/settings/v1/properties/{propertyId}/time-slice-definitions",
      "resource": "timeslicedefinitions",
      "group": "settings-v1"
    }
  ],
  "healthcheck": [
    {
      "displayName": "PingerPost",
      "value": "PingerPost",
      "description": "<br>You need to be authorized (no particular scope required)",
      "action": "PingerPost",
      "method": "POST",
      "path": "/v1/pinger",
      "resource": "healthcheck",
      "group": "webhook-v1"
    }
  ],
  "subscriptions": [
    {
      "displayName": "Get all subscriptions created for the current account and client",
      "value": "SubscriptionsGet",
      "description": "<br>You need to be authorized (no particular scope required)",
      "action": "Get all subscriptions created for the current account and client",
      "method": "GET",
      "path": "/v1/subscriptions",
      "resource": "subscriptions",
      "group": "webhook-v1"
    },
    {
      "displayName": "Creates subscription",
      "value": "SubscriptionsPost",
      "description": "Creating webhook subscriptions through swagger is disabled.\r\nIn order to create a subscription you must do it directly from your application.\r\nTo learn more visit: https://apaleo.dev/guides/start/webhook/\r\n            \r\nAfter creating the subscription, apaleo sends a ping to the endpoint.\r\nIf the response is not OK, the subscription will not be enabled and error returned",
      "action": "Creates subscription",
      "method": "POST",
      "path": "/v1/subscriptions",
      "resource": "subscriptions",
      "group": "webhook-v1"
    },
    {
      "displayName": "SubscriptionsByIdGet",
      "value": "SubscriptionsByIdGet",
      "description": "<br>You need to be authorized (no particular scope required)",
      "action": "SubscriptionsByIdGet",
      "method": "GET",
      "path": "/v1/subscriptions/{id}",
      "resource": "subscriptions",
      "group": "webhook-v1"
    },
    {
      "displayName": "Updates subscription",
      "value": "SubscriptionsByIdPut",
      "description": "Update a subscription by subscription id.",
      "action": "Updates subscription",
      "method": "PUT",
      "path": "/v1/subscriptions/{id}",
      "resource": "subscriptions",
      "group": "webhook-v1"
    },
    {
      "displayName": "Deletes subscription.",
      "value": "SubscriptionsByIdDelete",
      "description": "<br>You need to be authorized (no particular scope required)",
      "action": "Deletes subscription.",
      "method": "DELETE",
      "path": "/v1/subscriptions/{id}",
      "resource": "subscriptions",
      "group": "webhook-v1"
    }
  ]
};

export const operationOptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['availability'] } },
		options: [
			{ name: 'Get a list of all available units in a property', value: 'AvailabilityUnitsGet', action: 'Get a list of all available units in a property' },
			{ name: 'Get a list of all available unit groups in a property', value: 'AvailabilityUnit-groupsGet', action: 'Get a list of all available unit groups in a property' },
			{ name: 'Allows to modify the unit group availability', value: 'AvailabilityUnit-groupsByIdPatch', action: 'Allows to modify the unit group availability' },
			{ name: 'Get a list of all available services in a property', value: 'AvailabilityServicesGet', action: 'Get a list of all available services in a property' }
		],
		default: 'AvailabilityUnitsGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['reservationavailability'] } },
		options: [
			{ name: 'Get a list of all available units for a reservation', value: 'AvailabilityReservationsByIdUnitsGet', action: 'Get a list of all available units for a reservation' }
		],
		default: 'AvailabilityReservationsByIdUnitsGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['block'] } },
		options: [
			{ name: 'Creates a block', value: 'BookingBlocksPost', action: 'Creates a block' },
			{ name: 'Returns a list of blocks', value: 'BookingBlocksGet', action: 'Returns a list of blocks' },
			{ name: 'Returns number of blocks', value: 'BookingBlocks$countGet', action: 'Returns number of blocks' },
			{ name: 'Returns a specific block.', value: 'BookingBlocksByIdGet', action: 'Returns a specific block.' }
		],
		default: 'BookingBlocksPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['blockactions'] } },
		options: [
			{ name: 'Confirm a block.', value: 'BookingBlock-actionsByIdConfirmPut', action: 'Confirm a block.' },
			{ name: 'Release a block.', value: 'BookingBlock-actionsByIdReleasePut', action: 'Release a block.' },
			{ name: 'Cancel a block.', value: 'BookingBlock-actionsByIdCancelPut', action: 'Cancel a block.' },
			{ name: 'Wash a block.', value: 'BookingBlock-actionsByIdWashPut', action: 'Wash a block.' },
			{ name: 'Allow to modify a block', value: 'BookingBlock-actionsByIdAmendPut', action: 'Allow to modify a block' }
		],
		default: 'BookingBlock-actionsByIdConfirmPut',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['booking'] } },
		options: [
			{ name: 'Creates a booking for one or more reservations.', value: 'BookingBookingsPost', action: 'Creates a booking for one or more reservations.' },
			{ name: 'Returns a list of all bookings, filtered by the specified parameters.', value: 'BookingBookingsGet', action: 'Returns a list of all bookings, filtered by the specified parameters.' },
			{ name: 'Creates a booking for one or more reservations regardless of availability or restrictions.', value: 'BookingBookings$forcePost', action: 'Creates a booking for one or more reservations regardless of availability or restrictions.' },
			{ name: 'Add one or multiple reservations to an existing booking.', value: 'BookingBookingsByIdReservationsPost', action: 'Add one or multiple reservations to an existing booking.' },
			{ name: 'Add one or multiple reservations to an existing booking regardless of availability or restrictions.', value: 'BookingBookingsByIdReservations$forcePost', action: 'Add one or multiple reservations to an existing booking regardless of availability or restrictions.' },
			{ name: 'Returns a specific booking.', value: 'BookingBookingsByIdGet', action: 'Returns a specific booking.' },
			{ name: 'Allows to modify certain booking properties', value: 'BookingBookingsByIdPatch', action: 'Allows to modify certain booking properties' }
		],
		default: 'BookingBookingsPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['group'] } },
		options: [
			{ name: 'Creates a group booking.', value: 'BookingGroupsPost', action: 'Creates a group booking.' },
			{ name: 'Returns a list of all group bookings, filtered by the specified parameters.', value: 'BookingGroupsGet', action: 'Returns a list of all group bookings, filtered by the specified parameters.' },
			{ name: 'Returns a specific group booking.', value: 'BookingGroupsByIdGet', action: 'Returns a specific group booking.' },
			{ name: 'Allows to modify certain group booking properties', value: 'BookingGroupsByIdPatch', action: 'Allows to modify certain group booking properties' },
			{ name: 'Add one or multiple reservations to an existing group booking using blocked inventory.', value: 'BookingGroupsByIdReservationsPost', action: 'Add one or multiple reservations to an existing group booking using blocked inventory.' }
		],
		default: 'BookingGroupsPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['offer'] } },
		options: [
			{ name: 'Returns offers for one specific stay.', value: 'BookingOffersGet', action: 'Returns offers for one specific stay.' },
			{ name: 'Returns offers for a specific rate plan.', value: 'BookingRate-plan-offersGet', action: 'Returns offers for a specific rate plan.' },
			{ name: 'Returns service offers for one specific stay.', value: 'BookingService-offersGet', action: 'Returns service offers for one specific stay.' },
			{ name: 'Returns offers with rates and availabilities for the specified range.', value: 'BookingOffer-indexGet', action: 'Returns offers with rates and availabilities for the specified range.' }
		],
		default: 'BookingOffersGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['reservation'] } },
		options: [
			{ name: 'Returns a list of all reservations, filtered by the specified parameters.', value: 'BookingReservationsGet', action: 'Returns a list of all reservations, filtered by the specified parameters.' },
			{ name: 'Returns the number of reservations fulfilling the criteria specified in the parameters.', value: 'BookingReservations$countGet', action: 'Returns the number of reservations fulfilling the criteria specified in the parameters.' },
			{ name: 'Returns a specific reservation.', value: 'BookingReservationsByIdGet', action: 'Returns a specific reservation.' },
			{ name: 'Allows to modify certain reservation properties', value: 'BookingReservationsByIdPatch', action: 'Allows to modify certain reservation properties' },
			{ name: 'Returns offers for one specific reservation.', value: 'BookingReservationsByIdOffersGet', action: 'Returns offers for one specific reservation.' },
			{ name: 'Returns service offers for one specific reservation.', value: 'BookingReservationsByIdService-offersGet', action: 'Returns service offers for one specific reservation.' },
			{ name: 'Returns the services booked for a specific reservation.', value: 'BookingReservationsByIdServicesGet', action: 'Returns the services booked for a specific reservation.' },
			{ name: 'Removes a service from a reservation.', value: 'BookingReservationsByIdServicesDelete', action: 'Removes a service from a reservation.' }
		],
		default: 'BookingReservationsGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['reservationactions'] } },
		options: [
			{ name: 'Assign a unit to a reservation.', value: 'BookingReservation-actionsByIdAssign-unitPut', action: 'Assign a unit to a reservation.' },
			{ name: 'Assign a specific unit to a reservation.', value: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut', action: 'Assign a specific unit to a reservation.' },
			{ name: 'Unassign units from a reservation.', value: 'BookingReservation-actionsByIdUnassign-unitsPut', action: 'Unassign units from a reservation.' },
			{ name: 'Check-in of a reservation.', value: 'BookingReservation-actionsByIdCheckinPut', action: 'Check-in of a reservation.' },
			{ name: 'Reverses the check-in of a reservation.', value: 'BookingReservation-actionsByIdRevert-checkinPut', action: 'Reverses the check-in of a reservation.' },
			{ name: 'Check-out of a reservation.', value: 'BookingReservation-actionsByIdCheckoutPut', action: 'Check-out of a reservation.' },
			{ name: 'Cancel a reservation.', value: 'BookingReservation-actionsByIdCancelPut', action: 'Cancel a reservation.' },
			{ name: 'Set a reservation to No-show.', value: 'BookingReservation-actionsByIdNoshowPut', action: 'Set a reservation to No-show.' },
			{ name: 'Allows you to amend the stay details of a reservation', value: 'BookingReservation-actionsByIdAmendPut', action: 'Allows you to amend the stay details of a reservation' },
			{ name: 'Allows you to amend the stay details of a reservation regardless of availability or restrictions.', value: 'BookingReservation-actionsByIdAmend$forcePut', action: 'Allows you to amend the stay details of a reservation regardless of availability or restrictions.' },
			{ name: 'Book the service for a specific reservation.', value: 'BookingReservation-actionsByIdBook-servicePut', action: 'Book the service for a specific reservation.' },
			{ name: 'Book the service for a specific reservation regardless of availability.', value: 'BookingReservation-actionsByIdBook-service$forcePut', action: 'Book the service for a specific reservation regardless of availability.' },
			{ name: 'Removes the city tax from a reservation.', value: 'BookingReservation-actionsByIdRemove-city-taxPut', action: 'Removes the city tax from a reservation.' },
			{ name: 'Adds the city tax to a reservation.', value: 'BookingReservation-actionsByIdAdd-city-taxPut', action: 'Adds the city tax to a reservation.' }
		],
		default: 'BookingReservation-actionsByIdAssign-unitPut',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['types'] } },
		options: [
			{ name: 'Returns a list of supported sources.', value: 'BookingTypesSourcesGet', action: 'Returns a list of supported sources.' },
			{ name: 'Returns a list of values that a field of the specified type can take in the specified country.', value: 'BookingTypesByTypeAllowed-valuesGet', action: 'Returns a list of values that a field of the specified type can take in the specified country.' },
			{ name: 'Returns a list of all currencies.', value: 'FinanceTypesCurrenciesGet', action: 'Returns a list of all currencies.' },
			{ name: 'Returns a list of all supported payment methods.', value: 'FinanceTypesPayment-methodsGet', action: 'Returns a list of all supported payment methods.' },
			{ name: 'Returns a list of all supported service types.', value: 'FinanceTypesService-typesGet', action: 'Returns a list of all supported service types.' },
			{ name: 'Returns a list of all VAT types.', value: 'FinanceTypesVatGet', action: 'Returns a list of all VAT types.' }
		],
		default: 'BookingTypesSourcesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['folio'] } },
		options: [
			{ name: 'Returns a list of all folios.', value: 'FinanceFoliosGet', action: 'Returns a list of all folios.' },
			{ name: 'Create additional folios for a reservation, or new external folios', value: 'FinanceFoliosPost', action: 'Create additional folios for a reservation, or new external folios' },
			{ name: 'Returns number of folios.', value: 'FinanceFolios$countGet', action: 'Returns number of folios.' },
			{ name: 'Returns one folio.', value: 'FinanceFoliosByIdGet', action: 'Returns one folio.' },
			{ name: 'Allows to modify certain properties of a folio', value: 'FinanceFoliosByIdPatch', action: 'Allows to modify certain properties of a folio' },
			{ name: 'Check if the folio exists.', value: 'FinanceFoliosByIdHead', action: 'Check if the folio exists.' }
		],
		default: 'FinanceFoliosGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['folioactions'] } },
		options: [
			{ name: 'Adds and directly posts a charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.', value: 'FinanceFolio-actionsByFolioIdChargesPost', action: 'Adds and directly posts a charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.' },
			{ name: 'Adds and directly posts a transitory charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.', value: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost', action: 'Adds and directly posts a transitory charge to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.' },
			{ name: 'Adds and directly posts a cancellation fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the cancellation fee service type, the fee will be moved to the destination folio.', value: 'FinanceFolio-actionsByFolioIdCancellation-feePost', action: 'Adds and directly posts a cancellation fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the cancellation fee service type, the fee will be moved to the destination folio.' },
			{ name: 'Adds and directly posts a no-show fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the no-show fee service type, the fee will be moved to the destination folio.', value: 'FinanceFolio-actionsByFolioIdNo-show-feePost', action: 'Adds and directly posts a no-show fee to the folio.\r\nIf there are any fees configured for the property, an additional charge for each configured fee will be added.\r\nIf a routing instruction is defined for the no-show fee service type, the fee will be moved to the destination folio.' },
			{ name: 'Closes a folio.', value: 'FinanceFolio-actionsByFolioIdClosePut', action: 'Closes a folio.' },
			{ name: 'Reopens a folio.', value: 'FinanceFolio-actionsByFolioIdReopenPut', action: 'Reopens a folio.' },
			{ name: 'Move multiple charges, allowances and transitory charges from one folio to another.', value: 'FinanceFolio-actionsByFolioIdMove-chargesPut', action: 'Move multiple charges, allowances and transitory charges from one folio to another.' },
			{ name: 'Move multiple charges from one folio to another. Multiple source folios and multiple target folios can be specified.', value: 'FinanceFolio-actionsBulk-movePut', action: 'Move multiple charges from one folio to another. Multiple source folios and multiple target folios can be specified.' },
			{ name: 'Move all charges and transitory charges from one folio to another.', value: 'FinanceFolio-actionsByFolioIdMove-all-chargesPut', action: 'Move all charges and transitory charges from one folio to another.' },
			{ name: 'Posts an allowance for a charge', value: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost', action: 'Posts an allowance for a charge' },
			{ name: 'Posts an allowance for a folio', value: 'FinanceFolio-actionsByFolioIdAllowancesPost', action: 'Posts an allowance for a folio' },
			{ name: 'Posts allowances for a folio', value: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost', action: 'Posts allowances for a folio' },
			{ name: 'Posts all unposted charges for the whole length of stay.', value: 'FinanceFolio-actionsByFolioIdPost-chargesPut', action: 'Posts all unposted charges for the whole length of stay.' },
			{ name: 'Move multiple payments from one guest/booking folio to another.', value: 'FinanceFolio-actionsByFolioIdMove-paymentsPut', action: 'Move multiple payments from one guest/booking folio to another.' },
			{ name: 'Corrects a folio by moving some charges.\r\nThis operation creates a new folio with the charges from the request.\r\nThe payment, equal to the sum of charges, is also split to this new folio so that both folios will have 0 balance.', value: 'FinanceFolio-actionsByFolioIdCorrectPost', action: 'Corrects a folio by moving some charges.\r\nThis operation creates a new folio with the charges from the request.\r\nThe payment, equal to the sum of charges, is also split to this new folio so that both folios will have 0 balance.' },
			{ name: 'Splits a charge into two using the percent or amount provided\r\nCreates an allowance and two new charges.', value: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost', action: 'Splits a charge into two using the percent or amount provided\r\nCreates an allowance and two new charges.' },
			{ name: 'Splits a payment into two using the percent or amount provided\r\nCreates a refund and two new payments.', value: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost', action: 'Splits a payment into two using the percent or amount provided\r\nCreates a refund and two new payments.' }
		],
		default: 'FinanceFolio-actionsByFolioIdChargesPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['foliopayments'] } },
		options: [
			{ name: 'Get a list of payments.', value: 'FinanceFoliosByFolioIdPaymentsGet', action: 'Get a list of payments.' },
			{ name: 'Trigger a custom payment for the folio.', value: 'FinanceFoliosByFolioIdPaymentsPost', action: 'Trigger a custom payment for the folio.' },
			{ name: 'Get a payment by ID.', value: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet', action: 'Get a payment by ID.' },
			{ name: 'Trigger a payment on a card terminal for the folio.', value: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost', action: 'Trigger a payment on a card terminal for the folio.' },
			{ name: 'Captures a specific amount from a pre-authorization and posts it to the folio.', value: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost', action: 'Captures a specific amount from a pre-authorization and posts it to the folio.' },
			{ name: 'Trigger a payment using the payment account stored on the reservation.', value: 'FinanceFoliosByFolioIdPaymentsBy-payment-accountPost', action: 'Trigger a payment using the payment account stored on the reservation.' },
			{ name: 'Creates a link to a payment form where guests can pay.', value: 'FinanceFoliosByFolioIdPaymentsBy-linkPost', action: 'Creates a link to a payment form where guests can pay.' },
			{ name: 'Cancels a pending payment link.', value: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut', action: 'Cancels a pending payment link.' },
			{ name: 'Get a list of refunds.', value: 'FinanceFoliosByFolioIdRefundsGet', action: 'Get a list of refunds.' },
			{ name: 'Trigger a refund for the folio.', value: 'FinanceFoliosByFolioIdRefundsPost', action: 'Trigger a refund for the folio.' },
			{ name: 'Get a refund by ID.', value: 'FinanceFoliosByFolioIdRefundsByRefundIdGet', action: 'Get a refund by ID.' },
			{ name: 'Trigger a refund for a specific payment.', value: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost', action: 'Trigger a refund for a specific payment.' }
		],
		default: 'FinanceFoliosByFolioIdPaymentsGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['invoice'] } },
		options: [
			{ name: 'Gets a preview invoice PDF for one specific folio.', value: 'FinanceInvoicesPreview-pdfGet', action: 'Gets a preview invoice PDF for one specific folio.' },
			{ name: 'Gets an invoice preview for one specific folio.', value: 'FinanceInvoicesPreviewGet', action: 'Gets an invoice preview for one specific folio.' },
			{ name: 'Gets the list of all invoices (the metadata only, not the files).', value: 'FinanceInvoicesGet', action: 'Gets the list of all invoices (the metadata only, not the files).' },
			{ name: 'Creates an invoice for one specific folio.', value: 'FinanceInvoicesPost', action: 'Creates an invoice for one specific folio.' },
			{ name: 'Gets an invoice PDF file.', value: 'FinanceInvoicesByIdPdfGet', action: 'Gets an invoice PDF file.' },
			{ name: 'Gets invoice data.', value: 'FinanceInvoicesByIdGet', action: 'Gets invoice data.' }
		],
		default: 'FinanceInvoicesPreview-pdfGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['invoiceaction'] } },
		options: [
			{ name: 'Marks an invoice as paid.', value: 'FinanceInvoice-actionsByIdPayPut', action: 'Marks an invoice as paid.' },
			{ name: 'Cancels an invoice', value: 'FinanceInvoice-actionsByIdCancelPut', action: 'Cancels an invoice' }
		],
		default: 'FinanceInvoice-actionsByIdPayPut',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['subledger'] } },
		options: [
			{ name: 'Aggregates transactions pairs by date (business day) for all accounts and a given period.', value: 'FinanceAccountsAggregate-pairs-dailyPost', action: 'Aggregates transactions pairs by date (business day) for all accounts and a given period.' },
			{ name: 'Aggregates transactions by date (business day) for all accounts and a given period.', value: 'FinanceAccountsAggregate-dailyPost', action: 'Aggregates transactions by date (business day) for all accounts and a given period.' },
			{ name: 'Aggregates transactions by timestamp for all accounts and a given period.', value: 'FinanceAccountsAggregatePost', action: 'Aggregates transactions by timestamp for all accounts and a given period.' },
			{ name: 'Returns transactions filtered by timestamp for a property for a given period.', value: 'FinanceAccountsExportPost', action: 'Returns transactions filtered by timestamp for a property for a given period.' },
			{ name: 'Returns transactions filtered by date (business day) for a property for a given period.', value: 'FinanceAccountsExport-dailyPost', action: 'Returns transactions filtered by date (business day) for a property for a given period.' },
			{ name: 'Returns gross transactions filtered by date (business day) for a property for a given period.', value: 'FinanceAccountsExport-gross-dailyPost', action: 'Returns gross transactions filtered by date (business day) for a property for a given period.' },
			{ name: 'Returns the chart of accounts of the subledger.', value: 'FinanceAccountsSchemaGet', action: 'Returns the chart of accounts of the subledger.' },
			{ name: 'Returns a list of global accounts.', value: 'FinanceGlobal-accountsGet', action: 'Returns a list of global accounts.' },
			{ name: 'Returns a list of guest accounts.', value: 'FinanceGuest-accountsGet', action: 'Returns a list of guest accounts.' },
			{ name: 'Returns a list of external accounts.', value: 'FinanceExternal-accountsGet', action: 'Returns a list of external accounts.' },
			{ name: 'Returns one account.', value: 'FinanceAccountsByNumberGet', action: 'Returns one account.' },
			{ name: 'Returns a list of child accounts for a specified parent account.', value: 'FinanceAccountsChild-accountsGet', action: 'Returns a list of child accounts for a specified parent account.' }
		],
		default: 'FinanceAccountsAggregate-pairs-dailyPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['property'] } },
		options: [
			{ name: 'Get a properties list', value: 'InventoryPropertiesGet', action: 'Get a properties list' },
			{ name: 'Creates a property', value: 'InventoryPropertiesPost', action: 'Creates a property' },
			{ name: 'Get a property', value: 'InventoryPropertiesByIdGet', action: 'Get a property' },
			{ name: 'Allows to modify property', value: 'InventoryPropertiesByIdPatch', action: 'Allows to modify property' }
		],
		default: 'InventoryPropertiesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['unit'] } },
		options: [
			{ name: 'Allows to patch unit', value: 'InventoryUnitsByIdPatch', action: 'Allows to patch unit' },
			{ name: 'Get a unit', value: 'InventoryUnitsByIdGet', action: 'Get a unit' },
			{ name: 'Check if a unit exists', value: 'InventoryUnitsByIdHead', action: 'Check if a unit exists' },
			{ name: 'Delete a unit', value: 'InventoryUnitsByIdDelete', action: 'Delete a unit' },
			{ name: 'Allows to patch one or more units', value: 'InventoryUnitsPatch', action: 'Allows to patch one or more units' },
			{ name: 'Get a units list', value: 'InventoryUnitsGet', action: 'Get a units list' },
			{ name: 'Create a unit', value: 'InventoryUnitsPost', action: 'Create a unit' },
			{ name: 'Returns number of units', value: 'InventoryUnits$countGet', action: 'Returns number of units' },
			{ name: 'Create multiple units', value: 'InventoryUnitsBulkPost', action: 'Create multiple units' }
		],
		default: 'InventoryUnitsByIdPatch',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['unitattribute'] } },
		options: [
			{ name: 'Get unit attribute by id', value: 'InventoryUnit-attributesByIdGet', action: 'Get unit attribute by id' },
			{ name: 'Allows to modify unit attribute', value: 'InventoryUnit-attributesByIdPatch', action: 'Allows to modify unit attribute' },
			{ name: 'Check if a unit attribute exists', value: 'InventoryUnit-attributesByIdHead', action: 'Check if a unit attribute exists' },
			{ name: 'Get unit attribute list', value: 'InventoryUnit-attributesGet', action: 'Get unit attribute list' },
			{ name: 'Create a unit attribute', value: 'InventoryUnit-attributesPost', action: 'Create a unit attribute' }
		],
		default: 'InventoryUnit-attributesByIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['unitgroup'] } },
		options: [
			{ name: 'Create a unit group', value: 'InventoryUnit-groupsPost', action: 'Create a unit group' },
			{ name: 'Get all unit groups, or all unit groups for a property', value: 'InventoryUnit-groupsGet', action: 'Get all unit groups, or all unit groups for a property' },
			{ name: 'Returns number of unit groups', value: 'InventoryUnit-groups$countGet', action: 'Returns number of unit groups' },
			{ name: 'Check if a unit group exists', value: 'InventoryUnit-groupsByIdHead', action: 'Check if a unit group exists' },
			{ name: 'Get a unit group', value: 'InventoryUnit-groupsByIdGet', action: 'Get a unit group' },
			{ name: 'Replace a unit group', value: 'InventoryUnit-groupsByIdPut', action: 'Replace a unit group' }
		],
		default: 'InventoryUnit-groupsPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['bookinglogs'] } },
		options: [
			{ name: 'Returns reservation change log entries sorted by the timestamp', value: 'LogsBookingReservationGet', action: 'Returns reservation change log entries sorted by the timestamp' }
		],
		default: 'LogsBookingReservationGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['financelogs'] } },
		options: [
			{ name: 'Returns folio change log entries sorted by the timestamp.', value: 'LogsFinanceFolioGet', action: 'Returns folio change log entries sorted by the timestamp.' },
			{ name: 'Returns the night audit logs.', value: 'LogsFinanceNight-auditGet', action: 'Returns the night audit logs.' },
			{ name: 'Returns the audit log for all accounting exports that have been done.', value: 'LogsFinanceTransactions-exportGet', action: 'Returns the audit log for all accounting exports that have been done.' }
		],
		default: 'LogsFinanceFolioGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['maintenance'] } },
		options: [
			{ name: 'Get list of maintenances', value: 'OperationsMaintenancesGet', action: 'Get list of maintenances' },
			{ name: 'Create a new maintenance window', value: 'OperationsMaintenancesPost', action: 'Create a new maintenance window' },
			{ name: 'Returns number of maintenances', value: 'OperationsMaintenances$countGet', action: 'Returns number of maintenances' },
			{ name: 'Create multiple maintenances', value: 'OperationsMaintenancesBulkPost', action: 'Create multiple maintenances' },
			{ name: 'Modify a maintenance', value: 'OperationsMaintenancesByIdPatch', action: 'Modify a maintenance' },
			{ name: 'Delete a maintenance', value: 'OperationsMaintenancesByIdDelete', action: 'Delete a maintenance' },
			{ name: 'Get a specific maintenance', value: 'OperationsMaintenancesByIdGet', action: 'Get a specific maintenance' },
			{ name: 'Check if a maintenance exists', value: 'OperationsMaintenancesByIdHead', action: 'Check if a maintenance exists' }
		],
		default: 'OperationsMaintenancesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['operations'] } },
		options: [
			{ name: 'Performs the night audit for one property.', value: 'OperationsNight-auditPut', action: 'Performs the night audit for one property.' },
			{ name: 'Change the condition of a unit', value: 'OperationsUnits-conditionPut', action: 'Change the condition of a unit' }
		],
		default: 'OperationsNight-auditPut',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['agecategory'] } },
		options: [
			{ name: 'Get an age category', value: 'SettingsAge-categoriesByIdGet', action: 'Get an age category' },
			{ name: 'Allows to modify properties of an age category', value: 'SettingsAge-categoriesByIdPatch', action: 'Allows to modify properties of an age category' },
			{ name: 'Create an age category', value: 'SettingsAge-categoriesPost', action: 'Create an age category' },
			{ name: 'Get an age category list', value: 'SettingsAge-categoriesGet', action: 'Get an age category list' }
		],
		default: 'SettingsAge-categoriesByIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['cancellationpolicy'] } },
		options: [
			{ name: 'Create a cancellation policy.', value: 'RateplanCancellation-policiesPost', action: 'Create a cancellation policy.' },
			{ name: 'Get all cancellation policies.', value: 'RateplanCancellation-policiesGet', action: 'Get all cancellation policies.' },
			{ name: 'Get a specific cancellation policy.', value: 'RateplanCancellation-policiesByIdGet', action: 'Get a specific cancellation policy.' },
			{ name: 'Allows to modify properties of a cancellation policy', value: 'RateplanCancellation-policiesByIdPatch', action: 'Allows to modify properties of a cancellation policy' }
		],
		default: 'RateplanCancellation-policiesPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['company'] } },
		options: [
			{ name: 'Create a company', value: 'RateplanCompaniesPost', action: 'Create a company' },
			{ name: 'Get a list of companies', value: 'RateplanCompaniesGet', action: 'Get a list of companies' },
			{ name: 'Get a company', value: 'RateplanCompaniesByIdGet', action: 'Get a company' },
			{ name: 'Modify a company', value: 'RateplanCompaniesByIdPatch', action: 'Modify a company' }
		],
		default: 'RateplanCompaniesPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['corporatecodes'] } },
		options: [
			{ name: 'Returns a list of corporate codes.', value: 'RateplanCorporate-codesCodesGet', action: 'Returns a list of corporate codes.' }
		],
		default: 'RateplanCorporate-codesCodesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['noshowpolicy'] } },
		options: [
			{ name: 'Create a no-show policy.', value: 'RateplanNo-show-policiesPost', action: 'Create a no-show policy.' },
			{ name: 'Get all no-show policies.', value: 'RateplanNo-show-policiesGet', action: 'Get all no-show policies.' },
			{ name: 'Get a specific no-show policy.', value: 'RateplanNo-show-policiesByIdGet', action: 'Get a specific no-show policy.' },
			{ name: 'Allows to modify properties of a no-show policy', value: 'RateplanNo-show-policiesByIdPatch', action: 'Allows to modify properties of a no-show policy' }
		],
		default: 'RateplanNo-show-policiesPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['promocodes'] } },
		options: [
			{ name: 'Returns a list of promo codes.', value: 'RateplanPromo-codesCodesGet', action: 'Returns a list of promo codes.' }
		],
		default: 'RateplanPromo-codesCodesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['rate'] } },
		options: [
			{ name: 'Returns a list of rates.', value: 'RateplanRate-plansByIdRatesGet', action: 'Returns a list of rates.' },
			{ name: 'Initializes and changes the rates for the rate plan.', value: 'RateplanRate-plansByIdRatesPut', action: 'Initializes and changes the rates for the rate plan.' },
			{ name: 'Allows to patch the rates of multiple rate plans.', value: 'RateplanRatesPatch', action: 'Allows to patch the rates of multiple rate plans.' }
		],
		default: 'RateplanRate-plansByIdRatesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['rateplan'] } },
		options: [
			{ name: 'Get a rate plan list', value: 'RateplanRate-plansGet', action: 'Get a rate plan list' },
			{ name: 'Create a rate plan', value: 'RateplanRate-plansPost', action: 'Create a rate plan' },
			{ name: 'Allows to patch one or more rate plans', value: 'RateplanRate-plansPatch', action: 'Allows to patch one or more rate plans' },
			{ name: 'Get a rate plan', value: 'RateplanRate-plansByIdGet', action: 'Get a rate plan' },
			{ name: 'Replace a rate plan', value: 'RateplanRate-plansByIdPut', action: 'Replace a rate plan' }
		],
		default: 'RateplanRate-plansGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['service'] } },
		options: [
			{ name: 'Create a service.', value: 'RateplanServicesPost', action: 'Create a service.' },
			{ name: 'Get all services.', value: 'RateplanServicesGet', action: 'Get all services.' },
			{ name: 'Modify a service.', value: 'RateplanServicesByIdPatch', action: 'Modify a service.' },
			{ name: 'Get a specific service.', value: 'RateplanServicesByIdGet', action: 'Get a specific service.' }
		],
		default: 'RateplanServicesPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['reports'] } },
		options: [
			{ name: 'List of ordered services', value: 'ReportsReportsOrdered-servicesGet', action: 'List of ordered services' },
			{ name: 'Returns the number of arrivals in a month for a property', value: 'ReportsReportsArrivalsGet', action: 'Returns the number of arrivals in a month for a property' },
			{ name: 'Returns the property performance report which includes the ADR and the RevPAR for each business day.', value: 'ReportsReportsProperty-performanceGet', action: 'Returns the property performance report which includes the ADR and the RevPAR for each business day.' },
			{ name: 'Returns the list of company invoices with information on the company and the VAT breakdown', value: 'ReportsReportsCompany-invoices-vatGet', action: 'Returns the list of company invoices with information on the company and the VAT breakdown' },
			{ name: 'Returns the revenues report for a property', value: 'ReportsReportsRevenuesGet', action: 'Returns the revenues report for a property' }
		],
		default: 'ReportsReportsOrdered-servicesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['capturepolicies'] } },
		options: [
			{ name: 'Get all capture policies.', value: 'SettingsCapture-policiesGet', action: 'Get all capture policies.' },
			{ name: 'Get a specific capture policy.', value: 'SettingsCapture-policiesByIdGet', action: 'Get a specific capture policy.' },
			{ name: 'Allows to modify properties of a capture policy.', value: 'SettingsCapture-policiesByIdPatch', action: 'Allows to modify properties of a capture policy.' }
		],
		default: 'SettingsCapture-policiesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['citytax'] } },
		options: [
			{ name: 'Create a city tax.', value: 'SettingsCity-taxPost', action: 'Create a city tax.' },
			{ name: 'Get all city taxes.', value: 'SettingsCity-taxGet', action: 'Get all city taxes.' },
			{ name: 'Get a specific city tax.', value: 'SettingsCity-taxByIdGet', action: 'Get a specific city tax.' },
			{ name: 'Allows to modify city tax', value: 'SettingsCity-taxByIdPatch', action: 'Allows to modify city tax' }
		],
		default: 'SettingsCity-taxPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['customsubaccounts'] } },
		options: [
			{ name: 'Returns a list of all sub-accounts.', value: 'SettingsSub-accountsGet', action: 'Returns a list of all sub-accounts.' },
			{ name: 'Create a sub-account.', value: 'SettingsSub-accountsPost', action: 'Create a sub-account.' },
			{ name: 'Returns number of sub-accounts.', value: 'SettingsSub-accounts$countGet', action: 'Returns number of sub-accounts.' },
			{ name: 'Returns one sub-account.', value: 'SettingsSub-accountsByIdGet', action: 'Returns one sub-account.' },
			{ name: 'Allows to modify the name of the sub-account.', value: 'SettingsSub-accountsByIdPatch', action: 'Allows to modify the name of the sub-account.' },
			{ name: 'Check if the sub-account exists.', value: 'SettingsSub-accountsByIdHead', action: 'Check if the sub-account exists.' }
		],
		default: 'SettingsSub-accountsGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['featuresettings'] } },
		options: [
			{ name: 'Get feature settings for a property.', value: 'SettingsFeaturesByPropertyIdGet', action: 'Get feature settings for a property.' },
			{ name: 'Allows to modify feature settings', value: 'SettingsFeaturesByPropertyIdPatch', action: 'Allows to modify feature settings' }
		],
		default: 'SettingsFeaturesByPropertyIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['invoiceaddress'] } },
		options: [
			{ name: 'Get invoice addresses', value: 'SettingsInvoice-addressGet', action: 'Get invoice addresses' },
			{ name: 'Create or update invoice addresses for one or more properties.', value: 'SettingsInvoice-addressPut', action: 'Create or update invoice addresses for one or more properties.' },
			{ name: 'Change fields in the invoice address of one or more properties.', value: 'SettingsInvoice-addressPatch', action: 'Change fields in the invoice address of one or more properties.' }
		],
		default: 'SettingsInvoice-addressGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['languages'] } },
		options: [
			{ name: 'Get the language settings for the account', value: 'SettingsLanguagesGet', action: 'Get the language settings for the account' },
			{ name: 'Replaces the language settings for the account', value: 'SettingsLanguagesPut', action: 'Replaces the language settings for the account' }
		],
		default: 'SettingsLanguagesGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['marketsegment'] } },
		options: [
			{ name: 'Get a market segment.', value: 'SettingsMarket-segmentsByIdGet', action: 'Get a market segment.' },
			{ name: 'Check if a market segment exists.', value: 'SettingsMarket-segmentsByIdHead', action: 'Check if a market segment exists.' },
			{ name: 'Allows to modify market segment.', value: 'SettingsMarket-segmentsByIdPatch', action: 'Allows to modify market segment.' },
			{ name: 'Returns a list of all market segments, filtered by the specified parameters.', value: 'SettingsMarket-segmentsGet', action: 'Returns a list of all market segments, filtered by the specified parameters.' },
			{ name: 'Create a market segment', value: 'SettingsMarket-segmentsPost', action: 'Create a market segment' },
			{ name: 'Returns number of market segments.', value: 'SettingsMarket-segments$countGet', action: 'Returns number of market segments.' }
		],
		default: 'SettingsMarket-segmentsByIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['propertysettings'] } },
		options: [
			{ name: 'Get property settings', value: 'SettingsPropertiesByIdGet', action: 'Get property settings' }
		],
		default: 'SettingsPropertiesByIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['timeslicedefinitions'] } },
		options: [
			{ name: 'Get a specific time slice definition', value: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet', action: 'Get a specific time slice definition' },
			{ name: 'Modifies a specific time slice definition for the property', value: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch', action: 'Modifies a specific time slice definition for the property' },
			{ name: 'Get time slice definitions', value: 'SettingsPropertiesByPropertyIdTime-slice-definitionsGet', action: 'Get time slice definitions' },
			{ name: 'Creates a time slice definition', value: 'SettingsPropertiesByPropertyIdTime-slice-definitionsPost', action: 'Creates a time slice definition' }
		],
		default: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['healthcheck'] } },
		options: [
			{ name: 'PingerPost', value: 'PingerPost', action: 'PingerPost' }
		],
		default: 'PingerPost',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['subscriptions'] } },
		options: [
			{ name: 'Get all subscriptions created for the current account and client', value: 'SubscriptionsGet', action: 'Get all subscriptions created for the current account and client' },
			{ name: 'Creates subscription', value: 'SubscriptionsPost', action: 'Creates subscription' },
			{ name: 'SubscriptionsByIdGet', value: 'SubscriptionsByIdGet', action: 'SubscriptionsByIdGet' },
			{ name: 'Updates subscription', value: 'SubscriptionsByIdPut', action: 'Updates subscription' },
			{ name: 'Deletes subscription.', value: 'SubscriptionsByIdDelete', action: 'Deletes subscription.' }
		],
		default: 'SubscriptionsGet',
	}
];
