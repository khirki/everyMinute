export class Task {
    public name: string;
    public description: string;
    public iconName: string;
    public length: number;

    constructor(name: string, description: string, iconName: string, length: number) {
        this.name = name;
        this.description = description;
        this.iconName = iconName;
        this.length = length;
    }
}