export default class Greeter {
  static greetType: { [key: string]: [number, number] } = {
    "Good morning": [6, 12],
    "Good evening": [18, 22],
    "Good night": [22, 6],
  };

  static get greeting() {
    const hour = new Date().getHours();
    return (
      Object.keys(this.greetType).find((key) => {
        const hours = this.greetType[key];
        return hour >= hours[0] && hour < hours[1];
      }) || "Hello"
    );
  }

  static greet(name: string) {
    console.log("greet is working");
    const trimmedName = name.trim();
    const firstChar = trimmedName.charAt(0).toUpperCase();
    const newName = `${firstChar}${trimmedName.substring(1)}`;
    return `${this.greeting} ${newName}`;
  }
}
