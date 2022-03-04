const getDefaultStyles = (theme, type) => {
    if (theme) {
        let tempObj = {};
        if (theme[type]) {
            for (const property in theme[type]) {
                tempObj[property] = theme[type][property]
            }
        }
        return tempObj;
    }
}

export default getDefaultStyles;