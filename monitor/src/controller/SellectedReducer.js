
export const SellectedReducer = (selected, {type, payload}) => {
    switch(type) {
        case 'ITEM_CLICK':
            selected = payload;
            return selected;
        default:
            return;
    }
}