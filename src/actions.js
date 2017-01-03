export const INCREMENT_CURSOR = 'INCREMENT_CURSOR';

export function incrementCursor (keyCode) {
    return {
        type: INCREMENT_CURSOR,
        payload: {
            key: keyCode
        }
    }
}
