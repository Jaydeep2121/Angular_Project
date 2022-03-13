import { Ingredients } from "../shared/ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imgpath:string;
    public ingredient:Ingredients[];
    constructor(name:string,desc:string,img:string,ingr:Ingredients[]){
        this.name=name;
        this.description=desc;
        this.imgpath=img;
        this.ingredient=ingr;
    }
}