import Address from "../../entity/address";
import EventInterface from "../@shared/event.interface";

type EventData = {
  id: string;
  name: string;
  address: Address;
};

export default class CustomerAddressChangedEvent implements EventInterface {
  dateTimeOccured: Date;
  eventData: EventData;

  constructor(eventData: EventData) {
    this.dateTimeOccured = new Date();
    this.eventData = eventData;
  }
}
