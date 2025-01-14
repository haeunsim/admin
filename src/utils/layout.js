/**
 * Changes the body attribute
 */
const changeBodyAttribute = (attribute, value) => {
    if (document.body) document.body.setAttribute(attribute, value);
};

export { changeBodyAttribute };