export const INCREMENT_CURSOR = 'INCREMENT_CURSOR';

export function incrementCursor (keyCode, shiftKey, controlKey, altKey, metaKey) {
    return {
        type: INCREMENT_CURSOR,
        payload: {
            key: keyCode,
            shiftKey: shiftKey,
            controlKey: controlKey,
            altKey: altKey,
            metaKey: metaKey
        }
    }
}
