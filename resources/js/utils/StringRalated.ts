export const capitalizeFirstWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const kebabToTitle = (str: string) => {
    return str.replace(/-/g, ' ').split(' ').map(capitalizeFirstWord).join(' ');
}

export const getSlug = (str: string) => {
    return str.split(' ').map(word => word.charAt(0)).join('');
}
