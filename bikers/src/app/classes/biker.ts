export class Biker {
  constructor(
    private name:string,
    private email:string,
    private city:string,
    private rideGroup:string,
    private daysOfWeek:string,
    private date:string
  ) {}

  public getName():string {
    return this.name;
  }
}