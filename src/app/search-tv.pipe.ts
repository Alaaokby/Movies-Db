import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(allItems:object[],userWord:string): any {
    return allItems.filter(function(oneItem:any){
        return oneItem.name.toLowerCase().includes(userWord.toLowerCase())
    })
  }

}
