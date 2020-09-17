//Function to change colors of graphics as percent capacity changes
export function progressGraphicColor(x: number, y: number): string {
    let percentage = (x / y)
    if (percentage <= .33) {
        return '#008450'
    }
    else if (percentage > .33 && percentage <= .67) {
        return '#f7b500'
    }
    else {
        return '#FF0000'
    }
}