import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allItems:object[],userWord:string): any {
    return allItems.filter(function(oneItem:any){
        return oneItem.title.toLowerCase().includes(userWord.toLowerCase())
    })
  }

}
