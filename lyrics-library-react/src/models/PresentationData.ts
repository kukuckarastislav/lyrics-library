export class PresentationData {
  constructor(
      public songId: number = 0,
      public songName: string = '',
      public songNumber: number = 0,
      public songBookName: string = '',
      public fontSize: number = 50,
      public slideCount: number = 0,
      
      public verses: string[] = [],
      public slideNumber: number = -1,
  ) { }

  
}
