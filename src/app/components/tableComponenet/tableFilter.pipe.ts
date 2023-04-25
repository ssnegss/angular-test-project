import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    nameFilter: string,
    dateFromFilter: string,
    dateToFilter: string
  ): any[] {
    if (!items) {
      return [];
    }
    if (!nameFilter && !dateFromFilter && !dateToFilter) {
      return items;
    }
    return items.filter((item) => {
      if (
        nameFilter &&
        !item.name.toLowerCase().includes(nameFilter.toLowerCase())
      ) {
        return false;
      }
      if (
        dateFromFilter &&
        item.completionDate.getTime() < new Date(dateFromFilter).getTime()
      ) {
        console.log(dateFromFilter);
        console.log(item.completionDate);
        return false;
      }
      if (
        dateToFilter &&
        item.completionDate.getTime() > new Date(dateToFilter).getTime()
      ) {
        return false;
      }
      return true;
    });
  }
}
