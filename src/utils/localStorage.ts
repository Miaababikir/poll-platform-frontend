
export const getByKey = (key: string, defaultValue: any) => {
    const item = localStorage.getItem(key);
    console.log({item})
    if (!item) {
        return defaultValue;
    }

    return  JSON.parse(item);
}

export const setByKey = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}