export class Task {
    public name: string;
    public description: string;
    public iconName: string;

    constructor(name: string, description: string, iconName: string) {
        this.name = name;
        this.description = description;
        this.iconName = iconName;
    }
}