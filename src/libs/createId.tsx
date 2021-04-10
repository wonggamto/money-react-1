//自动创建id的API
let id = 0;
const createId = () => {
    id += 1;
    return id;
};
export {createId};