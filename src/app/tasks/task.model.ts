export class Task {
    public name: string;
    public description: string;
    public iconName: string;
    public length: number;

    constructor(name: string, length: number, description: string = '', iconName: string = 'pets' ) {
        this.name = name;
        this.description = description;
        this.iconName = iconName;
        this.length = length;
    }
}