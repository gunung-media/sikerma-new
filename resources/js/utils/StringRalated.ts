export const capitalizeFirstWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const kebabToTitle = (str: string) => {
    return str.replace(/-/g, ' ').split(' ').map(capitalizeFirstWord).join(' ');
}
