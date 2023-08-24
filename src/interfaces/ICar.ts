

export interface ICar {
  id: number;
  image: string;
  name: string;
  engineType: string;
  transmission: string;
  numberOfSeats: number;
  enginePower: string;
  burning: string;
  price: number;
  availability: {
    from:string;
    to: string;
  };
  place: string;
}