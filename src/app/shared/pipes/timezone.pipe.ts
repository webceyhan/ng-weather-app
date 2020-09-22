import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezone',
})
export class TimezonePipe implements PipeTransform {
  transform(time: number, destinationOffset: number): number {
    const dt = new Date(time);

    // time in miliseconds
    const localTime = dt.getTime();

    // get time difference from UTC in minutes
    // multiply with 60 * 1000 to get in miliseconds
    const localOffset = dt.getTimezoneOffset() * 60 * 1000;

    // obtain current UTC time by adding local timezone offset to local time
    const utcTime = localTime + localOffset;

    // return destination local time
    return utcTime + destinationOffset;
  }
}
