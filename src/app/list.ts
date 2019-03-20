export class List {
  public showDescription:boolean;
  constructor(public id:number,public title:string ,public descriptions:string,public date:date){
    this.showDescription=false;
  };

}
